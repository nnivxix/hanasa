<template>
	<nav class="grid grid-cols-3 gap-4 md:h-20 py-3 md:py-5 ">
		<nuxt-link to="/" class="flex items-center pl-7">
			<img src="logo.svg" alt="logo hanasa" class="h-7">
			<h1 class="text-xl font-medium md:text-2xl pl-3 hidden md:block text-hanasa-blue-primary">Hanasa</h1>
		</nuxt-link>

		<ul class=" pr-7 md:block order-last col-span-3 md:col-span-2 md:justify-self-end md:self-center transition ease-in "
		:class="[toggle ? 'inline-grid' : 'hidden']">
			<li class="list-none pl-7 py-3 text-left inline"><NuxtLink class="no-underline text-hanasa-blue-primary font-semibold text-xl md:text-2xl" to="/about">About</NuxtLink></li>
			<li class="list-none pl-7 py-3 text-left inline"><NuxtLink class="no-underline text-hanasa-blue-primary font-semibold text-xl md:text-2xl" to="/blog">Blog</NuxtLink></li>
			<li class="list-none pl-7 py-3 text-left inline"><NuxtLink class="no-underline text-hanasa-blue-primary font-semibold text-xl md:text-2xl" to="/work">Work</NuxtLink></li>
			<li class="list-none pl-4 md:pl-7 py-3 text-left inline"><NuxtLink class="no-underline text-white rounded-xl px-4 py-2 bg-hanasa-blue-primary font-semibold text-xl md:text-2xl" to="/contact">Contact</NuxtLink></li>
		</ul>
		<button class="pr-7 md:hidden col-span-2 justify-self-end " @click="openToggle()">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#1C6DD0" class="bi bi-list " viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
			</svg>
		</button>


	</nav>
</template>

<script>

export default{
	data: () => ({
		toggle: false,
	}),
	methods: {
		openToggle() {
			this.toggle = !this.toggle;
		}
	}


};
</script>

<style>

</style>
