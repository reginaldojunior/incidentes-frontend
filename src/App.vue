<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Slide } from 'vue3-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
</script>

<template>
  <header>
    <Slide>
      <a id="home" :href="'/cadastrar/'">
        <span>Cadastrar Incidente</span>
      </a>
    </Slide>
  </header>

  <RouterView />
</template>
