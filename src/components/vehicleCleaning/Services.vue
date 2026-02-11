<template>
    <section class="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-texto-principal text-center mb-12" data-aos="zoom-in">
            Personaliza tu Limpieza: <span class="text-acento">Adaptada a tus Necesidades</span>
        </h2>
        <p class="text-xl text-texto-secundario text-center mb-10 max-w-3xl mx-auto" data-aos="zoom-in">
            Cada vehículo es único, por eso ofrecemos diferentes niveles de servicios que para un resultado perfecto.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="service in servicesLevels" :key="service.title" class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between" data-aos="fade-up">
                <div>
                    <div class="flex items-center text-acento mb-4" data-aos="zoom-in">
                        <Icon :icon="service.icon" class="w-8 h-8 mr-3" />
                        <h3 class="text-2xl font-bold">{{ service.title }}</h3>
                    </div>
                    <p class="text-texto-secundario mb-4" data-aos="zoom-in">
                        {{ service.description }}
                    </p>
                    <ul class="text-texto-principal space-y-2" data-aos="zoom-in">
                        <li v-for="feature in service.features" class="flex items-start">
                            <Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" />
                            <p v-html="feature"></p>
                        </li>
                    </ul>
                </div>

                <router-link 
                    :to="{ 
                        path: '/contacto', 
                        query: { servicio: 'vehiculos', nivel: service.title } 
                    }"
                    class="block text-center mt-10 py-3 px-6 rounded-full bg-acento text-fondo font-bold hover:bg-acento-oscuro transition duration-300"
                >
                    Me interesa este nivel
                </router-link>
            </div>
        </div>
        <ConditionsAndExtras />
    </section>
</template>

<script setup>
    import ConditionsAndExtras from './ConditionsAndExtras.vue';
    import { servicesLevels } from '@composables/useVehicleServices';
</script>