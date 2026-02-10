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
  <section class="py-5" id="introduction" name="introduction">
    <h1 class="text-light">Introduction</h1>
     <hr class="text-light">
    <p class="fs-3 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam necessitatibus illum dolorem quod possimus exercitationem facilis, ullam animi ab quas voluptates consequuntur quasi architecto tempore? Magnam illo eaque tempora?</p>
  </section>
  <section class="py-5 exp" id="experience">
    <div class="container">
      <h1 class="fs-1 text-light">Experience</h1>
      <hr class="text-light">
      <div class="row text-light row-gap-1">
        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <img class="w-100 rounded-2" src="../assets/imgs/GGAC.jpg" alt="">
            </div>
            <div class="col-6">
              <div class="title fw-bold text-light fs-3">Girl Guid Assosiate</div>
              <div class="detail desc">I've been serve and join ggac since 2025, During this duty i learn about management, team work, organization, social skills, </div>
            </div>
            <div class="col-3 d-flex align-items-center">
              <div class="btn btn-primary border border-1 rounded-3">
                Detail
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <img class="w-100 rounded-2" src="../assets/imgs/GGAC.jpg" alt="">
            </div>
            <div class="col-6">
              <div class="title fw-bold text-light fs-3">Girl Guid Assosiate</div>
              <div class="detail desc">I've been serve and join ggac since 2025, During this duty i learn about management, team work, organization, social skills, </div>
            </div>
            <div class="col-3 d-flex align-items-center">
              <div class="btn btn-primary border border-1 rounded-3">
                Detail
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <img class="w-100 rounded-2" src="../assets/imgs/GGAC.jpg" alt="">
            </div>
            <div class="col-6">
              <div class="title fw-bold text-light fs-3">Girl Guid Assosiate</div>
              <div class="detail desc">I've been serve and join ggac since 2025, During this duty i learn about management, team work, organization, social skills, </div>
            </div>
            <div class="col-3 d-flex align-items-center">
              <div class="btn btn-primary border border-1 rounded-3">
                Detail
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <img class="w-100 rounded-2" src="../assets/imgs/GGAC.jpg" alt="">
            </div>
            <div class="col-6">
              <div class="title fw-bold text-light fs-3">Girl Guid Assosiate</div>
              <div class="detail desc">I've been serve and join ggac since 2025, During this duty i learn about management, team work, organization, social skills, </div>
            </div>
            <div class="col-3 d-flex align-items-center">
              <div class="btn btn-primary border border-1 rounded-3">
                Detail
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 skils" id="skills">
    <div class="container">
      <h1 class="fs-1 text-light">Skills</h1>
      <hr class="text-light">
      <div class="row">
        <div class="tech-icons w-100 d-flex justify-content-center">
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-vuejs"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-python"></i>
          <i class="fa-solid fa-code"></i> <!-- C++ -->
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 education" id="education">
    <h1 class="text-light">
      education
    </h1>
     <hr class="text-light">
     <div class="container">
      <div class="row text-light row-gap-1">
        <div class="col-12 mb-3">
          <div class="row">
            <div class="col-3">
              <img
                class="w-100 rounded-2 shadow-sm"
                src="../assets/imgs/GGAC.jpg"
                alt=""
                style="box-shadow: 0 .125rem .25rem rgba(0,0,0,.15) !important;"
              >
            </div>
            <div class="col-6">
              <div class="title fw-bold text-light fs-3">Girl Guid Assosiate</div>
              <div class="detail desc">I've been serve and join ggac since 2025, During this duty i learn about management, team work, organization, social skills, </div>
            </div>
          </div>
        </div>
         <hr class="text-danger">
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
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.tech-icons i {
  font-size: 3rem;
  margin: 0.5rem;
}

.fa-html5 { color: #e34f26; }
.fa-css3-alt { color: #1572b6; }
.fa-vuejs { color: #42b883; }
.fa-js { color: #f7df1e; }
.fa-python { color: #3776ab; }

</style>

<script setup>
import BaseBtn from '@/component/buttons/BaseBtn.vue'
import { reactive } from 'vue'

const myBtns = reactive([
  'introduction',
  'experience',
  'skills',
  'education'
])
</script>
