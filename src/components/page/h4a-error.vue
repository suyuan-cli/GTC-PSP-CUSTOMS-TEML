<template>
  <div class="container">
    <header class="header">
      <div class="header-inner">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfEAAABMCAYAAAB9EY5iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGqWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTA2VDE2OjIyOjQxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0wNlQxNjozMzoxMSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0wNlQxNjozMzoxMSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMGIzZmU3OC0xNTNjLWExNGYtOWJiNC00YjAwMTE1MGYyNzEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxMzdiYzMyMC1hNTg1LTRlNDEtOThmZi1lMTlhODNjZTkzNWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3OTNhZWIxNy0yYThiLTQ2NGMtOWY1My1iNjU3MDRjMjhlZGYiPiA8cGhvdG9zaG9wOlRleHRMYXllcnM+IDxyZGY6QmFnPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9Iua1t+WFs+a6r+a6kOi+heWKqeS/oeaBr+ezu+e7nyIgcGhvdG9zaG9wOkxheWVyVGV4dD0i5rW35YWz5rqv5rqQ6L6F5Yqp5L+h5oGv57O757ufIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OTNhZWIxNy0yYThiLTQ2NGMtOWY1My1iNjU3MDRjMjhlZGYiIHN0RXZ0OndoZW49IjIwMjAtMTEtMDZUMTY6MjI6NDErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjBiM2ZlNzgtMTUzYy1hMTRmLTliYjQtNGIwMDExNTBmMjcxIiBzdEV2dDp3aGVuPSIyMDIwLTExLTA2VDE2OjMzOjExKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QsTDFAAAHPZJREFUeNrtXV+IpVdS//XzrMIdlElY8KF7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"
        />
      </div>
    </header>
    <div class="error-page">
      <div class="error-code">
        4
        <span>0</span>3
      </div>
      <div class="error-desc">抱歉，登录失败，请联系管理员</div>
      <div class="error-handle">
        <!-- <el-button type="primary" size="large">返回登录</el-button> -->
        <el-button class="error-btn" type="primary" size="large" @click="goBack"
          >返回登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import hc from '@/public-method/HhcJump.js';
export default {
  props: {
    msg: {
      type: String,
      default: '抱歉，您没有权限，请联系管理员申请',
    },
  },
  methods: {
    goBack() {
      hc.goLogin();
    },
  },
  mounted() {},
};
</script>


<style scoped>
.container {
  min-width: 1200px;
  min-height: 670px;
  height: 100%;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  position: relative;
}

.error-page {
  width: 1200px;
  height: 600px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -600px;
  margin-top: -230px;
}

.error-code {
  line-height: 1;
  font-size: 200px;
  font-weight: bolder;
  color: #2d8cf0;
  display: inline-block;
}

.error-code span {
  color: #00a854;
}

.error-desc {
  font-size: 30px;
  color: #777;
  text-align: center;
}

.error-handle {
  margin-top: 30px;
  padding-bottom: 200px;
}

.error-btn {
  /* margin-left: 100px; */
}

.header {
  width: 100%;
  height: 71px;
  font-size: 22px;
  color: #fff;
  background-color: #304986 !important;
}

.header-inner {
  height: 71px;
  line-height: 71px;
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.header-inner img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 50px;
  display: inline-block;
  vertical-align: middle;
}
</style>
