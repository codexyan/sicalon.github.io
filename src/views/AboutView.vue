<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0)

    return {
      count
    }
  }
}

</script>
<template>
  <div class="about">
    <h1>Halaman Tentang</h1>
    <div>
      {{ count }}
    </div>
    <button @click="count++">Tambah Pesanan</button>
  </div>
</template>

<style></style>
