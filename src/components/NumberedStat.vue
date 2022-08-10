<template>
  <article class="stat">
    <h3 class="number">
      <template v-if="!loading">
        <div class="backing">
          <div class="arc" v-for="i in number!" :key="i" :style="`--arc-color:var(${['--yellow', '--red', '--green', '--blue'][i % 4]})`">
            <div class="q1" :style="`--angle:${q1Angle(number!-i+1)}deg;`"></div>
            <div class="q2" :style="`--angle:${q2Angle(number!-i+1)}deg;`"></div>
            <div class="q3" :style="`--angle:${q3Angle(number!-i+1)}deg;`"></div>
            <div class="q4" :style="`--angle:${q4Angle(number!-i+1)}deg;`"></div>
          </div>
          <div class="final"></div>
        </div>
        <p style="z-index:1">{{ number }}</p>
      </template>
      <template v-else>
        <div class="backing">
          <div class="arc">
            <div class="loading q1" :style="`--angle:0deg;--arc-color:var(--red)`"></div>
            <div class="loading q2" :style="`--angle:0deg;--arc-color:var(--green)`"></div>
            <div class="loading q3" :style="`--angle:0deg;--arc-color:var(--blue)`"></div>
            <div class="loading q4" :style="`--angle:0deg;--arc-color:var(--yellow)`"></div>
          </div>
          <div class="final"></div>
        </div>
      </template>
    </h3>
    <h4 class="name"><p class="inline-number" aria-hidden="true">{{ number }}</p>&nbsp;{{ name }}</h4>
    <p class="subtext">{{ subtext }}</p>
  </article>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    number: Number,
    subtext: String,
    loading: Boolean
  },
  methods: {
    q1Angle(i:number) {
      return 90 - Math.min(Math.max(0, i / this.number! * 360), 90);
    },
    q2Angle(i:number) {
      return 90 - Math.min(Math.max(0, i / this.number! * 360 - 90), 90);
    },
    q3Angle(i:number) {
      return 90 - Math.min(Math.max(0, i / this.number! * 360 - 180), 90);
    },
    q4Angle(i:number) {
      return 90 - Math.min(Math.max(0, i / this.number! * 360 - 270), 90);
    },
  }
});
</script>
<style scoped>
.number {
  border-radius: 50%;
  font-size: 2.75em;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  color: rgb(var(--fg-color));
  margin: 20px;
  transition: color 300ms;
  position: relative;
}
.backing {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(var(--bg-color));
  transition: background-color 300ms;
  overflow: hidden;
  border-radius: 50%;
}
.arc>* {
  position: absolute;
  height: 50%;
  width: 50%;
  top: 50%;
  left: 50%;
  background-color: rgb(var(--fg-color));
  transition: background-color 300ms;
}
.q1 {
  transform: rotate(270deg) skew(var(--angle));
  transform-origin: top left;
}
.q2 {
  transform: rotate(0deg) skew(var(--angle));
  transform-origin: top left;
}
.q3 {
  transform: rotate(90deg) skew(var(--angle));
  transform-origin: top left;
}
.q4 {
  transform: rotate(180deg) skew(var(--angle));
  transform-origin: top left;
}
.final {
  background-color: rgb(var(--bg-color));
  position: absolute;
  --radius: 2px;
  top: var(--radius);
  left: var(--radius);
  right: var(--radius);
  bottom: var(--radius);
  border-radius: 50%;
}
.number:hover .arc>* {
  background-color: rgb(var(--arc-color));
}
.name {
  display: inline-block;
}
.stat {
  align-items: center;
  padding: 20px;
  text-align: center;
}
.inline-number {
  font-size: 0;
  opacity: 0;
  display: inline;
}
@media (max-width: 1000px) {
  .number {
    font-size: 3em;
  }
}
@media (max-width: 800px) {
  .number {
    font-size: 2em;
  }
}
@media (max-width: 700px) {
  .stat {
    display: inline;
    padding: 0;
  }
  .name {
    display: inline;
    font-weight: normal;
    color: var(--text-color);
    transition: color 300ms;
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
  }
  .number {
    display: none;
  }
  .inline-number {
    font-size: 1em;
    opacity: 1;
  }
  .subtext {
    display: none;
  }
}

@keyframes loading-animation {
  from {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.arc>.loading {
  background-color: rgb(var(--arc-color));
  animation-duration: 3s;
  animation-name: loading-animation;
  animation-iteration-count: infinite;
}
.loading.q1 {
  animation-delay: 0ms;
}
.loading.q2 {
  animation-delay: 750ms;
}
.loading.q3 {
  animation-delay: 1500ms;
}
.loading.q4 {
  animation-delay: 2250ms;
}
</style>