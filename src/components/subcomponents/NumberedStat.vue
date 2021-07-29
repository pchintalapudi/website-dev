<template>
  <article class="stat">
    <h4 class="number">{{ number }}</h4>
    <h3 class="name"><p class="inline-number" aria-hidden="true">{{ number }}</p>&nbsp;{{ name }}</h3>
    <p class="subtext">{{ subtext }}</p>
  </article>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    number: Number,
    subtext: String,
  },
});
</script>
<style scoped>
.number {
  border-radius: 50%;
  border: 4px solid rgb(var(--fg-color));
  font-size: 4em;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  color: rgb(var(--fg-color));
  font-weight: normal;
  margin: 20px;
  transition: color 300ms, border-color 300ms;
}
.name {
  display: inline-block;
}
.stat {
  align-items: center;
  padding: 20px;
  text-align: center;
}
.inline-number {
  font-size: 0;
  opacity: 0;
  display: inline;
}
@media (max-width: 1000px) {
  .number {
    font-size: 3em;
  }
}
@media (max-width: 800px) {
  .number {
    font-size: 2em;
  }
}
@media (max-width: 700px) {
  .stat {
    display: inline;
    padding: 0;
  }
  .name {
    display: inline;
    font-weight: normal;
    color: var(--text-color);
    transition: color 300ms;
    font-family: "Merriweather";
    font-size: 1em;
  }
  .number {
    display: none;
  }
  .inline-number {
    font-size: 1em;
    opacity: 1;
  }
  .subtext {
    display: none;
  }
}
</style>