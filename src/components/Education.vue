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
        v-for="(cls, idx) in classes"
        :key="cls.id"
        :id="cls.id"
        :class="[...cls.tags, 'class', idx < 5 ? '' : idx < 10 ? 'top10' : idx < 20 ? 'top20' : 'all']"
      >
        <h5>{{ cls.name }}</h5>
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
  align-items: center;
  text-align: center;
  font-size: 1.25em;
  padding: 20px 0;
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
  padding: 20px 5vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-self: stretch;
  column-gap: 10px;
  row-gap: 10px;
}
.class {
  text-align: center;
  transition: background-color 300ms;
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

@media (max-width: 1000px) {
  .class.all {
    display: none;
  }
}
@media (max-width: 800px) {
  .icon {
    width: 100px;
    height: 100px;
  }
  .icon > * {
    transform: scale(2.5);
  }
  .class.top20 {
    display: none;
  }
}
@media (max-width: 600px) {
  .class.top10 {
    display: none;
  }
}
</style>