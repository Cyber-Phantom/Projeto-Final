<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-solid fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia" />
        <div class="admin-pages-tabs">
            <nav>
                <div class="nav nav-tabs">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#artigos"
                        type="button">Artigos</button>
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#categorias"
                        type="button">Categorias</button>
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#usuarios"
                        type="button">Usuários</button>
                </div>
            </nav>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="artigos">
                    <ArticleAdmin />
                </div>
                <div class="tab-pane fade" id="categorias">
                    <CategoryAdmin />
                </div>
                <div class="tab-pane fade" id="usuarios">
                    <UserAdmin />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PageTitle from '../template/PageTitle.vue'
import ArticleAdmin from './ArticleAdmin.vue'
import CategoryAdmin from './CategoryAdmin.vue'
import UserAdmin from './UserAdmin.vue'

const name = 'AdminPages'

</script>

<style scoped></style>