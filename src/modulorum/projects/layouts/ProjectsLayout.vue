
<template>
    <SupraMenu />

    <main class="flex flex-row">
        <LateralisMenu />
        <router-view />
    </main>
</template>


<script lang="ts" setup>
import SupraMenu from '@/modulorum/commune/components/SupraMenu.vue';
import LateralisMenu from '../components/LateralisMenu.vue';


</script>