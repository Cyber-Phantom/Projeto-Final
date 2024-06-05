<template>
    <footer class="footer">
        <span>Design by <strong>PS Sistemas</strong> &copy; 2024-{{ new Date().getFullYear() }}</span>
    </footer>
</template>

<script setup lang="ts">

const name = 'Footer'

</script>

<style scoped>
.footer {
    grid-area: footer;
    background-color: #DDD;
    color: #333;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
}
</style>