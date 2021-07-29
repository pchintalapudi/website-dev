<template>
  <i :class="['graduation-cap', color]"></i>
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
.graduation-cap::before {
  position: absolute;
  content: "";
  background-color: var(--color);
  transition: background-color 300ms;
  height: 10px;
  width: 19.5px;
  transform: translate(10px, 20px);
  border-bottom-left-radius: 5px 2px;
  border-bottom-right-radius: 5px 2px;
}
.graduation-cap::after {
  position: absolute;
  content: "";
  height: 10px;
  width: 20px;
  background-color: var(--color);
  box-shadow: -7.5px 5.5px 0 0px rgb(var(--bg-color));
  transition: background-color 300ms, box-shadow 300ms;
  transform: translate(10px, 10px) rotate(-10deg) skewX(60deg)
    rotate3d(1, 0, 0, 45deg);
}
.graduation-cap {
  position: relative;
  width: 40px;
  height: 40px;
}
</style>