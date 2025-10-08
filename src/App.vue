<template>
    <Header/>
    <RouterView />
    <Footer/>
</template>

<script setup>
//Rollback of recent edit
    import { RouterView } from 'vue-router';
    import Header from '@components/Header.vue';
    import Footer from '@components/Footer.vue';
</script>