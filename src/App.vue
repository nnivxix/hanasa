<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from './components/Navbar.vue';
import { onMounted, computed } from 'vue';
// import {  } from '@vue/runtime-core';
import { useStore } from 'vuex';

const store = useStore();
const open = computed(() => store.state.open );
// const bodyLock = () => {
//   const body = document.body;
//   if(open = !open) {
//     body.classList.toggle('overflow-y-hidden');
//      body.classList.toggle('h-[100vh]');
//   }
// }
// onMounted(() => {
//   bodyLock
// })

// return {
//   bodyLock, open
// }

</script>

<template>
    <Navbar />
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <img src="../assets/humberger.svg" alt="">
    <p class="py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, delectus hic nulla recusandae modi porro saepe sequi aperiam nemo maxime alias temporibus, molestias doloribus magnam itaque vel distinctio laudantium consequuntur similique harum rem eos quas voluptates laboriosam! Officia eaque, mollitia eligendi quibusdam aliquid, cum distinctio, hic nihil rem temporibus quas iusto quos. Repudiandae labore corporis totam delectus culpa nam laborum quasi aut excepturi vel! Voluptas error minima quae minus corporis vel nam illo exercitationem deserunt. Sequi necessitatibus, aliquid laudantium voluptatem dolorem quibusdam distinctio exercitationem praesentium tempora harum ut asperiores reiciendis accusantium odit inventore illo voluptate sunt fugiat maxime eligendi dolore!</p>
    <p class="py-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, rem tempore. Nihil labore qui facilis laudantium, corrupti atque deserunt consequatur quas, distinctio ab necessitatibus aliquid beatae incidunt. Praesentium id itaque saepe mollitia harum molestias expedita. Veniam esse, nam illum cumque harum suscipit atque pariatur ducimus ea facilis laboriosam distinctio error animi eligendi porro possimus illo architecto, expedita nesciunt. Commodi fugit nulla possimus iusto, ducimus ullam natus atque incidunt cupiditate earum, est culpa eligendi eveniet nisi doloremque? Aspernatur eveniet praesentium quam magnam. Culpa quis corrupti voluptatibus odit dignissimos non nesciunt, ipsam sint ullam, deserunt qui laboriosam laborum omnis, rerum molestias eius voluptatem! Dolores ducimus error iusto expedita illo rerum, ea temporibus praesentium corrupti suscipit minus est, modi tempore voluptatum, a illum esse quibusdam nisi.</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
