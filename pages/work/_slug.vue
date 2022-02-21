<template>
  <article >
	<nuxt-content :document="work" />
  </article>
</template>
<script>
export default {
	layout: 'read-blog',
  async asyncData({ $content, params }) {
    const work = await $content('works', params.slug).fetch()
    return {
      work,
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
