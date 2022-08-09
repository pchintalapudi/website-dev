import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import courses from './classes.yaml'
import work from './work.yaml'
import projects from './projects.yaml'
import summary from './summary.md';

export interface Class {
  name: string;
  id: string;
  tags: Array<"cs" | "bio">;
}

export interface Work {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  tags: Array<"cs" | "bio" | "research" | "internship">;
  supervisors: Array<{ name: string, title: string }>;
  hidden?:boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  start: string;
  end: string;
  github?: string;
  link?: string;
}

export interface State {
  courses: Class[];
  work: Work[];
  projects: Project[];
  summary: string;
}

export const key : InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: {
    courses,
    work,
    projects,
    summary
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});

export function useStore() {
  return baseUseStore(key);
}
