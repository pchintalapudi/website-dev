<template>
  <article id="education">
    <b class="icon"><graduation-cap :color="'green'"></graduation-cap></b>
    <h2 class="title">Education and Coursework</h2>
    <h3 class="school">Massachusetts Institute of Technology</h3>
    <h4 class="degree">
      Bachelor of Science in
      <mark class="red">Computer Science Engineering</mark> and
      <mark class="green">Bioengineering</mark>
    </h4>
    <section class="courses">
      <article
        v-for="cls in classes"
        :key="cls.id"
        :id="cls.id"
        :class="[...cls.tags, 'class']"
      >
        <h6>{{ cls.name }}</h6>
        <i>{{ cls.id }}</i>
      </article>
    </section>
  </article>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import GraduationCap from "./icons/GraduationCap.vue";

export default defineComponent({
  components: {
    GraduationCap,
  },
  computed: {
    classes() {
      return useStore().state.courses;
    },
  },
});
</script>
<style scoped>
#education {
  min-height: 100vh;
  align-items: center;
  text-align: center;
  font-size: 1.25em;
}
mark {
  display: inline;
  background-color: transparent;
  transition: color 300ms;
  color: var(--color);
}
.degree {
  display: inline-block;
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
.courses {
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 20px;
}
.class {
    width: 250px;
    text-align: center;
    transition: background-color 300ms;
    margin: 10px;
    padding: 10px;
    justify-content: center;
    border-radius: 10px;
    font-size: 1rem;
}
.cs {
    background-color: rgba(var(--red), 0.1);
}
.bio {
    background-color: rgba(var(--green), 0.1);
}
.cs.bio {
    background-color: rgba(var(--yellow), 0.1);
}
</style>