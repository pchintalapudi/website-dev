<template>
  <i :class="['graduation-cap', color]">
    <i class="base"></i>
  </i>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    color: String,
  },
});
</script>
<style scoped>
.base {
  box-sizing: content-box;
  position: absolute;
  content: "";
  height: 4px;
  width: 0;
  border-style: solid;
  border-bottom-style: none;
  border-color: var(--color);
  --ver-width: 4px;
  --hor-width: 10px;
  border-width: var(--ver-width) var(--hor-width);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-left-radius: 5px 2px;
  transition: border-color 300ms;
  transform: translate(10px, 19px);
}
.base::after {
  position: absolute;
  content: "";
  height: 5px;
  width: 0;
  border-style: solid;
  border-bottom-style: none;
  border-color: var(--color);
  --ver-width: 3px;
  --hor-width: 14px;
  border-width: var(--ver-width) var(--hor-width);
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-right-radius: 5px 2px;
  transition: border-color 300ms;
  transform: translate(-17px, -3.5px);
}
.graduation-cap::after {
  position: absolute;
  content: "";
  height: 10px;
  width: 20px;
  background-color: var(--color);
  transition: background-color 300ms;
  transform: translate(10px, 10px) rotate(-10deg) skewX(60deg)
    rotate3d(1, 0, 0, 45deg);
}
.graduation-cap {
  position: relative;
  width: 40px;
  height: 40px;
}
</style>