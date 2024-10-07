<template>
  <main>
    <!-- Pass the incidentes ref directly without curly braces -->
    <Assinar :analistas="analistas" :incidenteid="incidenteid" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Assinar from '../components/Assinar.vue'

const analistas = ref([])
const incidenteid = ref([])

async function fetchInitialAnalistas() {
  try {
    const response = await axios.get('http://localhost:5000/analistas')
    analistas.value = response.data
  } catch (error) {
    console.error('Error fetching analistas:', error)
  }
}

onMounted(async () => {
  const route = useRoute()
  incidenteid.value = route.params.id

  await fetchInitialAnalistas()
})
</script>
