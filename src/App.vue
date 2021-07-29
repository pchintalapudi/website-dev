<template>
<main>
  <title-vue></title-vue>
  <summary-vue></summary-vue>
  <education-vue></education-vue>
  <work-vue></work-vue>
  <projects-vue></projects-vue>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleVue from './components/Title.vue';
import SummaryVue from './components/Summary.vue';
import EducationVue from './components/Education.vue';
import WorkVue from './components/Work.vue';
import ProjectsVue from './components/Projects.vue';

export default defineComponent({
  name: 'App',
  components: {
    TitleVue,
    SummaryVue,
    EducationVue,
    WorkVue,
    ProjectsVue
  }
});
</script>

<style>
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
  --text-color: rgba(var(--fg-color), 0.8);
  background-color: rgb(var(--bg-color));
  color: var(--text-color);
  transition: color 300ms, background-color 300ms;
  font-family: 'Merriweather', serif;
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
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
@keyframes highlight {
  from {
    background-color: rgba(var(--blue), 0.25);
  }

  to {
  }
}
#app main :target {
  animation: highlight 1s linear;
}
@media (max-width: 1000px) {
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1.125em;
  }
  h4 {
    font-size: 1.0625em;
  }
  h5, h6 {
    font-size: 1.03125em;
  }
}
@media (max-width: 800px) {
  h2 {
    font-size: 1.125em;
  }
  h3 {
    font-size: 1.0625em;
  }
  h4 {
    font-size: 1.03125em;
  }
  h5, h6 {
    font-size: 1.0156125em;
  }
}
</style>
