<template>
  <section class="flex flex-col bg-[#1B83DB] py-6">
    <h1 class="text-4xl font-bold text-center text-white">Take a coffee and chat with me</h1>
    <h2 class="text-base md:text-xl mb-6 text-center text-white">feel free to contact me any time and i will get back as soon as i can</h2>
    <form class="flex flex-col md:px-[150px] lg:px-[400px]"
      id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f//mbjwoqrj" method="post">
      <fieldset id="fs-frm-inputs" class="flex flex-col px-16 ">

        <label for="full-name" class="text-white">Full Name</label>
        <input class="mb-3 px-4 py-2 md:px-6 md:py-5 rounded-md"
        type="text" name="name" id="full-name" placeholder="First and Last" required>

        <label for="email-address" class="text-white">Email Address</label>
        <input class="mb-3 px-4 py-2 md:px-6 md:py-5 rounded-md ring-blue-400"
        type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="true">

        <label for="subject" class="text-white">Subject</label>
        <input class="mb-3 px-4 py-2 md:px-6 md:py-5 rounded-md ring-blue-400"
        type="text" name="_subject" id="subject" placeholder="creating company profile" required="true">

        <label for="message" class="text-white">Message</label>
        <textarea rows="5" name="message" id="message"
        class="mb-3 px-4 py-2 md:px-6 md:py-5 rounded-md"
        placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required="true"></textarea>

      </fieldset>
      <button type="submit" class="mt-4 self-start ml-16 px-6 py-2 md:px-6 md:py-3 font-bold text-gray-800 rounded-md bg-white  w-auto">
        Send
      </button>
    </form>
  </section>
<!-- action="https://formspree.io/f//mbjwoqrj"  -->

</template>

<script>
export default {
}
</script>
