<template>
	<div class="bg-gray-200">
		<NavBar/>
		<h1 class="text-center text-xl font-bold md:text-4xl pt-12 text-gray-800">Welcome to my Blog</h1>
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
export default {
    components: { NavBar }
}
</script>

<style>

</style>
