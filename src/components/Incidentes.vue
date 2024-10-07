<template>
    <div class="container">
        <h2 class="mb-5">Incidentes</h2>

        <div class="table-responsive">
            <table class="table table-striped custom-table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Status</th>
                        <th scope="col">Prioridade</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="row" v-for="incidente in incidentes">
                      <td>
                          {{ incidente.id }}
                      </td>
                      <td><a href="#">{{ incidente.title }}</a></td>
                      <td>
                        {{ incidente.description }}
                      </td>
                      <td>
                        {{ incidente.status }}
                      </td>
                      <td>
                        {{ incidente.priority }}
                      </td>
                      <td>
                        {{ incidente.tags }}
                      </td>
                      <td>
                        <div v-if="incidente.assigned_to == null">
                            <a :href="'/assinar/' + incidente.id" class="more">Assinar</a>
                        </div>
                        <div v-else>
                            <a href="javascript:;" @click="atualizar(incidente.id)" class="more">Atualizar Status</a>
                        </div>
                      </td>
                    </tr>                
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { defineProps } from 'vue'
import axios from 'axios'

export default {
    name: 'Emprestar',
    props: {
        incidentes: Array
    },
    methods: {
        async atualizar(id) {
            event.preventDefault();

            const result = await this.$swal({
                title: 'Tem certeza?',
                text: 'Quer quer encerrar o incidente?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, confirmar!',
                cancelButtonText: 'Não, cancelar!',
                reverseButtons: true
            });

            if (result.isConfirmed) {
                const response = await axios.patch("http://localhost:5000/atualizar_incidente/" + id, {
                    'status': 'CLOSED'
                })

                if (response.data.success == true) {
                    this.$swal('Bom trabalho!', 'Incidente resolvido com sucesso!', 'success')
                    
                    this.redirectToHome()
                } else {
                    this.$swal('Erro!', 'Ocorreu algum erro tente novamente!', 'error')
                }
            } else {
                this.$swal('Cancelada!', 'Operação cancelada, nada aconteceu!', 'info')
            }
        },
        getCurrentDate() {
            const today = new Date()

            const yyyy = today.getFullYear()
            let mm = today.getMonth() + 1
            let dd = today.getDate()

            return yyyy + "-" + mm + "-" + dd
        }
    }
}
</script>