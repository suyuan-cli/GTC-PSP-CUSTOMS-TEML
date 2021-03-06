import Vue from 'vue';
//滚动条
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// v-dialogDrag: 弹窗拖拽属性
Vue.directive('dialogDrag', {
  bind(el, binding, vnode, oldVnode) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header');
    const dragDom = el.querySelector('.el-dialog');

    dialogHeaderEl.style.cssText += ';cursor:move;';
    dragDom.style.cssText += ';top:0px;';

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = (() => {
      if (window.document.currentStyle) {
        return (dom, attr) => dom.currentStyle[attr];
      } else {
        return (dom, attr) => getComputedStyle(dom, false)[attr];
      }
    })();

    dialogHeaderEl.onmousedown = e => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;

      const screenWidth = document.body.clientWidth; // body当前宽度
      const screenHeight = document.documentElement.clientHeight; // 可见区域高度(应为body高度，可某些环境下无法获取)

      const dragDomWidth = dragDom.offsetWidth; // 对话框宽度
      const dragDomheight = dragDom.offsetHeight; // 对话框高度

      const minDragDomLeft = dragDom.offsetLeft;
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;

      const minDragDomTop = dragDom.offsetTop;
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight;

      // 获取到的值带px 正则匹配替换
      let styL = sty(dragDom, 'left');
      let styT = sty(dragDom, 'top');

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100);
      } else {
        styL = +styL.replace(/\px/g, '');
        styT = +styT.replace(/\px/g, '');
      }

      document.onmousemove = function(e) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        // 边界处理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }

        // 移动当前元素
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;
      };

      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
});

/*下拉控件的loadmore*/
Vue.directive('loadMore', {
  inserted(el, binding) {
    // 获取element-ui定义好的scroll盒子
    const selectdownDom = el.querySelector(
      '.el-select-dropdown .el-select-dropdown__wrap'
    );
    selectdownDom.addEventListener('scroll', function() {
      const condition =
        (this.scrollHeight - this.scrollTop) >> 0 <= this.clientHeight;
      if (condition) {
        binding.value();
      }
    });
  }
});

// @description 为自定义滚动条全局注入自定义指令。自动判断该更新PerfectScrollbar还是创建它
// @param {Element} el - 必填。dom元素
const el_scrollBar = (el, options) => {
  //在元素上加点私货，名字随便取，确保不会和已有属性重复即可，我取名叫做_ps_
  if (el._ps_ instanceof PerfectScrollbar) {
    el._ps_.update();
  } else {
    //el上挂一份属性
    el._ps_ = new PerfectScrollbar(el, {
      suppressScrollY: false,
      scrollbarXBottom: -5
    });
  }
};
Vue.directive('scrollbar', {
  inserted(el, binding) {
    const value = binding.value;
    if (value === 'table') {
      el = el.querySelector('.el-table__body-wrapper');
      if (!el) {
        return console.warn('未发现className为el-table__body-wrapper的dom');
      }
    }
    const rules = ['fixed', 'absolute', 'relative'];
    if (!rules.includes(window.getComputedStyle(el, null).position)) {
      console.error(
        `perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join(
          '、'
        )}`
      );
    }
    el_scrollBar(el);
  },
  componentUpdated(el, binding, vnode) {
    const value = binding.value;
    if (value === 'table') {
      el = el.querySelector('.el-table__body-wrapper');
      if (!el) {
        return console.warn('未发现className为el-table__body-wrapper的dom');
      }
    }
    vnode.context.$nextTick(() => {
      try {
        el_scrollBar(el);
      } catch (error) {
        console.error(error);
      }
    });
  }
});

