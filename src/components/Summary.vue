<template>
  <article id="summary">
    <section>
      <p class="unlinkable">
        <b class="icon"><tools :color="'blue'"></tools></b>
        <h2>Skills and Tooling</h2>
      </p>
      <div class="data">
        <numbered-stat
          :name="'Programming Languages'"
          :number="languages.length"
          :subtext="languages.join(', ')"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Focus Areas'"
          :number="focuses.length"
          :subtext="focuses.join(', ')"
        ></numbered-stat>
      </div>
    </section>
    <section>
      <a class="linkable" href="#education" style="--linkable-color:var(--green)">
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
          :number="classes.length"
          :subtext="'Engineering, Science, Math, Design'"
        ></numbered-stat>
      </div>
    </section>
    <section>
      <a class="linkable" href="#work" style="--linkable-color:var(--yellow)">
        <b class="icon"><flask :color="'yellow'"></flask></b>
        <h2>Internships and Research</h2>
      </a>
      <div class="data">
        <numbered-stat
          :name="'Internships'"
          :number="internships.length"
          :subtext="Array.from(new Set(internships.map(i => i.company))).join(', ')"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Research Groups'"
          :number="research.length"
          :subtext="Array.from(new Set(research.map(i => i.company))).join(', ')"
        ></numbered-stat>
      </div>
    </section>
    <section>
      <a class="linkable" href="#projects" style="--linkable-color:var(--red)">
        <b class="icon"><monitor :color="'red'"></monitor></b>
        <h2>Productivity</h2>
      </a>
      <div class="data">
        <numbered-stat
          :name="'Personal Projects'"
          :number="projects.length"
          :subtext="'Long Project Lifetimes and Large Feature Sets'"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Commits to Julia'"
          :number="merged_prs"
          :subtext="'Number of commits on Julia master branch'"
          :loading="loading"
        ></numbered-stat>
      </div>
    </section>
  </article>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import NumberedStat from "./NumberedStat.vue";
import GraduationCap from "./icons/GraduationCap.vue";
import Tools from "./icons/Tools.vue";
import Monitor from "./icons/Monitor.vue";
import Flask from "./icons/Flask.vue";
import { useStore } from "@/store";

export default defineComponent({
  components: {
    NumberedStat,
    GraduationCap,
    Tools,
    Monitor,
    Flask,
  },
  setup() {
    const merged_prs = ref(0);
    const loading = ref(true);
    const pr_count = async () => {
      let link = 'https://api.github.com/repos/JuliaLang/julia/commits?author=pchintalapudi';
      let total = 0;
      while (link) {
        const resp = await window.fetch(link);
        total += (await resp.json()).length;
        const link_header = resp.headers.get('Link');
        link = '';
        if (link_header) {
          let links = link_header.split(',');
          for (const l of links) {
            if (l.includes('rel="next"')) {
              link = l.substring(1, l.indexOf(';')-1);
            }
          }
        }
      }
      merged_prs.value = total;
      loading.value = false;
    };
    pr_count();
    return {
      merged_prs,
      loading
    }
  },
  computed: {
    internships() {
      return useStore().state.work.filter(w => w.tags.includes('internship') && !w.hidden);
    },
    research() {
      return useStore().state.work.filter(w => w.tags.includes('research') && !w.hidden);
    },
    classes() {
      return useStore().state.courses;
    },
    projects() {
      return useStore().state.projects;
    },
    languages() {
      return ['C++', 'Java', 'Python', 'C', 'Typescript', 'Javascript', 'MATLAB', 'Go', 'Julia', 'Bash']
    },
    focuses() {
      return ['High Performance Standards', 'Robust System Design', 'Intuitive Interfaces']
    }
  }
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
  transition: color 300ms;
}
.linkable:hover > * {
  color: rgb(var(--linkable-color));
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