<template>
  <nav class="block md:flex md:w-full h-20 md:justify-between ">
    <div aria-label="logo" class="logo bg-[#f5f5f5] pl-6 py-6 shadow-md md:shadow-none" @click="isOpen">
      <img src="../assets/logo_primary.svg" alt="" srcset="">
    </div>
    <div class="fixed h-[100vh] w-full bg-[#f5f5f5] flex flex-row items-end translate-x-[-100%] z-10 mt-[-75px] md:mt-0 md:translate-x-[0%] md:static md:h-[80px]  md:flex-column md:justify-end md:pr-6" :class="{'translate-x-[-0%]' : open}">
      <ul class="pb-10 md:pb-0 block md:flex   ">
        <li class="text-5xl md:text-2xl font-bold py-5 ml-6">About</li>
        <li class="text-5xl md:text-2xl font-bold py-5 ml-6">Work</li>
        <li class="text-5xl md:text-2xl font-bold py-5 ml-6">Blog <span class="text-xl md:hidden font-normal italic">(coming soon)</span></li>
        <li class="text-5xl md:text-2xl font-bold py-5 ml-6">Contact</li>
        <li class="text-5xl md:text-2xl font-bold py-5 ml-6 cursor-pointer md:hidden" aria-label="button" @click="isOpen" >x</li>
      </ul>
    </div>
    <button class="fixed bottom-0 mb-12 ml-4 z-0 bg-[#f7f7f7] rounded-full p-5 shadow-md md:hidden" >
      <img src="../assets/humberger.svg" alt="" @click="isOpen">
    </button>
  </nav>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed:{
    ...mapState(['open'])
  },
  methods: {
    ...mapMutations(['isOpen']),
  }
};
</script>
<style>
.logo img{
  width: 25px;
}

button{
  background: transparent;
  border: none;
  cursor: pointer;

}

</style>