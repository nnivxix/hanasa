<template>
	<section class="bg-gray-100 text-left md:text-center pl-12 md:pl-0 pt-8">
		<h1 class="text-3xl md:text-4xl font-bold text-gray-700 pb-4">I occasionally take on Freelance opportunities.</h1>
		<h2 class="text-base text-gray-500">Have an exciting project where you need some help?</h2>
		<h2 class="text-base text-gray-500">Send me over a message and <a class="underline" href="mailto:adhe.hanasa@gmail.com">let's chat.</a></h2>
	</section>
	<footer class="h-3/6 bg-gray-100 px-12 py-8 text-gray-800 md:grid md:grid-cols-3">
		<figcaption class="py-6">
			<h1 class="text-lg font-bold">Hanasa.</h1>
			<h2 class="text-lg font-normal">Front-end Web Developer</h2>
		</figcaption>
		<figcaption class="py-6">
			<h1 class="text-lg font-bold">Contact Me</h1>
			<h2 class="text-lg font-normal"><a class="underline" href="mailto:adhe.hanasa@gmail.com">Email</a></h2>
		</figcaption>
		<figcaption class="py-6">
			<h1 class="text-lg font-bold">Links</h1>
			<h2><a class="text-lg font-normal" href="https://github.com/nnivxix" target="_blank">github</a> </h2>
			<h2><a class="text-lg font-normal" href="https://twitter.com/nnivxix" target="_blank">twitter</a></h2>
		</figcaption>

		<p class="col-span-3 text-left md:text-center  ">Developed by Hanasa, made with <span class="text-green-500">Vue.js</span> and <span class="text-blue-400">TailwindCSS</span> in 🇮🇩</p>
		<p class="col-span-3 text-left md:text-center text-base pt-5">&copy; {{year}}</p>
		

	</footer>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
		year(){
			return new Date().getFullYear();
		},
	},
}
</script>

<style>
	.h {
		height: 50vh;
	}
  
</style>