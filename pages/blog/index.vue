<template>
<div>
	<ul class="flex flex-col px-4 md:px-12 ">
		<li v-for="article of articles" :key="article.slug" class="my-3 bg-white rounded-md px-8 py-4">
			<p class="text-base md:text-xl">{{new Date(article.createdAt.slice(0,10)).toDateString()}}</p>
			<NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="text-3xl md:text-4xl font-bold">{{ article.title }}</NuxtLink>
			<p class="text-base md:text-lg">{{article.description}}</p>
		</li>
  </ul>

	<!-- <pre>{{articles}}</pre> -->
</div>

</template>

<script>
export default {
	layout: 'blog',

	async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'createdAt', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
		computed:{
	},

}
</script>
