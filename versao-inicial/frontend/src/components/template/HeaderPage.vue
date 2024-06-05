<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu(undefined)" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            <RouterLink to="/">{{ title }}</RouterLink>
        </h1>
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useStore } from '@/config/store'
import UserDropdown from './UserDropdown.vue'

defineProps<({ 'title': string, 'hideToggle': boolean, 'hideUserDropdown': boolean })>()

const name = 'Header'
const store = useStore()
const { toggleMenu } = store

const icon = computed(() => { 
    return store.isMenuVisible ? 'fa-solid fa-angle-left' : 'fa-solid fa-angle-down'
})

</script>

<style scoped>
.header {
    grid-area: header;
    background: linear-gradient(to right, #1e469a, #49a7c1);

    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
}

.title a {
    color: #fff;
    text-decoration: none;
}

.title a:hover {
    color: #fff;
    text-decoration: none;
}

header.header > a.toggle {
    width: 60px;
    height: 100%;
    color: #fff;
    justify-self: flex-start;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
}

header.header>a.toggle:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
}

</style>