<template>
  <article id="work">
    <b class="icon"><flask-vue :color="'yellow'"></flask-vue></b>
    <section class="body">
      <section class="internships">
        <h2 class="header">Internships</h2>
        <section class="experiences">
          <article
            v-for="internship in internships"
            :key="internship.id"
            :class="[...internship.tags, 'work']"
            :id="internship.id"
          >
            <h3>{{ internship.role }}</h3>
            <span class="metadata">
              <h4>{{ internship.company }}</h4>
              <i
                >{{ dateFromString(internship.start) }} to
                {{ dateFromString(internship.end) }}</i
              >
            </span>
            <p
              class="description"
              v-html="markdown(internship.description)"
            ></p>
          </article>
        </section>
      </section>
      <section class="research">
        <h2 class="header">Research</h2>
        <section class="experiences">
          <article
            v-for="experience in research"
            :key="experience.id"
            :class="[...experience.tags, 'work']"
            :id="experience.id"
          >
            <h3>{{ experience.role }}</h3>
            <span class="metadata">
              <h4>{{ experience.company }}</h4>
              <i
                >{{ dateFromString(experience.start) }} to
                {{ dateFromString(experience.end) }}</i
              >
            </span>
            <p
              class="description"
              v-html="markdown(experience.description)"
            ></p>
          </article>
        </section>
      </section>
    </section>
  </article>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import FlaskVue from "./icons/Flask.vue";
import { marked } from "marked";

export default defineComponent({
  components: {
    FlaskVue,
  },
  computed: {
    internships() {
      return useStore().state.work.filter((w) => w.tags.includes("internship") && !w.hidden);
    },
    research() {
      return useStore().state.work.filter((w) => w.tags.includes("research") && !w.hidden);
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
#work {
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
  display: grid;
  grid-auto-flow: column;
}
.body > * {
  display: contents;
}
.experiences {
  display: contents;
}
.work {
  margin: 10px;
  padding: 10px;
  transition: background-color 300ms;
  border-radius: 10px;
}
.work > p, .metadata {
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
.description :deep(*) {
  display: inline-block;
}
.internships .work, .internships .header {
  grid-column: 1;
}
.research .work, .research .header {
  grid-column: 2;
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
  .research .work, .research .header {
    grid-column: 1;
  }
}
</style>
