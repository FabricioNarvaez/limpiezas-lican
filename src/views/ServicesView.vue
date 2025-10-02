<template>
    <ViewHeader :headerProps /> 
    <ServicesList />
</template>

<script setup>
    import ViewHeader from '@components/viewHeader.vue';
    import ServicesList from '@components/services/ServicesList.vue';

    const headerProps = {
        title: 'Nuestro Catálogo',
        subtitle: 'Soluciones de Limpieza',
        subtitleSpan: 'para cada Entorno',
        description: 'Lican ofrece una gama completa de servicios, diseñados con precisión profesional y siempre con la garantía de un impacto ecológico mínimo.'
    }
</script>