<template>
  <section class="flex flex-col lg:px-11 px-4 md:mx-7 pb-4">
    <h1 class="text-3xl lg:text-6xl pt-3 p-b-1 font-bold">Skills</h1>
    <div class="grid grid-cols-4 gap-4 px-12 justify-items-center my-6">
      <img v-for="icon in icons" :key="icon.id" :src="icon.img" alt="" srcset=""
			class="md:w-[130px] lg:w-[150px] w-[110px] grayscale hover:grayscale-0 hover:scale-110 ease-in duration-200 p-3" >
    </div>
  </section>
</template>
<script>
	export default {
		data: () => ({
			icons: [
				{
					id: 1, img: 'assets-nuxt/bootstrap.svg'
				},
				{
					id: 2, img: 'assets-nuxt/firebase.svg'
				},
				{
					id: 3, img: 'assets-nuxt/javascript.svg'
				},
				{
					id: 4, img: 'assets-nuxt/mysql.svg'
				},
				{
					id: 5, img: 'assets-nuxt/nuxt.svg'
				},
				{
					id: 6, img: 'assets-nuxt/php.svg'
				},
				{
					id: 7, img: 'assets-nuxt/pwa.svg'
				},
				{
					id: 8, img: 'assets-nuxt/tailwind.svg'
				},
				{
					id: 9, img: 'assets-nuxt/vue.svg'
				},
				{
					id: 10, img: 'assets-nuxt/webpack.svg'
				},
			]
		})
	}
</script>
