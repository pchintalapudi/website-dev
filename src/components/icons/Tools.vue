<template>
  <i :class="['tools', color]">
    <i class="mallet"></i>
    <i class="wrench"></i>
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
.tools > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mallet {
  margin: auto;
  width: 10%;
  top: 15%;
  bottom: 15%;
  background-color: var(--color);
  transform: rotate(45deg);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
}
.mallet::after {
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  height: 32.5%;
  left: -150%;
  width: 400%;
  background-color: var(--color);
  border-radius: 20%;
}
.tools {
  width: 40px;
  height: 40px;
  position: relative;
}
.wrench {
  width: 10%;
  top: 20%;
  bottom: 15%;
  background-color: var(--color);
  margin: auto;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  transform: rotate(-45deg);
}
.wrench::after {
    content: "";
    left: 0;
    top: 0;
    width: 80%;
    height: 32.5%;
    transform: translate(112.5%, -50%);
    background-color: var(--color);
    border-top-right-radius: 100% 50%;
    border-bottom-right-radius: 100% 50%;
    position: absolute;
}
.wrench::before {
    content: "";
    right: 0;
    top: 0;
    width: 80%;
    height: 32.5%;
    transform: translate(-112.5%, -50%);
    background-color: var(--color);
    border-top-left-radius: 100% 50%;
    border-bottom-left-radius: 100% 50%;
    position: absolute;
}
</style>