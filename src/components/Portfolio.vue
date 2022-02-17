<template>
  <main class="grid grid-cols-2 lg:px-11 px-4 md:mx-7 mt-16 md:gap-x-7 lg:gap-x-10 lg:gap-y-4 gap-y-6" >
    <h1 class="col-span-2 text-3xl lg:text-6xl pt-3 p-b-1 font-bold">Selected Works</h1>
    <Card />
    <Card />
    <Card />

  </main>
</template>
<script>
import Card from "./Card.vue";

export default {
  components: {
    Card
  }
}
</script>
