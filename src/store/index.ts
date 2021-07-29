import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { State } from './store_types';
import { courses } from './classes';
import { work } from './work';
import { projects } from './projects';
export const key : InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: {
    courses,
    work,
    projects
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
