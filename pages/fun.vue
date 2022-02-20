<template>
  <div>
    <article>
      <nuxt-content :document="hello" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const hello = await $content("hello").fetch();

    return {
      hello,
    };
  },
};
</script>

<style>
.nuxt-content h2 {
  font-size: 32px;
  font-weight: 700;
}
</style>
