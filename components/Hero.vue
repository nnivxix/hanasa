<template>
  <main class="flex flex-col lg:flex-row lg:justify-between  pl-6 lg:px-11 lg:items-center  min-h-[80vh] md:bg-none justify-center bg-spiral lg:bg-contain  bg-no-repeat bg-right-bottom overflow-x-hidden">
    <section class="flex lg:order-last lg:pr-11">
      <img src="assets-nuxt/profile.jpeg" width="auto" alt="profile hanasa" srcset=""
      class="w-4/6 lg:w-[400px] md:w-[350px] h-max object-cover">
      <span class="hidden lg:block bg-gr bg-gradient-to-r from-[#0077B6] to-[#613DC1] absolute animate-[spin_17s_ease-in-out_infinite] hover:animate-none -z-10 lg:w-[400px] lg:h-[400px]"></span>
    </section>

    <section class="w-full">
      <h1 class="text-3xl font-normal pt-4 lg:text-6xl ">Hi, You can call him
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-br  from-[#0077B6] to-[#613DC1] ">Hanasa.</span>
      </h1>
      <h2 class="text-xl lg:text-4xl pt-4 lg:w-2/4">A man <i>shifting-shape</i> from graphic designer to front-end web developer.</h2>
      <a href="/hanasa_resume.pdf" class="underline flex items-center pt-4 "><img src="assets-nuxt/pdf_dark.svg" alt="pdf"><span class="text-base lg:text-2xl"> view his resume. </span></a>
      <p class="pt-4 lg:text-2xl">His current stacks :</p>
      <ul class="flex pt-2">
        <li><img src="assets-nuxt/nuxt.svg" alt="nuxt" srcset="" class="w-[200px]"></li>
        <li><img src="assets-nuxt/vue.svg" alt="vue" srcset="" class="w-[200px]"></li>
        <li><img src="assets-nuxt/tailwind.svg" alt="tailwind" srcset="" class="w-[200px]"></li>
      </ul>
    </section>

  </main>
</template>
<style scoped>
img {
  max-width: fit-content;
}
</style>
