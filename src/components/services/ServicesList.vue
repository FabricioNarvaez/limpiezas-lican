<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div v-for="service in allServices" :key="service.id" :id="service.id" class="mb-16 pt-4 border-b pb-8">
            <div class="flex items-center mb-6">
                <component :is="service.icon" class="w-8 h-8 text-acento mr-4" />
                <h2 class="text-3xl font-bold text-texto-principal">
                    {{ service.title }}
                </h2>
            </div>
            <p class="text-lg text-texto-secundario mb-8 max-w-4xl">
                {{ service.descriptionServices }}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div v-for="include in service.includes" :key="include" class="flex items-start text-texto-principal">
                    <svg class="w-5 h-5 text-acento flex-shrink-0 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <span class="text-lg">{{ include }}</span>
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
    import { allServices } from '@composables/useServices';
</script>