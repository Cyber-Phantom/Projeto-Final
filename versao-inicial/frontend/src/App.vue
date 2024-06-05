<template>
  <div class="app" :class="{ 'hide-menu': !isMenuVisible }">
    <Header title="PS - Base de conhecimento" :hideToggle="false" :hideUserDropdown="false" />
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia'
import { useStore } from '@/config/store'

import Header from '@/components/template/HeaderPage.vue'
import Menu from '@/components/template/MenuPage.vue'
import Content from '@/components/template/ContentPage.vue'
import Footer from '@/components/template/FooterPage.vue'

const { isMenuVisible } = storeToRefs(useStore())

</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
    margin: 0;
}

.app {
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 
    "header header"
    "menu content"
    "menu footer";
}

.app.hide-menu {
  grid-template-areas: 
    "header header"
    "content content"
    "footer footer";
}

</style>
