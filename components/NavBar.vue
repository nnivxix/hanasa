<template>
  <nav class="block md:flex md:w-full md:justify-between bg-[#f5f5f5] lg:px-11">
    <div aria-label="logo" class="logo bg-[#f5f5f5] pl-6 md:pl-6 py-3 md:py-4 shadow-md md:shadow-none self-center" @click.prevent="closeNav">
			<nuxt-link to="/" >
				<img src="/assets-nuxt/logo_primary.svg" alt="logo nnivxix" srcset="" >
			</nuxt-link>

    </div>
    <div class="fixed h-[100vh] w-full bg-[#f5f5f5] flex flex-row items-end translate-x-[-100%] z-10 mt-[-75px] md:mt-0 md:translate-x-[0%] md:static md:h-auto  md:flex-column md:justify-end md:pr-6 md:self-center" :class="{'translate-x-[-0%]' : open}">
      <ul class="md:pb-0 block md:flex mr-[-13px] text-[#575757] ">
        <li class="text-5xl md:text-lg font-bold py-5 md:py-3 md:m-0 px-5  " @click.prevent="isOpen">About</li>
				<li class="text-5xl md:text-lg font-bold py-5 md:py-3 md:m-0 px-5  " @click.prevent="isOpen">
					<nuxt-link to="/work" >Work</nuxt-link>
				</li>
				<li class="text-5xl md:text-lg font-bold py-5 md:py-3 md:m-0 px-5" @click.prevent="isOpen" >
					<nuxt-link to="/blog"  >Blog</nuxt-link>
				</li>
        <li class="text-5xl md:text-lg font-bold py-5 md:py-3 md:m-0 px-5  ">Contact</li>
        <li class="text-5xl md:text-lg font-bold py-5 md:py-3 md:m-0 px-5 text-hanasa-blue-primary  cursor-pointer md:hidden" aria-label="button" @click.prevent="isOpen" ><span class="material-icons text-7xl font-bold">close</span></li>
      </ul>
    </div>
    <button class="fixed bottom-0 mb-12 ml-4  bg-[#f7f7f7] rounded-full p-5 shadow-md md:hidden z-[9]" >

      <img src="/assets-nuxt/humberger.svg" alt="" @click.prevent="isOpen">
    </button>
  </nav>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed:{
    ...mapState({
      open : state => state.open
    })
  },
  methods: {
    ...mapMutations(['isOpen', 'closeNav']),
    openNav(){
      if(this.$store.state.open) {
        document.body.style.overflowY = 'hidden';
      } else{
        document.body.style.overflowY = 'scroll';
      }
    },
  },
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
