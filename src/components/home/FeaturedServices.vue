<template>
    <section class="py-16 md:py-24 bg-fondo">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-extrabold text-texto-principal mb-3">
                    Nuestros <span class="text-acento">Servicios Principales</span>
                </h2>
                <p class="text-lg text-texto-secundario max-w-2xl mx-auto">
                    Ofrecemos un catálogo de servicios adaptado a tu necesidad, siempre con la garantía de calidad y el compromiso ecológico de Lican.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div v-for="service in services" :key="service.id" 
                class="flex flex-col p-6 rounded-xl bg-white border-2 border-gray-100 transition duration-300 hover:shadow-elevado hover:border-acento"
                >
                    <div class="text-acento mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-acento-claro bg-opacity-10">
                        <component :is="service.iconComponent" class="w-6 h-6" />
                    </div>
                    
                    <h3 class="text-xl font-bold text-texto-principal mb-2">
                        {{ service.title }}
                    </h3>
                    <p class="text-texto-secundario mb-4 flex-grow">
                        {{ service.description }}
                    </p>
                    
                    <router-link :to="service.path" class="mt-auto text-acento font-semibold hover:text-acento-oscuro flex items-center">
                        Saber más
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </router-link>

                </div>

            </div>
            
            <div class="text-center mt-16">
                <router-link to="/servicios" 
                class="py-3 px-10 rounded-full text-lg font-bold bg-contraste text-fondo shadow-md 
                        hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
                >
                    Ver todos los Servicios
                </router-link>
            </div>

        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import { 
    BuildingOfficeIcon,
    HomeModernIcon,
    WrenchScrewdriverIcon,
    SparklesIcon
    } from '@heroicons/vue/24/outline';

    const services = ref([
    { 
        id: 1, 
        title: 'Limpieza de Oficinas y Empresas', 
        description: 'Soluciones de limpieza verde adaptadas a entornos corporativos, garantizando un ambiente de trabajo saludable.',
        iconComponent: BuildingOfficeIcon,
        path: '/servicios#oficinas'
    },
    { 
        id: 2, 
        title: 'Comunidades y Espacios Comunes', 
        description: 'Mantenimiento integral de zonas comunes, escaleras y portales con productos que protegen a vecinos y mascotas.',
        iconComponent: HomeModernIcon,
        path: '/servicios#comunidades'
    },
    { 
        id: 3, 
        title: 'Limpieza Post-Obra y Profunda', 
        description: 'Eliminación completa de restos y polvo de obra, con técnicas profesionales y sin residuos químicos persistentes.',
        iconComponent: WrenchScrewdriverIcon,
        path: '/servicios#especiales'
    },
    { 
        id: 4, 
        title: 'Limpieza Residencial Ecológica', 
        description: 'Servicios de limpieza para el hogar enfocados en el bienestar familiar, utilizando únicamente productos biodegradables.',
        iconComponent: SparklesIcon,
        path: '/servicios#residencial'
    }
    ]);
</script>