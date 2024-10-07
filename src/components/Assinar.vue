<template>
    <div class="container mt-5">
        <h1 class="text-white">Formulário de Assinatura de Incidente</h1>
        <form class="form" @submit.prevent="submitForm">
            <!-- Display book information -->
            <div class="mb-3">
                <h2>Assinar Incidente</h2>
            </div>

            <div class="mb-3">
                <label for="analistaSelect" class="form-label">Selecione o analista</label><br>
                <select v-model="form.analista_id" id="analistaSelect" class="form-select" required>
                    <option value="" disabled>Escolha o analista</option>
                    <option v-for="analista in analistas" :key="analista.id" :value="analista.id">
                        {{ analista.name }}
                    </option>
                </select>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>

<script>
import { defineProps } from 'vue'
import axios from 'axios'

export default {
    name: 'Assinar',
    props: {
        analistas: Array,
        incidenteid: String
    },
    data() {
        return {
            form: {
                analista_id: ''
            }
        }
    },
    methods: {
        redirectToHome() {
            this.$router.replace('/')
        },
        async submitForm() {
            const response = await axios.patch("http://localhost:5000/assinar_incidente/" + this.incidenteid, this.form)

            await axios.patch("http://localhost:5000/atualizar_incidente/" + this.incidenteid, {
                'status': 'IN_PROGRESS'
            })

            if (response.status == 200) {
                this.$swal('Bom trabalho!', 'Livro emprestado com sucesso!', 'success')
                
                this.redirectToHome()
            } else {
                this.$swal('Erro!', 'Ocorreu algum erro tente novamente!', 'error')
            }
        }
    }
}
</script>

<style scoped>
p, label {
    color: #fff
}
</style>
