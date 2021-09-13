<template>
	<nav class="flex w-full justify-between px-6 py-4">
		<router-link to="/" class="flex items-center">
			<img class="avatar w-12 rounded-full" src="ahan-avatar.png" alt="hanasa-avatar">
			<article class="pl-3">
				<p class="font-bold hidden md:block md:text-md">Hanasa</p>
				<p class="hidden md:block md:text-md">Front-end Web Developer</p>
			</article>
		</router-link>


		<a class="border-4 text-sm md:text-sm border-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white self-center justify-self-end p-2 md:pd-4 font-bold text-gray-800" href="/resume_adehanasa.pdf" download>Download Resume</a>
	</nav>
</template>

<script>
export default {
	name: 'NavBar'
}
</script>