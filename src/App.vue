<template>
    <Header/>
    <RouterView />
    <Footer/>
    <CookieConsentBanner/>
</template>

<script setup>
    import { RouterView } from 'vue-router';
    import { useHead } from '@unhead/vue';
    import Header from '@components/Header.vue';
    import Footer from '@components/Footer.vue';
    import CookieConsentBanner from '@components/CookieConsentBanner.vue';

    useHead({
        meta: [
            { charset: 'utf-8' },
            {
                name: 'author',
                content: 'Limpiezas Licán'
            }
        ]
    });
</script>