<template>
  <i :class="['monitor', color]">
      <i class="content"></i>
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
.monitor {
  width: 40px;
  height: 40px;
  position: relative;
}
.monitor>.content {
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  height: 46.875%;
  width: 62.5%;
  margin: auto;
  border-radius: 20%;
  border: solid 2px var(--color);
  transition: border-color 300ms;
}
.monitor>.content::after {
    content:"";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    width: 75%;
    bottom: -62.5%;
    margin: auto;
    background-color: var(--color);
    border-radius: 1px;
    transition: background-color 300ms;
}
.monitor>.content::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    transform: translateY(125%);
    height: 50%;
    width: 2.5px;
    background-color: var(--color);
    transition: background-color 300ms;
}
</style>