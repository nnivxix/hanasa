<template>
  <main class="flex flex-col md:flex-row md:justify-between md:px-12 pl-6 lg:px-11 md:items-center  min-h-[80vh] justify-center bg-spiral md:bg-contain  bg-no-repeat bg-right-bottom overflow-x-hidden">
    <section class="flex md:order-last md:pr-11">
      <img src="../assets/profile.jpeg" width="auto" alt="profile hanasa" srcset=""
      class="w-4/6 md:w-[400px] h-max object-cover">
      <span class="hidden md:block bg-gr bg-gradient-to-r from-[#0077B6] to-[#613DC1] absolute animate-[spin_12s_ease-in-out_infinite] hover:animate-none -z-10 md:w-[400px] md:h-[400px]"></span>
    </section>
  
    <section class="w-full">
      <h1 class="text-3xl font-normal pt-4 md:text-6xl ">Hi, You can call him 
      <span class="font-bold text-transparent bg-clip-text bg-gradient-to-br  from-[#0077B6] to-[#613DC1] ">Hanasa.</span>
      </h1>
      <h2 class="text-4xl pt-4 md:w-6/12">A main <i>shifting-shape</i> from graphic designer to font-end web developer.</h2>
      <a href="#" class="underline flex items-center pt-4 "><img src="../assets/pdf_dark.svg" alt="pdf"><span class="text-xl md:text-2xl"> view his resume. </span></a>
      <p class="pt-4 md:text-2xl">His current stacks :</p>
      <ul class="flex pt-2">
        <li><img src="../assets/nuxt.svg" alt="nuxt" srcset="" class="w-[200px]"></li>
        <li><img src="../assets/vue.svg" alt="vue" srcset="" class="w-[200px]"></li>
        <li><img src="../assets/tailwind.svg" alt="tailwind" srcset="" class="w-[200px]"></li>
      </ul>
    </section>
    
  </main>
</template>
<style scoped>
img {
  max-width: fit-content;
}
</style>