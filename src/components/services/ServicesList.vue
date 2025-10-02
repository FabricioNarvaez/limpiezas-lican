<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div v-for="cat in servicesCategories" :key="cat.id" :id="cat.id" class="mb-16 pt-4 border-b pb-8">
            <div class="flex items-center mb-6">
                <component :is="cat.icon" class="w-8 h-8 text-acento mr-4" />
                <h2 class="text-3xl font-bold text-texto-principal">
                    {{ cat.category }}
                </h2>
            </div>
            <p class="text-lg text-texto-secundario mb-8 max-w-4xl">
                {{ cat.description }}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div v-for="service in cat.services" :key="service" class="flex items-start text-texto-principal">
                    <svg class="w-5 h-5 text-acento flex-shrink-0 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <span class="text-lg">{{ service }}</span>
                </div>
            </div>
        </div>

        <div class="text-center mt-20 p-8 bg-acento-claro rounded-xl shadow-lg">
            <h3 class="text-2xl font-extrabold text-acento mb-4">¿Necesitas una Solución a Medida?</h3>
            <p class="text-lg text-texto-principal mb-6">
                Si tu necesidad no se encuentra en nuestro listado, contacta con Lican y diseñaremos un plan de limpieza personalizado.
            </p>
             <router-link 
                to="/contacto" 
                class="py-3 px-10 rounded-full text-lg font-bold bg-acento text-fondo shadow-elevado 
                       hover:bg-acento-oscuro transition duration-300 transform hover:scale-105"
             >
                Solicitar Estudio Gratuito
             </router-link>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { HomeModernIcon, BuildingOfficeIcon, TrashIcon, SunIcon } from '@heroicons/vue/24/outline';

    const servicesCategories = ref([
        {
            id: 'oficinas',
            category: 'Limpieza Corporativa y de Oficinas',
            icon: BuildingOfficeIcon,
            description: 'Mantenimiento diario o periódico para crear un ambiente de trabajo saludable y profesional. Incluye desinfección de zonas comunes y equipos.',
            services: [
                'Limpieza de despachos y salas de reuniones',
                'Limpieza y desinfección de baños y cocinas',
                'Gestión ecológica de residuos',
            ]
        },
        {
            id: 'comunidades',
            category: 'Comunidades de Vecinos y Espacios Comunes',
            icon: HomeModernIcon,
            description: 'Servicios de limpieza enfocados en el bienestar de los residentes, manteniendo portales, escaleras y áreas de ocio impecables.',
            services: [
                'Limpieza de escaleras, ascensores y pasillos',
                'Mantenimiento de garajes y trasteros',
                'Limpieza de cristales y barandillas',
            ]
        },
        {
            id: 'especiales',
            category: 'Servicios Especializados y Post-Obra',
            icon: TrashIcon,
            description: 'Soluciones para limpiezas profundas o puntuales que requieren maquinaria y técnicas avanzadas. Perfectas para inauguraciones o reformas.',
            services: [
                'Limpieza de fin de obra y primera ocupación',
                'Limpieza de choque (desinfección intensiva)',
                'Limpieza de fachadas y zonas exteriores (consultar)',
            ]
        },
        {
            id: 'residencial',
            category: 'Limpieza Residencial y Doméstica',
            icon: SunIcon,
            description: 'Cuidado de tu hogar con la flexibilidad que necesitas. Usamos productos biodegradables que protegen tu familia y tus mascotas.',
            services: [
                'Limpieza general por horas',
                'Limpieza a fondo de cocinas y baños',
                'Servicio de planchado y colada',
            ]
        }
    ]);
</script>