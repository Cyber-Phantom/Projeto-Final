<template>
    <aside class="menu" v-show="isMenuVisible">
        
    </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStore } from '@/config/store'

const name = 'Menu'
const { isMenuVisible } = storeToRefs(useStore())

</script>

<style scoped>
.menu {
    grid-area: menu;
    background: linear-gradient(to right, #232526, #414345);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>
