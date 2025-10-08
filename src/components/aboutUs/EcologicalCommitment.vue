<template>
    <div class="text-center mb-12">
        <p class="text-acento font-semibold uppercase tracking-widest text-sm mb-2">Nuestro Diferencial</p>
        <h2 class="text-3xl md:text-4xl font-bold text-texto-principal">El Método Lican: Experiencia y Sostenibilidad</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div v-for="item in commitmentItems" :key="item.title" class="p-8 bg-fondo rounded-xl shadow-lg border-t-4 border-acento-claro">
            <component :is="item.icon" :class="['w-10 h-10 mb-4', item.color]" />
            <h3 class="text-xl font-bold text-texto-principal mb-3">{{ item.title }}</h3>
            <p class="text-texto-secundario text-base">{{ item.description }}</p>
        </div>
    </div>
</template>

<script setup>
    import { BeakerIcon, GlobeAmericasIcon, CheckBadgeIcon } from '@heroicons/vue/24/outline';

    const commitmentItems = [
        {
            title: "Fórmulas Sin Tóxicos",
            description: "Solo utilizamos productos ecológicos certificados. Esto garantiza que no hay químicos agresivos, reduciendo alergias y mejorando la calidad del aire interior.",
            icon: BeakerIcon,
            color: 'text-green-600',
        },
        {
            title: "Procesos de Mínimo Impacto",
            description: "Nuestro método, perfeccionado a lo largo de años, minimiza el consumo de agua y energía.",
            icon: GlobeAmericasIcon,
            color: 'text-blue-600',
        },
        {
            title: "Garantía de Resultados (Experiencia Comprobada)",
            description: "Aunque somos una empresa nueva, nuestros clientes confían en la metodología y la experiencia de más de 10 años de nuestro equipo en limpieza corporativa e industrial.",
            icon: CheckBadgeIcon,
            color: 'text-acento',
        },
    ];
</script>