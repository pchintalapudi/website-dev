<template>
  <article id="summary">
    <section>
      <p class="unlinkable">
        <b class="icon"><tools :color="'blue'"></tools></b>
        <h2>Skills and Tooling</h2>
      </p>
      <div class="data">
        <numbered-stat
          :name="'Coding Languages'"
          :number="7"
          :subtext="'C++, Java, C, Python, Typescript, Javascript, MATLAB'"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Focus Areas'"
          :number="3"
          :subtext="'Intuitive Interfaces, Robust System Design, High Performance Standards'"
        ></numbered-stat>
      </div>
    </section>
    <section>
      <a class="linkable" href="#education">
        <b class="icon"><graduation-cap :color="'green'"></graduation-cap></b>
        <h2>Education and Coursework</h2>
      </a>
      <div class="data">
        <numbered-stat
          :name="'Undergraduate Majors'"
          :number="2"
          :subtext="'Computer Science Engineering and Bioengineering'"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Classes'"
          :number="34"
          :subtext="'Engineering, Science, Math, Design'"
        ></numbered-stat>
      </div>
    </section>
    <section>
      <a class="linkable" href="#work">
        <b class="icon"><flask :color="'yellow'"></flask></b>
        <h2>Internships and Research</h2>
      </a>
      <div class="data">
        <numbered-stat
          :name="'Internships'"
          :number="4"
          :subtext="'NVIDIA, doc.ai, McAfee, Sandia National Labs'"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Research Groups'"
          :number="4"
          :subtext="'Gertler Lab, Sandia National Labs, Blainey Lab, JuliaLab'"
        ></numbered-stat>
      </div>
    </section>
    <section>
      <a class="linkable" href="#projects">
        <b class="icon"><monitor :color="'red'"></monitor></b>
        <h2>Personal Projects</h2>
      </a>
      <div class="data">
        <numbered-stat
          :name="'Major Projects'"
          :number="6"
          :subtext="'Long Project Lifetimes and Large Feature Sets'"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Websites'"
          :number="3"
          :subtext="'MakeMIT 2019 & 2020, LMF 2020-present, This Website'"
        ></numbered-stat>
      </div>
    </section>
  </article>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NumberedStat from "./subcomponents/NumberedStat.vue";
import GraduationCap from "./icons/GraduationCap.vue";
import Tools from "./icons/Tools.vue";
import Monitor from "./icons/Monitor.vue";
import Flask from "./icons/Flask.vue";

export default defineComponent({
  components: {
    NumberedStat,
    GraduationCap,
    Tools,
    Monitor,
    Flask,
  },
  setup() {},
});
</script>
<style scoped>
#summary {
  justify-content: space-evenly;
  padding: 20px;
  font-size: 1.25em;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-auto-flow: column;
}
#summary > * {
  flex: 1;
  text-align: center;
  align-items: center;
  display: contents;
}
.data {
  display: contents;
}
.icon {
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px;
}
.icon > * {
  transform: scale(2.5);
}
.icon::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--fg-color), 0.1);
  border-radius: 50%;
  transition: background-color 300ms;
}
.linkable {
  cursor: pointer;
  align-items: center;
}
.linkable > * {
  transition: transform 300ms;
}
.linkable:hover > * {
  transform: scale(1.05);
}
.unlinkable {
  align-items: center;
}
.conjunction {
  padding: 0.375em;
  display: none;
}
@media (max-width: 800px) {
  #summary {
    font-size: 1.125em;
  }
  .icon {
    width: 80px;
    height: 80px;
    margin: 16px;
  }
  .icon > * {
    transform: scale(2);
  }
}
@media (max-width: 700px) {
  #summary {
    flex-flow: row wrap;
    display: flex;
  }
  #summary > * {
    display: flex;
  }
  .conjunction {
    display: inline;
  }
  .data {
    display: inline-block;
    padding: 0 20px;
  }
}
</style>