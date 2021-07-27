<template>
  <article id="work">
    <b class="icon"><flask-vue :color="'yellow'"></flask-vue></b>
    <section class="body">
      <section>
        <h2 class="header">Internships</h2>
        <section class="experiences">
          <article
            v-for="internship in internships"
            :key="internship.id"
            :class="[...internship.tags, 'work']"
            :id="internship.id"
          >
            <h5>{{ internship.role }}</h5>
            <span class="metadata">
              <h6>{{ internship.company }}</h6>
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
      <section>
        <h2 class="header">Research</h2>
        <section class="experiences">
          <article
            v-for="experience in research"
            :key="experience.id"
            :class="[...experience.tags, 'work']"
            :id="experience.id"
          >
            <h5>{{ experience.role }}</h5>
            <span class="metadata">
              <h6>{{ experience.company }}</h6>
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
import marked from "marked";

export default defineComponent({
  components: {
    FlaskVue,
  },
  computed: {
    internships() {
      return useStore().state.work.filter((w) => w.tags.includes("internship"));
    },
    research() {
      return useStore().state.work.filter((w) => w.tags.includes("research"));
    },
  },
  methods: {
    dateFromString(date: string) {
      if (date === "present") {
        return date;
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
  width: 50%;
  padding: 5px;
}
.experiences {
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: rgba(var(--fg-color), 0.02);
  transition: background-color 300ms;
  height: 100%;
  align-items: flex-start;
}
.work {
  margin: 10px;
  padding: 10px;
  transition: background-color 300ms;
  border-radius: 10px;
}
.work > p {
  font-size: 1rem;
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
</style>
