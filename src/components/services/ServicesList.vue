<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div 
            v-for="(service, index) in allServices" 
            :key="service.id" 
            :id="service.id" 
            class="mb-16 pt-4 border-b pb-8"

            data-aos="fade-up" 
            :data-aos-delay="index * 100" 
            data-aos-offset="300"
        >
            <div 
                :class="[
                    'flex flex-col md:flex-row gap-8 items-start',
                    { 'md:flex-row-reverse': index % 2 !== 0 } 
                ]"
            >
                
                <div v-if="service.image" class="w-full md:w-1/2 rounded-xl overflow-hidden shadow-elevado">
                    <img 
                        :src="service.image" 
                        :alt="service.alt || `Trabajo de ${service.title} realizado por Lican`" 
                        class="w-full h-auto object-cover max-h-[400px] transition duration-500 hover:scale-[1.03]"
                        loading="lazy"
                    >
                </div>

                <div :class="['w-full', service.image ? 'md:w-1/2' : 'md:w-full']">
                    
                    <div class="flex items-center mb-4">
                        <component :is="service.iconComponent" class="w-8 h-8 text-acento mr-4 flex-shrink-0" />
                        <h2 class="text-3xl font-bold text-texto-principal">
                            {{ service.title }}
                        </h2>
                    </div>
                    <p class="text-lg text-texto-secundario mb-8">
                        {{ service.descriptionServices }}
                    </p>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                        <div v-for="include in service.includes" :key="include" class="flex items-start text-texto-principal">
                            <svg class="w-5 h-5 text-acento flex-shrink-0 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            <span class="text-lg">{{ include }}</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <CtaSection :ctaProps/>
    </div>
</template>

<script setup>
    import { allServices } from '@composables/useServices';
    import CtaSection from '@components/CtaSection.vue';

    const ctaProps = {
        title: '¿Necesitas una Solución a Medida?',
        subtitle: 'Si tu necesidad no se encuentra en nuestro listado, contacta con Lican y diseñaremos un plan de limpieza personalizado.',
        bgColor: 'bg-acento-claro',
        buttonText: 'Solicitar Estudio Gratuito',
    }
</script>