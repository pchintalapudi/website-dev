<template>
  <article id="projects">
    <b class="icon"><monitor-vue :color="'red'"></monitor-vue></b>
    <section class="body">
      <section>
        <h2 class="header">Personal Projects</h2>
        <section class="projects">
          <article
            v-for="project in projects"
            :key="project.id"
            :class="[...project.tags, 'project']"
            :id="project.id"
          >
            <h3>{{ project.name }}</h3>
            <span class="metadata">
              <i
                >{{ dateFromString(project.start) }} to
                {{ dateFromString(project.end) }}</i
              >
            </span>
            <p class="description" v-html="markdown(project.description)"></p>
            <a :href="project.github" v-if="project.github" class="link">GitHub Project</a>
            <a :href="project.link" v-if="project.link" class="link">Live Demo</a>
          </article>
        </section>
      </section>
    </section>
  </article>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import MonitorVue from "./icons/Monitor.vue";
import marked from "marked";

export default defineComponent({
  components: {
    MonitorVue,
  },
  computed: {
    projects() {
      return useStore().state.projects;
    },
  },
  methods: {
    dateFromString(date: string | null) {
      if (date === null) {
        return "Present";
      }
      const [month, year] = date.split("-");
      return (
        new Date(new Date().getFullYear(), +month - 1).toLocaleString(
          "default",
          { month: "long" }
        ) +
        " " +
        year
      );
    },
    markdown(raw: string) {
      return marked(raw);
    },
  },
});
</script>
<style scoped>
#projects {
  font-size: 1.125em;
  padding: 20px;
  align-items: center;
  padding: 20px 5vw;
}
.icon {
  width: 120px;
  height: 120px;
  position: relative;
  justify-content: center;
  align-items: center;
}
.icon::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(var(--fg-color), 0.1);
  transition: background-color 300ms;
  border-radius: 50%;
}
.icon > * {
  transform: scale(3);
}
.body {
  flex-flow: row wrap;
}
.body > * {
  padding: 5px;
}
.projects {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
}
.project {
  padding: 10px;
  transition: background-color 300ms;
  border-radius: 10px;
  flex: 1;
}
.project > p, .metadata {
  font-size: 0.8em;
  padding: 10px 0;
}
.header {
  text-align: center;
  padding: 20px;
}
.cs:hover {
  background-color: rgba(var(--red), 0.1);
}
.bio:hover {
  background-color: rgba(var(--green), 0.1);
}
.description >>> * {
  display: inline-block;
}
.link {
  align-self: flex-start;
}
@media (max-width: 800px) {
  .icon {
    width: 100px;
    height: 100px;
  }
  .icon > * {
    transform: scale(2.5);
  }
}
@media (max-width: 600px) {
  .projects {
    grid-template-columns: 1fr;
  }
}
</style>
