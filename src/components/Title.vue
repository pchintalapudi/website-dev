<template>
  <article id="title">
    <section class="header">
      <img src="../assets/profile.jpg" alt="A profile picture of Prem Chintalapudi" />
      <article class="metadata">
        <h1 class="text">Prem Chintalapudi</h1>
        <h4 class="text">
          Masters of Engineering student in Computer Science &
          Engineering at MIT
        </h4>
        <p class="text">{{summary}}</p>
      </article>
    </section>
    <section class="contact">
      <div class="row">
        <address class="email">
          <p>premc</p>
          <i aria-hidden="true">@SLDKFSON@@~!!~!@#$%^&*()</i>
          <p>@</p>
          <i aria-hidden="true">@SLDKFSON@@~!!~!@#$%^&*()</i>
          <p>mit.edu</p>
        </address>
        <address class="phone">
          <p>925</p>
          <i aria-hidden="true">@SLDKFSON@@~!!~!@#$%^&*(234)567-9000</i>
          <p>216</p>
          <i aria-hidden="true">@SLDKFSON@@~!!~!@#$%^&*(875)456-213</i>
          <p>1580</p>
        </address>
      </div>
      <div class="row">
        <address class="resume">
          <a
            href="https://github.com/pchintalapudi/pchintalapudi.github.io/raw/master/src/assets/Prem_Chintalapudi_Resume.pdf"
            download=""
            >Resume (Download)</a
          >
        </address>
        <address class="linkedin">
          <a href="https://linkedin.com/in/pchintalapudi">LinkedIn Profile</a>
        </address>
      </div>
    </section>
    <section class="links">
      <a href="#summary" class="text blue"><p>Quick Summary</p></a>
      <a href="#education" class="text green"
        ><p>Education and Coursework</p></a
      >
      <a href="#work" class="text yellow"><p>Jobs and Internships</p></a>
      <a href="#projects" class="text red"><p>Personal Projects</p></a>
    </section>
  </article>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  computed: {
    summary() {
      return useStore().state.summary;
    }
  }
});
</script>
<style scoped>
.links {
  flex-flow: row wrap;
  justify-content: center;
  background-color: rgba(var(--fg-color), 0.1);
  transition: background-color 300ms;
}
.links > .text {
  justify-content: center;
  align-items: center;
  flex: 1;
  font-weight: bold;
  transition: background-color 150ms, color 150ms;
  color: rgb(var(--color));
  padding-bottom: 30px;
}
.links > :hover {
  background-color: rgba(var(--fg-color), 0.1);
  color: var(--color);
}
.links > * > *::after {
  content: "";
  transform: rotate(45deg);
  border-color: rgb(var(--fg-color));
  border-bottom: 2px solid rgb(var(--fg-color));
  border-right: 2px solid rgb(var(--fg-color));
  width: 20px;
  height: 20px;
  align-self: center;
  transition: transform 150ms, border-color 300ms;
}
.links > :hover > *::after {
  transform: translateY(10px) rotate(45deg);
  border-color: var(--color);
}
.header {
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  padding: 20px;
}
.metadata {
  justify-content: center;
  align-items: center;
  padding: 10px;
}
#title {
  font-size: 1.25em;
}
.text {
  text-align: center;
  padding: 10px;
}
.header .text {
  width: 50vw;
  min-width: 350px;
}
.header h4 {
  font-weight: normal;
}
img {
  border-radius: 50%;
  height: 62.5vmin;
  width: 62.5vmin;
  align-self: center;
  object-fit: cover;
  margin: 10px;
}
.contact {
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
}
.row {
  display: contents;
}
address {
  display: inline-block;
  font-style: normal;
  padding: 20px 10px;
}
address > * {
  display: inline;
}
address > i {
  opacity: 0;
  user-select: none;
  pointer-events: none;
  transform: scale(0, 0);
  position: absolute;
}
.phone > p:not(:last-child)::after {
  content: "-";
  display: inline;
}
@media (min-width: 1000px) {
  #title {
    min-height: 100vh;
  }
}
@media (max-width: 1000px) {
  address {
    font-size: 0.8em;
  }
  .header .text {
    width: auto;
  }
}
@media (max-width: 800px) {
  address {
    font-size: 1em;
  }
  #title {
    font-size: 1em;
  }
}
</style>