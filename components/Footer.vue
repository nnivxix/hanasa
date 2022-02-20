<template>
  <footer class="h-[200px] flex items-center justify-center md:justify-start bg-[#1C6DD0]">
    <section id="media" class="grid ">
    </section>
    <section id="copyright" class="lg:pl-11 pl-4 md:pl-7">
      <h1 class="text-[#fff] text-md md:text-lg ">Built and designed by Hanasa &#169; {{year}}</h1>
    </section>
  </footer>
</template>

<script>
export default {

	computed: {
		year() {
			return new Date().getFullYear();
		}
	}
}
</script>
