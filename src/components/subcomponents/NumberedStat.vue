<template>
    <article class="stat">
        <h4 class="number">{{number}}</h4>
        <h3 :class="['name']">{{name}}</h3>
        <p class="subtext">{{subtext}}</p>
    </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: String,
        number: Number,
        subtext: String,
    }
})
</script>
<style scoped>
.number {
    border-radius: 50%;
    border: 4px solid rgb(var(--fg-color));
    font-size: 4em;
    width: 2em;
    height: 2em;
    justify-content: center;
    align-items: center;
    color: rgb(var(--fg-color));
    font-weight: normal;
    margin: 20px;
}
.stat {
    align-items: center;
    padding: 20px;
    text-align: center;
}
.subtext {
    height: 2.5em;
}
</style>