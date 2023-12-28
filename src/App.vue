<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log("toggle aktif!");
};

const navImgClasses = computed(() => {
  return {
    "max-sm:order-first": isMenuOpen.value,
  };
});

const mainNavClasses = computed(() => {
  return {
    "max-sm:relative": isMenuOpen.value,
  };
});

const comainClasses = computed(() => {
  return {
    "max-sm:blur-sm": isMenuOpen.value,
  };
});

const linkMenuClasses = computed(() => {
  return {
    "max-sm:bg-white": isMenuOpen.value,
    "max-sm:absolute": isMenuOpen.value,
    "max-sm:top-20": isMenuOpen.value,
    "max-sm:flex": isMenuOpen.value,
    "max-sm:flex-col": isMenuOpen.value,
    "max-sm:gap-5": isMenuOpen.value,
    "max-sm:w-full": isMenuOpen.value,
    "max-sm:py-3": isMenuOpen.value,
    "max-sm:px-5": isMenuOpen.value,
    "max-sm:rounded-lg": isMenuOpen.value,
    "max-sm:text-slate-700": isMenuOpen.value,
    "max-sm:font-medium": isMenuOpen.value,
    "max-sm:shadow": isMenuOpen.value,
  };
});

onMounted(() => {
  const toggle = document.getElementById("toggle-menu");
  const navLinks = document.querySelectorAll(".navlink");

  if (toggle) {
    toggle.addEventListener("click", toggleMenu);
    toggle.addEventListener("click", function () {
      navLinks.forEach((navLink) => {
        navLink.classList.toggle("max-sm:hidden");
      });
    });
  } else {
    console.error("Element dengan ID toggle-menu tidak ditemukan.");
  }
});
</script>

<template>
  <header>
    <div class="wrapper mx-auto font-poppins left-0 right-0 top-0 fixed z-50 bg-white shadow-sm">
      <nav
        class="flex flex-row gap-10 justify-center text-sm md:text-base py-3 items-center text-slate-400 max-sm:justify-between max-sm:mx-5"
        id="mainNav" :class="mainNavClasses">
        <div id="linkMenu" :class="linkMenuClasses">
          <RouterLink to="/" class="max-sm:hidden navlink">Beranda</RouterLink>
          <RouterLink to="/about" class="max-sm:hidden navlink">Tentang</RouterLink>
          <RouterLink to="/program" class="max-sm:hidden navlink">Program</RouterLink>
          <RouterLink to="/member" class="max-sm:hidden navlink">Anggota</RouterLink>
        </div>
        <RouterLink to="/" id="navImg" :class="navImgClasses">
          <img src="/src/assets/img/logo.png" alt="logo.png" class="h-14" />
        </RouterLink>
        <span id="toggle-menu"
          class="flex flex-col gap-1 bg-slate-100/95 cursor-pointer justify-center w-10 items-center h-10 rounded-lg shadow hover:bg-white sm:hidden">
          <div class="border-2 rounded-full w-6 border-slate-500"></div>
          <div class="border-2 rounded-full w-3 border-slate-500"></div>
          <div class="border-2 rounded-full w-6 border-slate-500"></div>
        </span>
      </nav>
    </div>
  </header>

  <main class="max-w-[1536px] mt-24 mx-auto -z-50" id="comain" :class="comainClasses">
    <RouterView />
  </main>

  <footer class="text-center mt-20 bg-red-800 bottom-0 left-0 right-0">
    <p class="text-base text-slate-300 italic py-4">
      Develop by mas iyan | © Copyright 2023
    </p>
  </footer>
</template>

<style scoped>
/* Add your styles here if needed */
</style>
