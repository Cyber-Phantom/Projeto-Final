<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-none d-sm-block">{{ user.name }}</span>
            <div class="user-dropdown-img">
                <vue-gravatar :email="user.email" alt="User" />
            </div>
            <i class="fa fa-solid fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <RouterLink to="/admin"><i class="fa fa-solid fa-cogs"></i> Administração</RouterLink>
            <RouterLink to=""><i class="fa fa-solid fa-sign-out"></i> Sair</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/config/store'

const name = 'UseDropdown'

const store = useStore()
const { user } = store

</script>

<style scoped>
.user-dropdown {
    position: relative;
    height: 100%;
}

.user-button {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 100;
    height: 100%;
    padding: 0px 20px;
}

.user-dropdown:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

.user-dropdown-img {
    margin: 0px 10px;
}

.user-dropdown-img > img {
    max-height: 37px;
    border-radius: 5px;
}

.user-dropdown-content {
    position: absolute;
    right: 0px;
    background-color: #f9f9f9;
    min-width: 170px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
    visibility: visible;
    opacity: 1;
}

.user-dropdown-content a {
    text-decoration: none;
    color: #000;
    padding: 10px;
}

.user-dropdown-content a:hover {
    text-decoration: none;
    color: #000;
    background-color: #ededed;
}

</style>
