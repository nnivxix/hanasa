<template>
	<Header />
	<AboutMe />
	<Works />
	<Contact />
</template>

<script>
import Header from './Header.vue';
import AboutMe from './AboutMe.vue';
import Works from './Works.vue';
import Contact from './Contact.vue';

export default {
	components: {
		Header, AboutMe, Works, Contact
	}
}
</script>

<style>
  
</style>