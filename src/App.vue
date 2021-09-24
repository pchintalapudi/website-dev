<template>
  <main :class="darkMode ? 'dark' : 'light'">
    <span :class="['dark-mode-toggle']" @click="toggleDarkMode()">
      <button class="button">Toggle Dark Mode</button>
      <div class="rays">
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
      </div>
    </span>
    <title-vue></title-vue>
    <summary-vue></summary-vue>
    <education-vue></education-vue>
    <work-vue></work-vue>
    <projects-vue></projects-vue>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
} from "vue";
import TitleVue from "./components/Title.vue";
import SummaryVue from "./components/Summary.vue";
import EducationVue from "./components/Education.vue";
import WorkVue from "./components/Work.vue";
import ProjectsVue from "./components/Projects.vue";

export default defineComponent({
  setup() {
    const darkMode = ref(false);
    const sitePreference = localStorage.getItem("darkmode");
    if (sitePreference === null) {
      const changeListener = (event: MediaQueryListEvent) => {
        const sitePreference = localStorage.getItem("darkmode");
        if (sitePreference !== null) {
          return;
        }
        darkMode.value = event.matches;
      };
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      onMounted(() => mediaQuery.addEventListener("change", changeListener));
      onBeforeUnmount(() =>
        mediaQuery.removeEventListener("change", changeListener)
      );
    } else {
      darkMode.value = sitePreference === "dark";
    }
    return { darkMode };
  },
  name: "App",
  components: {
    TitleVue,
    SummaryVue,
    EducationVue,
    WorkVue,
    ProjectsVue,
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkmode", this.darkMode ? "dark" : "light");
    },
  },
});
</script>

<style>
.light {
  --bg-color: 255, 255, 255;
  --fg-color: 0, 0, 0;
  --blue: 0, 100, 200;
  --green: 0, 144, 64;
  --yellow: 200, 175, 0;
  --red: 206, 32, 32;
}
.dark {
  --bg-color: 18, 18, 18;
  --fg-color: 222, 222, 222;
  --blue: 0, 127, 255;
  --green: 32, 225, 64;
  --yellow: 255, 215, 0;
  --red: 225, 64, 64;
}
* {
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
style,
script,
head {
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
h5,
h6 {
  font-size: 1.0625em;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans", sans-serif;
  color: rgb(var(--fg-color));
  transition: color 300ms;
}
:any-link {
  text-decoration: none;
  color: rgb(var(--blue));
  transition: color 300ms;
}
main {
  position: relative;
  --text-color: rgba(var(--fg-color), 0.8);
  background-color: rgb(var(--bg-color));
  color: var(--text-color);
  transition: color 300ms, background-color 300ms;
  font-family: "Montserrat", sans-serif;
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
.dark-mode-toggle {
  position: absolute;
  top: 2.5vh;
  right: 5vw;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid rgb(var(--fg-color));
  transition: border-color 300ms;
}
.dark-mode-toggle > button {
  color: transparent;
  background-color: transparent;
  font-size: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
.ray {
  position: absolute;
  top: 5%;
  left: calc(50% - 1px);
  bottom: 5%;
  border-right: 2px solid rgba(var(--fg-color), 1);
}
.ray:nth-of-type(1) {
  transform: rotate(0deg);
}
.ray:nth-of-type(2) {
  transform: rotate(45deg);
}
.ray:nth-of-type(3) {
  transform: rotate(90deg);
}
.ray:nth-of-type(4) {
  transform: rotate(135deg);
}
.rays {
  transition: transform 300ms;
  height: 100%;
  width: 100%;
}
.dark .rays {
  transform: scale(0.6);
}
.dark-mode-toggle::after {
  position: absolute;
  content: "";
  width: 62.5%;
  height: 62.5%;
  border-radius: 50%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: background-color 300ms, transform 300ms;
  background-color: rgb(var(--bg-color));
}
.dark .dark-mode-toggle::after {
  background-color: rgb(var(--fg-color));
  transform: scale(0.9);
}
.dark-mode-toggle::before {
  position: absolute;
  content: "";
  width: 62.5%;
  height: 62.5%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  background-color: rgb(var(--fg-color));
  z-index: 2;
  transition: background-color 300ms, transform 300ms;
  transform: scale(0.7);
}
.dark .dark-mode-toggle::before {
  background-color: rgb(var(--bg-color));
  transform: scale(0.9) translate(20%, -10%);
}
@keyframes highlight {
  from {
    background-color: rgba(var(--blue), 0.25);
  }

  50% {
    background-color: rgba(var(--blue), 0.25);
  }

  to {
  }
}
#app main :target {
  animation: highlight 2s linear;
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
  h5,
  h6 {
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
  h5,
  h6 {
    font-size: 1.0156125em;
  }
}
</style>
