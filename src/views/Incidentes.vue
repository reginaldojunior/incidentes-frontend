<template>
  <main>
    <!-- Pass the incidentes ref directly without curly braces -->
    <Incidentes :incidentes="incidentes" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Incidentes from '../components/Incidentes.vue'

const incidentes = ref([])

async function fetchInitialAllIncidentes() {
  try {
    const response = await axios.get('http://localhost:5000/incidentes')
    incidentes.value = response.data.incidentes
  } catch (error) {
    console.error('Error fetching cat facts:', error)
  }
}

// Fetch data when component is mounted
onMounted(async () => {
  await fetchInitialAllIncidentes()
})
</script>
