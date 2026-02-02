<template>
  <section>
    <div class="container text-light py-5">

      <div class="text w-100 text-end fs-6">
        <h3>
          DECEMBER / 2025 <br>
          BRIGITTE SCHWARTZ
        </h3>
      </div>

      <div class="text text-uppercase w-100 text-start mt-3">
        <h2 class="mb-0">
          <span class="firstName d-block">
            nhoem
          </span>
          <span class="lastName d-block text-center">
            senkropum
          </span>
        </h2>
      </div>

      <!-- ✔ correct Bootstrap responsive layout -->
      <div class="text row g-3 mt-3">

        <div class="col-12 col-lg-6">
          <div class="desc text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium et fugit quas voluptatibus exercitationem asperiores autem.
          </div>
        </div>

        <div class="col-12 col-lg-6 text-lg-end">
          <div class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam nostrum quisquam cum quis sed pariatur iste.
          </div>
        </div>

      </div>

    </div>
  </section>

  <section class="py-5 ">
    <h1 class="text-light" style="font-size: 5rem;">Table Content</h1>
    <div class="container d-flex flex-wrap gap-2">
      <div
        v-for="btn in myBtns"
        :key="btn"
        class="allBtns"
      >
        <BaseBtn :title="btn"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

.firstName{
  line-height: 1;
  margin: 0;
  font-size: clamp(2rem, 6vw, 6rem);
}

.lastName{
  line-height: 1;
  margin: 0;
  font-size: clamp(4rem, 18vw, 22rem);
}

.desc{
  font-size: 1.5rem;
}
</style>

<script setup>
import BaseBtn from '@/component/buttons/BaseBtn.vue'
import { reactive } from 'vue'

const myBtns = reactive([
  'Introduction',
  'Experience',
  'Skills',
  'Education'
])
</script>
