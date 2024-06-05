<template>
    <div class="user-admin">
        <!-- <BTableSimple hover striped :items="users"></BTableSimple> -->
        <DataTable :value="users" stripedRows rowHover tableStyle="min-width: 50rem">
            <ColumnTable field="id" header="Código" sortable></ColumnTable>
            <ColumnTable field="name" header="Nome" sortable></ColumnTable>
            <ColumnTable field="email" header="E-mail" sortable></ColumnTable>
            <ColumnTable field="admin" header="Administrador" sortable>
                <template #body="slotProps">
                    {{ SimNao(slotProps.data.admin) }}
                </template>
            </ColumnTable>
            <ColumnTable field="actions" header="Ações"></ColumnTable>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { baseApiUrl } from '@/global'
import axios from 'axios'

const name = 'UserAdmin'

const mode = 'save'
let user = ref({})
let users = ref([])

onMounted(() => {
    const url = `${baseApiUrl}/users`
    axios.get(url)
        .then(res => { users.value = res.data })
})

const SimNao = (value: boolean) => value ? 'Sim' : 'Não'

</script>

<style scoped>

</style>