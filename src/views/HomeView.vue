<template>
    <Hero/>
    <ValueProposition/>
    <FeaturedServices/>
    <!-- <TestimonialSection/> -->
    <WorkProcess/>
</template>

<script setup>
    import { useHead } from '@unhead/vue';
    import Hero from '@components/home/Hero.vue';
    import ValueProposition from '@components/home/ValueProposition.vue';
    import FeaturedServices from '@components/home/FeaturedServices.vue';
    import TestimonialSection from '@components/home/TestimonialSection.vue';
    import WorkProcess from '@components/home/WorkProcess.vue';

    useHead({
        title: 'Empresa de limpieza ecológicas en Pamplona y Navarra | Limpiezas Licán',
        link: [
            { 
                rel: 'canonical', 
                href: 'https://www.limpiezaslican.es/' 
            },
            {
                rel: 'preload', 
                as: 'image', 
                href: '/img/hero-clean.webp', 
                type: 'image/webp', 
                fetchpriority: 'high'
            }
        ],
        meta: [
            {
                name: 'description',
                content: 'Servicios profesionales de limpieza en Pamplona y Navarra. Especialistas en limpieza de oficinas, naves industriales, comunidades, paneles solares y limpieza integral de vehículos con productos 100% ecológicos.'
            },
            {
                name: 'keywords',
                content: 'empresa de limpieza pamplona, servicios de limpieza navarra, limpieza de oficinas pamplona, limpieza naves industriales, limpiezas lican'
            },
        ]
    });
</script>