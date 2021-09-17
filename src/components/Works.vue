<template>
	<section class="px-6 md:mx-6 my-10 md:mx-36 md:grid md:grid-cols-2">
		<h1 class="text-3xl md:text-4xl p-6 font-bold col-span-2 ">Selected Works</h1>
		
			<figure v-for="work in works" :key="work.name" class="md:w-full my-4 px-5 ">
				<hr>
				<img class="md:w-max shadow-md" :src="work.img" :alt="work.name">
				<figcaption class="mt-2">
					<a class="text-base text-lg font-bold" :href="work.link" target="_blank" rel="noopener" >{{work.name}}</a>
					<p class="text-base text-lg">{{ work.description }}</p>
				</figcaption>

			</figure>
		
		
	</section>
</template>

<script>
export default {
  name: 'Works',
  data: () => ({
  	works : [
  		{
  			name: 'vilm',
  			img: 'vilm.jpg',
  			description: 'Web-app information about hot and trend movies and tv series.',
  			link: 'https://vilm-app.web.app'
  		},
  		{
  			name: 'mozilla-vpn',
  			img: 'mozilla-vpn.jpg',
  			description: 'Cloned website from mozilla vpn as vpn provider in the world internet.',
  			link: 'https://mozilla-vpn.web.app'
  		},
  		{
  			name: 'kelapp',
  			img:'kelapp.jpg',
  			description: 'Group builder to create a group study.',
  			link: 'https://kelapp.netlify.app'
  		},
  		{
  			name: 'foodlive',
  			img: 'foodlive.jpg',
  			description: 'The last project from module becaome front-end expert hosted by dicoding.',
  			link: 'https://github.com/nnivxix/restaurant-app'
  		}
  	]
  }),
}
</script>

<style>
  
</style>