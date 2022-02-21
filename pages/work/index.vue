<template>
<div class="grid grid-cols-2 lg:px-11 px-4 md:mx-7 mt-16 md:gap-x-7 lg:gap-x-10 lg:gap-y-4 gap-y-6">
	<Card v-for="work in works" :key="work.id" :imgsurl="work.img" :title="work.title"
	:desc="work.desc" :tags="work.tags" :link="{ name: 'work-slug', params: { slug: work.slug } }"/>
</div>

</template>

<script>

export default {
    layout: "work",
    async asyncData({ $content, params }) {
        const works = await $content("works")
            .sortBy("createdAt", "asc")
            .fetch();
        return {
            works
        };
    },
    computed: {},

}
</script>
