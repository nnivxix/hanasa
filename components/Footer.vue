<template>
  <footer class="h-[200px] flex flex-col md:flex-row md:justify-between items-center justify-center bg-[#034078]">
    <section id="copyright" class="lg:pl-11 pl-4 md:pl-7">
      <h1 class="text-[#fff] text-md md:text-lg mb-4 md:mb-0 ">Built and designed by Hanasa &#169; {{year}}</h1>
    </section>
		<section id="media" class="flex lg:pr-11 pr-4 md:pr-7">
			<a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="pl-6">
				<img :src="social.src" :alt="social.name" class="w-[30px]">
			</a>
    </section>
  </footer>
</template>

<script>
export default {
	data: () => ({
		socials: [
			{
				name: 'github',
				src: '/assets-nuxt/gh.svg',
				url: 'https://github.com/nnivxix'
			},
			{
				name: 'linkedin',
				src: '/assets-nuxt/lin.svg',
				url: 'https://linkedin.com/in/nnivxix'
			},
			{
				name: 'twitter',
				src: '/assets-nuxt/tw.svg',
				url: 'https://twitter.com/nnivxix'
			}
		]
	}),
	computed: {
		year() {
			return new Date().getFullYear();
		}
	}
}
</script>
