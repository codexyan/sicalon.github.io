<script setup>
import { reactive } from "vue";

const paslons = reactive({
  data: [
    {
      id: 1,
      capres: "Anies Rasyid Baswedan",
      cawapres: "Cak Imin",
      cta: "VOTE 01",
    },
    {
      id: 2,
      capres: "Letjen Pur. H. Prabowo Subianto D",
      cawapres: "Gibran",
      cta: "VOTE 02",
    },
    {
      id: 3,
      capres: "Ganjar Pranowo",
      cawapres: "Prof  Mahfud",
      cta: "VOTE 03",
    },
  ],
});

const institutes = reactive({
  data: [
    { id: 1, calon: "Presiden & Wakil Presiden", url: '/src/assets/img/presiden.png' },
    { id: 1, calon: "DPR Republik Indonesia", url: '/src/assets/img/dpdri.png' },
    { id: 1, calon: "DPD Republik Indonesia", url: '/src/assets/img/dpdri.png' },
    { id: 1, calon: "DPRD Provinsi Yogyakarta", url: '/src/assets/img/dprd.png' },
    { id: 1, calon: "DPRD Kabupaten Bantul", url: '/src/assets/img/dprd.png' },
  ],
});
</script>

<template>
  <!-- Disclaimer -->
  <div
    class="section bg-yellow-300 rounded-full w-fit mx-auto my-5 max-sm:mx-5 max-sm:rounded-md"
    id="disclaimer"
  >
    <p class="text-slate-600 max-sm:px-5 px-8 py-3 max-sm:py-2 font-semibold text-xs md:text-sm leading-5">
      Disclaimer : Data yang ditampilkan hanya sebatas Capres/Cawapres, Bacaleg
      Provinsi Yogyakarta dan Bantul
    </p>
  </div>

  <!-- Hero Banner -->
  <div class="container mx-auto 2xl:max-w-screen-2xl max-sm:mx-5 max-sm:max-w-fit">
    <div class="flex max-sm:flex-col md:flex-row max-sm:gap-8 md:gap-16 xl:mx-10 md:mx-5">
      <div class="content md:basis-2/4 flex flex-col justify-center">
        <p class="text-amber-500 font-bold md:text-base lg:text-xl tracking-wide mb-2">
          #PemiluDamai2024
        </p>
        <h1
          class="lg:text-5xl 2xl:text-6xl md:text-3xl max-sm:text-3xl font-bold leading-tight tracking-tighter"
        >
          Satu Suara, Satu Aksi
          <br />
          Say No to Golput ❤
        </h1>
        <p class="mt-5 font-base text-slate-600 text-sm md:text-base lg:text-lg leading-7">
          Ayo, bersatu dalam satu suara, satu aksi! Setiap suara memiliki dampak
          besar untuk membentuk masa depan yang kita inginkan. Say no to golput,
          let's make our voices count!
        </p>
        <div class="cta mt-5 flex md:flex-row gap-4">
          <button class="bg-red-700 text-white max-sm:text-xs max-sm:py-2 max-sm:px-5 md:py-4 md:px-10 rounded-full">
            PELAJARI HAK PILIHMU
          </button>
          <button
            class="border-red-700 border text-red-700 py-4 px-10 rounded-full hover:bg-red-800 hover:text-slate-100 hover:font-semibold transition ease-in-out duration-100 hover:border-none"
          >
            CEK DPT
          </button>
        </div>
      </div>
      <div class="images md:basis-2/3">
        <img src="/src/assets/img/hero-banner.png" alt="banner.png" />
      </div>
    </div>
  </div>

  <!-- Voting -->
  <section id="voter" class="mx-auto my-20 max-sm:mx-5">
    <div class="title text-center">
      <p class="text-2xl font-medium text-purple-900 tracking-tight">
        Voting dulu yuk
        <span class="font-sansita text-red-600 font-bold">Paslon Pusat</span>
        Pilihanmu !
      </p>
    </div>

    <!-- Card Vote -->
    <ul class="grid md:grid-cols-3 lg:gap-5 lg:px-10 2xl:gap-8">
      <li v-for="paslon in paslons.data" :key="paslon.id">
        <div class="card shadow rounded-lg mt-8">
          <div
            class="col-card flex flex-col items-center justify-center px-[5%] py-[5%]"
          >
            <img src="/src/assets/img/pagibran.png" />
            <div class="name my-4 flex flex-col gap-3">
              <div class="text-name text-center">
                <h2 class="text-xl font-bold text-slate-700">
                  {{ paslon.capres }}
                </h2>
                <p class="text-slate-400">Calon Presiden 02</p>
              </div>
              <div class="text-name text-center">
                <h2 class="text-xl font-bold text-slate-700">
                  {{ paslon.cawapres }}
                </h2>
                <p class="text-slate-400">Calon Wakil Presiden 02</p>
              </div>
            </div>
            <div class="cta w-full">
              <button
                class="border border-red-800 w-full py-3 rounded-full font-semibold text-red-800"
              >
                {{ paslon.cta }}
              </button>
            </div>
            <div class="partai mt-5">
              <p class="text-sm text-slate-400 text-center">
                Partai Pengusung :
              </p>
              <ul class="flex flex-row my-3 items-center justify-center gap-3">
                <li>
                  <img src="/src/assets/img/golkar.png" />
                </li>
                <li>
                  <img src="/src/assets/img/pkb.png" />
                </li>
                <li>
                  <img src="/src/assets/img/gerindra.png" />
                </li>
                <li>
                  <img src="/src/assets/img/pan.png" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <!-- Instansi -->
  <section id="institute" class="lg:px-10 max-sm:mx-5">
    <div class="title text-center">
      <p class="text-2xl font-medium text-purple-900 tracking-tight">
        Kenali Wakil Rakyat Kita
        <br />
        <span class="font-sansita text-red-600 font-bold"
          >D.I.Yogyakarta & Kabupaten Bantul</span
        >
      </p>
    </div>

    <ul class="grid md:grid-cols-3 gap-6 mt-10">
      <li v-for="institute in institutes.data" :key="institute.id">
        <div
          class="card rounded-lg shadow px-[5%] py-[8%] flex flex-col justify-center items-center border-yellow-600 border-l-4 border-t-4"
        >
          <img :src="institute.url" />
          <div class="title text-center my-4">
            <h1>Calon</h1>
            <h2 class="text-xl font-semibold text-slate-600">
              {{ institute.calon }}
            </h2>
            <p class="font-normal text-slate-400 mt-2">2024-2029</p>
          </div>
          <button
            class="border border-yellow-800 text-yellow-600 font-semibold w-full my-4 py-3 rounded-full hover:border-none hover:bg-yellow-700 hover:text-slate-100 transition-colors ease-in-out duration-150 hover:ring-offset-2 ring-1 ring-yellow-600"
          >
            Visi & Misi
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
