<template>
  <article class="mt-6 mb-16 md:col-span-1 col-span-2 md:w-[85%] md:justify-self-center">
    <img :src="imgsurl" :alt="title" srcset=""
		class="w-full lg:w-full drop-shadow-2xl rounded-lg hover:scale-110 ease-in duration-200 p-6">
    <h1 class="text-2xl lg:text-4xl font-bold py-2">
			<nuxt-link :to="link"> {{title}} </nuxt-link>
		</h1>
    <p class="text-xl lg:text-2xl text-gray-800">{{desc}}</p>
    <ul class="flex" >
      <li v-for="tag in tags" :key="tag.id" class="first:ml-0 py-0 px-3 text-lg border-2 border-[#1C6DD0] text-[#1C6DD0] rounded-lg m-2">{{tag}}</li>
    </ul>
  </article>
</template>
<script>
export default {
  name: 'Card',
	props : {
		imgsurl: String ,
		title: String,
		desc: String,
		tags: Array,
		link: String,
	}
}
</script>
