<template>
  <article id="work">
    <b class="icon"><flask-vue :color="'yellow'"></flask-vue></b>
    <h2 class="header">Work Experience</h2>
    <section class="experiences">
      <section class="experiences">
        <article
          v-for="exp in experiences"
          :key="exp.id"
          :class="[...exp.tags, 'work']"
          :id="exp.id"
        >
          <h3>{{ exp.role }}</h3>
          <span class="metadata">
            <h4>{{ exp.company }}</h4>
            <i v-if="exp.start != exp.end"
              >{{ dateFromString(exp.start) }} to
              {{ dateFromString(exp.end) }}</i
            >
            <i v-else>{{ dateFromString(exp.start) }}</i>
          </span>
          <p
            class="description"
            v-html="markdown(exp.description)"
          ></p>
        </article>
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
    experiences() {
      return useStore().state.work;
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
.experiences {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
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
@media (max-width: 800px) {
  .icon {
    width: 100px;
    height: 100px;
  }
  .icon > * {
    transform: scale(2.5);
  }
}
</style>
