<template>
    <div class="vehicle-cleaning-view">
        
        <section class="hero bg-blue-100 py-20 text-center">
            <h1 class="text-4xl font-extrabold text-texto-principal">
                Lavado y Limpieza Profesional de Vehículos en <span class="text-acento">Pamplona</span>
            </h1>
            <p class="mt-4 text-xl text-texto-secundario">Limpieza de interior, pulido y desinfección de flotas y coches particulares con enfoque ecológico.</p>
            <router-link 
                to="/contacto" 
                class="py-3 px-10 rounded-full mt-4 mr-auto ml-auto w-fit flex items-center text-lg font-bold bg-blue-600 text-fondo shadow-elevado 
                        hover:bg-blue-800 transition duration-300 transform hover:scale-105"
                >
                Pedir cita o Presupuesto
            </router-link>
        </section>

        <section class="py-16 container mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center">Nuestros Resultados: Máxima Profesionalidad</h2>
        </section>

        <section class="bg-fondo py-16">
            <h2 class="text-3xl font-bold mb-10 text-center">Qué Incluye Nuestro Servicio Premium</h2>
        </section>

        <section class="py-16 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
                <h2 class="text-3xl font-bold text-texto-principal mb-4">Visítanos en Nuestra Base</h2>
                <p class="text-lg text-texto-secundario mb-6">
                    Te esperamos en nuestra nave acondicionada para dar el mejor servicio a tu vehículo o flota.
                    <br><br>
                    <span class="font-bold">Dirección:</span> {{ contactInfo.address }}
                </p>
                <router-link :to="contactInfo.addressUrl" target="_blank" class="text-acento font-semibold hover:underline">
                    Ver en Google Maps y Obtener Ruta
                </router-link>
            </div>
            
            <MapLocation />
            
        </section>
        
        <CtaSection :ctaProps/>
    </div>
</template>

<script setup>
    import { useHead } from '@unhead/vue';
    import { contactInfo } from '@composables/useContactInfo';
    import MapLocation from '@components/contact/MapLocation.vue';
    import CtaSection from '@components/CtaSection.vue';

    const ctaProps = {
        title: '¿Listo para dejar tu coche impecable?',
        subtitle: 'Estaremos encantados de ofrecerte un servicio de limpieza y cuidado de vehículos excepcional y personalizado para tus necesidades.',
        bgColor: 'bg-acento-claro'
    }

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