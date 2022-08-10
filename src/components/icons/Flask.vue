<template>
  <i :class="['flask', color]"></i>
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
.flask {
  box-sizing: content-box;
  position: absolute;
  height: 0;
  width: 9px;
  bottom: 35%;
  left: 0;
  right: 0;
  margin: auto;
  border: 6px solid transparent;
  border-bottom: 12px solid var(--color);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: border-bottom-color 300ms;
}
.flask::after {
  position: absolute;
  content: "";
  margin: auto;
  left: -0.5px;
  right: 0;
  top: 0;
  transform: translateY(calc(2px - 100%));
  width: 6px;
  height: 10px;
  border: solid 2px var(--color);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  transition: border-color 300ms;
}
</style>