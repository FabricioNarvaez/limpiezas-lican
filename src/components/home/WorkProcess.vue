<template>
    <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <h2 class="text-3xl md:text-4xl font-extrabold text-texto-principal mb-4">
                Nuestro <span class="text-acento">Proceso de Limpieza</span>
            </h2>
            <p class="text-lg text-texto-secundario max-w-3xl mx-auto mb-16">
                La profesionalidad de Lican se basa en un método claro, transparente y enfocado en la excelencia.
            </p>

            <div class="relative flex flex-col md:flex-row justify-between items-start md:items-stretch">
                
                <div class="absolute top-8 left-0 right-0 h-1 bg-acento-claro hidden md:block z-0"></div>
                
                <div v-for="(item, index) in processSteps" :key="item.step" 
                    class="md:w-1/3 relative z-10 mb-12 md:mb-0 px-4"
                >
                    <div class="w-16 h-16 mx-auto md:mx-0 md:mb-6 flex items-center justify-center 
                                rounded-full bg-acento border-4 border-white shadow-lg text-fondo">
                        <component :is="item.icon" class="w-8 h-8" />
                    </div>

                    <div class="block md:hidden text-2xl font-extrabold text-acento mt-4">
                        Paso 0{{ item.step }}
                    </div>

                    <div class="mt-4 md:mt-0 text-center md:text-left">
                        <h3 class="text-xl font-bold text-texto-principal mb-2 mt-4 md:mt-0">
                            {{ item.title }}
                        </h3>
                        <p class="text-texto-secundario">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-16">
                 <router-link 
                    to="/contacto" 
                    class="py-3 px-10 rounded-full mr-auto ml-auto w-fit block text-lg font-bold bg-acento text-fondo shadow-elevado 
                           hover:bg-acento-oscuro transition duration-300 transform hover:scale-105"
                 >
                    Comienza Hoy
                 </router-link>
            </div>

        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import { ClipboardDocumentListIcon, RocketLaunchIcon, CheckBadgeIcon } from '@heroicons/vue/24/outline';

    const processSteps = ref([
        {
            step: 1,
            title: 'Diagnóstico y Presupuesto Personalizado',
            description: 'Evaluamos tus necesidades de limpieza in situ y presentamos un presupuesto detallado con los servicios que se van a incluir.',
            icon: ClipboardDocumentListIcon
        },
        {
            step: 2,
            title: 'Ejecución con Equipo Profesional',
            description: 'Nuestro equipo, con años de experiencia en el sector, despliega la metodología y las herramientas precisas para asegurar la máxima calidad en cada rincón.',
            icon: RocketLaunchIcon
        },
        {
            step: 3,
            title: 'Verificación y Garantía de Calidad',
            description: 'Finalizamos con una verificación metódica, confirmando la excelencia y el rigor de cada tarea realizada, garantizando tu completa satisfacción.',
            icon: CheckBadgeIcon
        }
    ]);
</script>