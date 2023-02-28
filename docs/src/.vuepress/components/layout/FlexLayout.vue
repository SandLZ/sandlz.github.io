<template>
  <div class="flex-demo">
    <div class="content1">我是自适应的,要写在前面优先渲染</div>
    <div class="left1">左边：我是固定的</div>
    <div class="right1">右边：我是固定的</div>
  </div>
</template>

<style scoped>
.flex-demo {
  display: flex;
}
.content1 {
  background-color: green;
  flex: 1;
  order: 2;
}
.left1 {
  background-color: red;
  width: 100px;
  height: 100px;
  order: 1;
}
.right1 {
  background-color: bisque;
  width: 200px;
  height: 200px;
  order: 3;
}
</style>
