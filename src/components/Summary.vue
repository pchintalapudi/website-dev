<template>
    <article id="summary">
        <section>
            <a class="unlinkable">
                <b class="icon"><tools :color="'blue'"></tools></b>
                <h2>Skills and Tooling</h2>
            </a>
            <numbered-stat :name="'Coding Languages'" :number="7" :subtext="'C++, Java, C, Python, Typescript, Javascript, MATLAB'"></numbered-stat>
            <numbered-stat :name="'Focus Areas'" :number="3" :subtext="'Intuitive Interfaces, Robust System Design, High Performance Standards'"></numbered-stat>
        </section>
        <section>
            <a class="linkable">
                <b class="icon"><graduation-cap :color="'green'"></graduation-cap></b>
                <h2>Education and Coursework</h2>
            </a>
            <numbered-stat :name="'Undergraduate Majors'" :number="2" :subtext="'Computer Science Engineering and Bioengineering'"></numbered-stat>
            <numbered-stat :name="'Classes'" :number="34" :subtext="'Engineering, Science, Math, Design'"></numbered-stat>
        </section>
        <section>
            <a class="linkable">
                <b class="icon"><flask :color="'yellow'"></flask></b>
                <h2>Internships and Research</h2>
            </a>
            <numbered-stat :name="'Internships'" :number="4" :subtext="'NVIDIA, doc.ai, McAfee, Sandia National Labs'"></numbered-stat>
            <numbered-stat :name="'Research Groups'" :number="4" :subtext="'Gertler Lab, Sandia National Labs, Blainey Lab, JuliaLab'"></numbered-stat>
        </section>
        <section>
            <a class="linkable">
                <b class="icon"><monitor :color="'red'"></monitor></b>
                <h2>Personal Projects</h2>
            </a>
            <numbered-stat :name="'Major Projects'" :number="6" :subtext="'Long Project Lifetimes and Large Feature Sets'"></numbered-stat>
            <numbered-stat :name="'Websites'" :number="3" :subtext="'MakeMIT 2019 & 2020, LMF 2020-present, This Website'"></numbered-stat>
        </section>
    </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NumberedStat from './subcomponents/NumberedStat.vue';
import GraduationCap from './icons/GraduationCap.vue';
import Tools from './icons/Tools.vue';
import Monitor from './icons/Monitor.vue';
import Flask from './icons/Flask.vue';

export default defineComponent({
    components: {
        NumberedStat,
        GraduationCap,
        Tools,
        Monitor,
        Flask
    },
    setup() {
        
    },
})
</script>
<style scoped>
#summary {
    flex-flow: row nowrap;
    min-height: 100vh;
    justify-content: space-evenly;
    padding: 20px;
}
#summary > * {
    flex: 1;
    text-align: center;
    align-items: center;
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
.unlinkable {
    align-items: center;
}
</style>