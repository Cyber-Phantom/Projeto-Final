<template>
    <div class="content">
        <RouterView />
    </div>
</template>

<script setup lang="ts">

const name = 'Content'

</script>

<style scoped>
.content {
    grid-area: content;
    background-color: #efefef;
    padding: 20px;
}
</style>
