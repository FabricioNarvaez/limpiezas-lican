<template>
    <Header/>
    <RouterView />
    <Footer/>
    <CookieConsentBanner/>
</template>

<script setup>
    import { RouterView } from 'vue-router';
    import Header from '@components/Header.vue';
    import Footer from '@components/Footer.vue';
    import CookieConsentBanner from '@components/CookieConsentBanner.vue';
</script>