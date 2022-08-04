import { createStore } from 'vuex'

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
}

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
