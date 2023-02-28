<template>
  <div class="demo">
    <div class="content">我是自适应的,要写在前面优先渲染</div>
    <div class="left">左边：我是固定的</div>
    <div class="right">右边：我是固定的</div>
  </div>
</template>
<style scoped>
.demo {
  padding: 0 200px 0 100px;
  background-color: gray;
  overflow: hidden;
  zoom: 1;
}
.left,
.right,
.content {
  float: left;
  position: relative;
}
.left {
  background-color: red;
  width: 100px;
  height: 100px;
  margin-left: -100%;
  left: -100px;
}
.right {
  background-color: bisque;
  width: 200px;
  height: 200px;
  margin-left: -200px;
  right: -200px;
}
.content {
  background-color: green;
  width: 100%;
}
</style>
