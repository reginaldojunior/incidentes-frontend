<template>
  <main>
    <!-- Pass the books ref directly without curly braces -->
    <Cadastrar />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Cadastrar from '../components/Cadastrar.vue'

onMounted(async () => {
  const route = useRoute()
})
</script>
