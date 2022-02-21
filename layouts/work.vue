<template>
	<div class="bg-gray-200">
		<NavBar/>
		<h1 class="text-center text-2xl font-bold md:text-6xl pt-12 text-gray-800">Here is my selected works</h1>
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
