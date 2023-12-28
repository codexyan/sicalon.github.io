<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper mx-auto font-poppins">
      <nav class="flex flex-row gap-10 justify-center text-sm md:text-base py-3 items-center text-slate-400 max-sm:justify-between max-sm:mx-5">
        <RouterLink to="/" class="max-sm:hidden">Beranda</RouterLink>
        <RouterLink to="/about" class="max-sm:hidden">Tentang</RouterLink>
        <RouterLink to="/">
          <img src="/src/assets/img/logo.png" alt="logo.png" class="h-14">
        </RouterLink>
        <RouterLink to="/program" class="max-sm:hidden">Program</RouterLink>
        <RouterLink to="/member" class="max-sm:hidden">Anggota</RouterLink>
        <span id="toggle" class="flex flex-col gap-1 bg-slate-100/95 cursor-pointer justify-center w-10 items-center h-10 rounded-lg shadow hover:bg-white">
          <div class="border-2 rounded-full w-6 border-slate-500"></div>
          <div class="border-2 rounded-full w-3 border-slate-500"></div>
          <div class="border-2 rounded-full w-6 border-slate-500"></div>
        </span>
      </nav>
    </div>
  </header>

  <main class="max-w-[1536px] mt-5 mx-auto">
    <RouterView />
  </main>
  
  <footer class="text-center mt-5 bg-red-800 bottom-0 left-0 right-0">
    <p class="text-base text-slate-300 italic py-4">Develop by mas iyan | © Copyright 2023</p>
  </footer>
</template>

<style scoped>
</style>
