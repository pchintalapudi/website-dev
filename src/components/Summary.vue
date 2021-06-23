<template>
    <article id="summary">
        <section>
            <h2>Skills and Tooling</h2>
            <numbered-stat :name="'Coding Languages'" :number="7" :subtext="'C++, Java, C, Python, Typescript, Javascript, MATLAB'"></numbered-stat>
            <numbered-stat :name="'Focus Areas'" :number="3" :subtext="'Intuitive Interfaces, Robust System Design, High Performance Standards'"></numbered-stat>
        </section>
        <section>
            <h2>Education and Coursework</h2>
            <numbered-stat :name="'Undergraduate Majors'" :number="2" :subtext="'Computer Science Engineering and Bioengineering'"></numbered-stat>
            <numbered-stat :name="'Classes'" :number="34" :subtext="'Design, Engineering, Maths, Sciences'"></numbered-stat>
        </section>
        <section>
            <h2>Internships and Research</h2>
            <numbered-stat :name="'Internships'" :number="4" :subtext="'NVIDIA, doc.ai, McAfee, Sandia National Labs'"></numbered-stat>
            <numbered-stat :name="'Research Groups'" :number="4" :subtext="'Gertler Lab, Sandia National Labs, Blainey Lab, JuliaLab'"></numbered-stat>
        </section>
        <section>
            <h2>Personal Projects</h2>
            <numbered-stat :name="'Major Projects'" :number="6" :subtext="'Long Project Lifetimes and Large Feature Sets'"></numbered-stat>
            <numbered-stat :name="'Websites'" :number="3" :subtext="'MakeMIT 2019 & 2020, LMF 2020-present, This Website'"></numbered-stat>
        </section>
    </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NumberedStat from './subcomponents/NumberedStat.vue';

export default defineComponent({
    components: {
        NumberedStat
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
}
</style>