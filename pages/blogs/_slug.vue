<template>
  <article>
	<nuxt-content :document="article" />
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return {
      article,
    }
  }
}
</script>
<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h1 {
  font-weight: bold;
  font-size: 28px;
}
</style>
