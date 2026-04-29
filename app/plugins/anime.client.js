import { animate, createTimeline, onScroll, stagger, svg } from 'animejs';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('animate', animate);
    nuxtApp.provide('createTimeline', createTimeline);
    nuxtApp.provide('onScroll', onScroll);
    nuxtApp.provide('stagger', stagger);
    nuxtApp.provide('svg', svg);
})