<template>
    <div class="container mt-5">
        <h1 class="text-white">Formulário de Empréstimo</h1>
        <form class="form" @submit.prevent="submitForm">
            <!-- Display book information -->
            <div class="mb-3">
                <h2>Cadastrar Incidente</h2>
            </div>

            <div class="mb-3">
                <label for="title" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="title" v-model="form.title" required />
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Descrição</label>
                <input type="text" class="form-control" id="description" v-model="form.description" required />
            </div>

            <div class="mb-3">
                <label for="priority" class="form-label">Prioridade</label>
                <select class="form-control" id="priority" v-model="form.priority" required >
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <select class="form-control" id="status" v-model="form.status" required >
                    <option value="OPEN">OPEN</option>
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                    <option value="CLOSED">CLOSED</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="tags" class="form-label">TAGS (Separe por virgula)</label>
                <input type="text" class="form-control" id="tags" v-model="form.tags" required />
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
    name: 'Cadastrar',
    data() {
        return {
            form: {
                id: '',
                title: '',
                description: '',
                status: '',
                priority: '',
                tags: ''
            }
        }
    },
    methods: {
        redirectToHome() {
            this.$router.replace('/')
        },
        async submitForm() {
            this.form.tags = '[' + this.form.tags + ']'
            const response = await axios.post("http://localhost:5000/incidentes", this.form)

            if (response.status == 201) {
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
