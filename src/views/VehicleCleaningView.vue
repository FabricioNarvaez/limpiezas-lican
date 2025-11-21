<template>
    <VehicleCleaningHeader />
    <ImageComparison />
    <Services />
    <MapLocation :title="true" :widthC="650" :heightC="650" />
    <CtaSection :ctaProps />
</template>

<script setup>
    import { useHead } from '@unhead/vue';
    import { contactInfo } from '@composables/useContactInfo';
    import VehicleCleaningHeader from '@components/vehicleCleaning/VehicleCleaningHeader.vue';
    import ImageComparison from '@components/vehicleCleaning/ImageComparison.vue';
    import Services from '@components/vehicleCleaning/Services.vue';
    import MapLocation from '@components/contact/MapLocation.vue';
    import CtaSection from '@components/CtaSection.vue';

    const ctaProps = {
        title: '¿Listo para dejar tu coche impecable?',
        subtitle: 'Estaremos encantados de ofrecerte un servicio de limpieza y cuidado de vehículos excepcional y personalizado para tus necesidades.',
        bgColor: 'bg-acento-claro'
    };

    useHead({
        title: 'Limpieza y Lavado de Vehículos en Pamplona | Limpiezas Licán',
        meta: [
            { 
                name: 'description', 
                content: 'Servicio premium de limpieza, desinfección y pulido de coches en nuestra ubicación de Pamplona. Tratamiento ecológico y resultados profesionales.' 
            },
            { 
                name: 'geo.region', 
                content: 'ES-NA'
            },
            { 
                name: 'geo.placename', 
                content: 'Pamplona' 
            }
        ],
        link: [
            { 
                rel: 'canonical', 
                href: 'https://www.limpiezaslican.es/servicios/limpieza-y-lavado-de-vehiculos' 
            }
        ]
    });
</script>