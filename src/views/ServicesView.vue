<template>
    <ViewHeader :headerProps /> 
    <ServicesList />
</template>

<script setup>
    import { useHead } from '@unhead/vue';
    import ViewHeader from '@components/viewHeader.vue';
    import ServicesList from '@components/services/ServicesList.vue';

    const headerProps = {
        title: 'Nuestro Catálogo',
        subtitle: 'Soluciones de Limpieza',
        subtitleSpan: 'para cada Entorno',
        description: 'Lican ofrece una gama completa de servicios, diseñados con precisión profesional y siempre con la garantía de un impacto ecológico mínimo.'
    }

    useHead({
        title: 'Catálogo Servicios - Limpiezas Licán',
        link: [
            { 
                rel: 'canonical', 
                href: 'https://limpiezaslican.es/servicios' 
            }
        ],
        meta: [
            {
                name: 'description',
                content: 'Descubre los servicios de limpieza de Licán en Navarra. Desde limpieza de naves industriales hasta mantenimiento de paneles solares, ofrecemos soluciones sostenibles y profesionales para cada entorno.'
            },
            {
                name: 'keywords',
                content: 'servicios de limpieza, limpieza ecológica, limpieza en Navarra, limpieza en Pamplona, mantenimiento de paneles solares, limpieza de naves industriales, limpieza oficinas, pulido suelos, limpieza profesional, limpieza sostenible,'
            },
            {
                name: 'author',
                content: 'Licán'
            },
        ]
    });
</script>