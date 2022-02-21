<template>
	<div class="bg-gray-200">
		<NavBar/>
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
