<template>
	<ul>
      <li v-for="article of articles" :key="article.slug">
				<!-- <p>{{createdAt}}</p> -->
        <NuxtLink :to="{ name: 'blogs-slug', params: { slug: article.slug } }">{{ article.title }}</NuxtLink>
				<p>{{article.description}}</p>
      </li>
    </ul>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'createdAt', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }

}
</script>
