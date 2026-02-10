<template>
    <a :href="`#${title}`" class="btn rounded-3 p-2 btn-outline-light">{{ title }}</a>
</template>

<script setup>

defineProps({
  title:String
})

</script>

<style scoped>
  button{
    font-size: 2rem;
  }
</style>