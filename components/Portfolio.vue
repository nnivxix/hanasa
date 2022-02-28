<template>
  <main class="grid grid-cols-2 lg:px-11 px-4 md:mx-7 mt-16 md:gap-x-7 lg:gap-x-10 lg:gap-y-4 gap-y-6" >
    <h1 class="col-span-2 text-3xl lg:text-6xl pt-3 pb-1 font-bold lg:pl-[-32px]">Selected projects</h1>

    <Card v-for="project in projects" :key="project.id" :imgsurl="project.img" :link="project.link" :title="project.title" :desc="project.desc" :tags="project.tags"  />

  </main>
</template>
<script>
export default {

	data : () => ({
		projects: [
			{
				id: 1,
				title: 'vilm',
				img: 'assets-nuxt/img-port/vilm.png',
				desc: 'find the most recent films each week to be your viewing reference.',
				tags: ['vue', 'tailwind'],
				link: '/work/vilm',
			},
			{
				id: 2,
				title: 'kelapp',
				img: 'assets-nuxt/img-port/klp.png',
				desc: 'Save time to create a group with kelapp, kelapp is a tool to create a group of randomized participants.',
				tags: ['vue', 'ChakraUI'],
				link: '/work/kelapp',
			},
			{
				id: 3,
				title: 'mozilla-vpn',
				img: 'assets-nuxt/img-port/mzl.png',
				desc: 'a cloned home page based on the Mozilla VPN reference.',
				tags: ['webpack', 'bootstrap'],
				link: '/work/mzl',
			},
			{
				id: 4,
				title: 'foodlive',
				img: 'assets-nuxt/img-port/lfd.png',
				desc: 'Foodlive is the latest project by Dicoding.com to be an expert on web development.',
				tags: ['webpack', 'pwa'],
				link: '/work/lfd',
			}
		]
	}),
}
</script>
