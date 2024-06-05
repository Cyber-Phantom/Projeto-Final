<template>
    <div class="home">
        <PageTitle icon="fa fa-solid fa-home" main="Dashboard" sub="Base de Conhecimento" />
        <div class="stats">
            <StatPage title="Categorias" :value="stat.categories" icon="fa fa-solid fa-folder" color="#d54d58" />
            <StatPage title="Artigos" :value="stat.articles" icon="fa fa-solid fa-file" color="#3bc480" />
            <StatPage title="Usuários" :value="stat.users" icon="fa fa-solid fa-user" color="#3282cd" />
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { baseApiUrl } from '@/global';
import PageTitle from '../template/PageTitle.vue'
import StatPage from './StatPage.vue'
import axios from 'axios'

const name = 'Home'

let stat = ref({})

// const getStats = () =>
//     axios.get(`${baseApiUrl}/stats`)
//     .then(res => stat = res.data)

onMounted(() => 
    axios.get(`${baseApiUrl}/stats`)
    .then(res => stat.value = res.data)
)

</script>

<style scoped>
.stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>