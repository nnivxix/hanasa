<template>
	<header class="flex items-center text-center flex-col mt-2 min-h-screen">
		<h1 class="text-2xl lg:text-5xl font-semibold">make it happen with code.</h1>
		<h2 class="text-2xl lg:text-4xl mt-3 lg:mt-2 lg:pt-4">Heyyo, i'm <span style="color: #248FC7;">Hanasa</span></h2>
		<h2 class="text-2xl lg:text-4xl lg:pt-4">A Front-end Developer</h2>
		<img src="hand.png" alt="hand">

	</header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
  img{
  	width: 300px;
  }
  @media screen (min-width: 768px){
  	img{
  	width: 400px;
  }
  }
</style>