/*滚动实现  todo: 抽象出来，适用于更多的滚动场景*/
const move = (el, vnode, options) => {
  let { rowLimit = 3, stopInterval = 2000 } = options;
  /*数据量不大于展示行数，则不滚动*/
  if (vnode.componentInstance.data.length <= rowLimit) {
    return;
  }
  /*chrome，firefox下可用，可能需要根据浏览器内核判断事件名称*/
  let animationEventName = 'webkitAnimationEnd';
  let table = el.querySelector('.el-table');
  let isHover = false;
  let move = true;
  let mouseenter = e => {
    isHover = true;
  };
  let mouseleave = e => {
    isHover = false;
  };
  table.addEventListener('mouseenter', mouseenter);
  table.addEventListener('mouseleave', mouseleave);
  table.classList.add('cyclic-rolling-table');
  let trH = table.querySelector('.el-table__body tr').offsetHeight;
  let headerH = table.querySelector('.el-table__header').offsetHeight;
  table.style.height = rowLimit * trH + headerH + 'px';
  let tbodys = table.querySelectorAll('.el-table__body tbody');
  let animationEndList = [];
  tbodys.forEach(tbody => {
    /*这里是为了数据更新时，将数据从1开始展示*/
    let num = tbody.querySelector('.el-table__body tr td .cell div');
    num = parseInt(num.innerText);
    if (num > 1) {
      let trs = tbody.querySelectorAll('.el-table__body tr');
      let len = vnode.componentInstance.data.length - num;
      for (let i = 0; i <= len; i++) {
        tbody.appendChild(trs[i]);
      }
    }
    /*动画结束后移动行,将第一行移到最后*/
    let animationEnd = e => {
      let firstTr = tbody.querySelector('.el-table__body tr');
      tbody.appendChild(firstTr);
      tbody.classList.remove('cyclic-rolling-tr');
    };
    tbody.addEventListener(animationEventName, animationEnd);
    animationEndList.push(animationEnd);
  });
  /*定时添加class，触发移动动画*/
  let timer = setInterval(() => {
    !move ||
      isHover ||
      tbodys.forEach(tbody => {
        tbody.classList.add('cyclic-rolling-tr');
      });
  }, stopInterval);
  return {
    table,
    tbodys,
    mouseenter,
    mouseleave,
    animationEndList,
    animationEventName,
    timer
  };
};

/*滚动解绑*/
const unbindMove = ({
  timer,
  table,
  tbodys,
  mouseleave,
  mouseenter,
  animationEndList,
  animationEventName
}) => {
  timer && clearInterval(timer);
  mouseenter && table.removeEventListener('mouseenter', mouseenter);
  mouseleave && table.removeEventListener('mouseleave', mouseleave);
  tbodys &&
    tbodys.forEach((tbody, index) => {
      tbody.removeEventListener(animationEventName, animationEndList[index]);
    });
};

Vue.directive('cyclicRolling', {
  inst: {},
  inserted(el, binding, vnode) {
    unbindMove(binding.def.inst);
    if (binding.value !== false) {
      vnode.context.$nextTick(() => {
        binding.def.inst = move(el, vnode, {});
      });
    }
  },
  componentUpdated(el, binding, vnode) {
    unbindMove(binding.def.inst);
    if (binding.value !== false) {
      vnode.context.$nextTick(() => {
        binding.def.inst = move(el, vnode, {});
      });
    }
  },
  unbind(el, binding, vnode) {
    unbindMove(binding.def.inst);
  }
});

Vue.directive('fixedRow', {
  inserted(el, binding, vnode) {
    let rowCount = binding.value || 5;
    vnode.context.$nextTick(() => {
      let rowDom = el.querySelector('.el-table__body .el-table__row');
      if (rowDom !== null) {
        let row = rowDom.offsetHeight;
        el.querySelector('.el-table__body-wrapper').style.minHeight =
          row * rowCount + 'px';
      } else {
        el.querySelector(
          '.el-table__body-wrapper'
        ).style.minHeight = `${binding.value * 36}px`;
      }
    });
  },
  componentUpdated(el, binding, vnode) {
    let rowCount = binding.value || 5;
    vnode.context.$nextTick(() => {
      let rowDom = el.querySelector('.el-table__body .el-table__row');
      if (rowDom !== null) {
        let row = rowDom.offsetHeight;
        el.querySelector('.el-table__body-wrapper').style.minHeight =
          row * rowCount + 'px';
      } else {
        el.querySelector(
          '.el-table__body-wrapper'
        ).style.minHeight = `${binding.value * 36}px`;
      }
    });
  },
  unbind(el, binding, vnode) {}
});

Vue.directive('multiShow', {
  inserted(el, binding, vnode) {
    if (binding.value) return;
    if (!vnode.componentInstance.multiple) return;
    let obj = el.querySelectorAll('.el-select__tags>span');
    obj.forEach(item => item.remove());
    let span = document.createElement('span');
    if (vnode.componentInstance.selected.length > 0) {
      span.innerHTML = `<div class="common-select-label">
          ${vnode.componentInstance.selected.map(item => {
            return item.label;
          })}</div>`;
    }
    el.querySelector('.el-select__tags').insertBefore(
      span,
      el.querySelector('.el-select__tags .el-select__input')
    );
  },
  update(el, binding, vnode) {
    binding.def.inserted(el, binding, vnode);
  },
  unbind(el, binding, vnode) {}
});
