<template>
<main>
  <title-vue></title-vue>
  <summary-vue></summary-vue>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleVue from './components/Title.vue';
import SummaryVue from './components/Summary.vue';

export default defineComponent({
  name: 'App',
  components: {
    TitleVue,
    SummaryVue  
  }
});
</script>

<style>
#app {
  font-family: 'Merriweather', serif;
  font-size: 1.25em;
}
.light {
  --bg-color: 255,255,255;
  --fg-color: 0,0,0;
  --blue: 0, 100, 200;
  --green: 0, 144, 64;
  --yellow: 200, 175, 0;
  --red: 206, 32, 32;
}
.dark {
  --bg-color: 18,18,18;
  --fg-color: 222,222,222;
  --blue: 0,127,255;
  --green: 32,225,64;
  --yellow: 225, 255, 64;
  --red: 225,64,64;
}
@media (prefers-color-scheme: dark) {
  main {
    --bg-color: 18,18,18;
    --fg-color: 222,222,222;
    --blue: 0,127,255;
    --green: 32,225,64;
    --yellow: 225, 255, 64;
    --red: 225,64,64;
  }
}
@media not all and (prefers-color-scheme: dark) {
  main {
    --bg-color: 255,255,255;
    --fg-color: 0,0,0;
    --blue: 0, 100, 200;
    --green: 0, 144, 64;
    --yellow: 200, 175, 0;
    --red: 206, 32, 32;
  }
}
* {
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
style, script, head {
  display: none;
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.25em;
}
h4 {
  font-size: 1.125em;
}
h5, h6 {
  font-size: 1.0625em;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Rubik', sans-serif;
  color: rgb(var(--fg-color));
  transition: color 300ms;
}
:any-link {
  text-decoration: none;
  color: rgb(var(--blue));
  transition: color 300ms;
}
main {
  background-color: rgb(var(--bg-color));
  color: rgba(var(--fg-color), 0.8);
  transition: color 300ms, background-color 300ms;
}
.blue {
  --color: rgb(var(--blue));
}
.green {
  --color: rgb(var(--green));
}
.yellow {
  --color: rgb(var(--yellow));
}
.red {
  --color: rgb(var(--red));
}
html {
  scroll-behavior: smooth;
}
</style>
