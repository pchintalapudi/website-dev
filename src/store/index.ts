import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { State } from './store_types';
import { courses } from './classes';
import { work } from './work';

export const key : InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: {
    courses,
    work
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
