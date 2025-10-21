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
        title: 'Licán - Servicios de limpieza ecológicos en Navarra',
        meta: [
            {
                name: 'description',
                content: 'Limpiezas Licán ofrece servicios de limpieza ecológicos en toda Navarra. Comprometidos con la profesionalidad y el cuidado del medio ambiente. 10+ años de experiencia en el sector de la limpieza. Expertos en naves, conductos y paneles solares con productos 100% ecológicos.'
            },
            {
                name: 'keywords',
                content: 'limpieza ecológica, servicios de limpieza, limpieza en Navarra, limpieza sostenible, Lican, limpieza profesional, limpieza verde'
            },
            {
                name: 'author',
                content: 'Licán'
            },
            { 
                rel: 'canonical', 
                href: 'https://limpiezaslican.es/' 
            }
        ]
    });
</script>