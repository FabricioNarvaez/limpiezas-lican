<script setup>
import { UserGroupIcon, ClockIcon, StarIcon } from '@heroicons/vue/24/outline';

const figures = [
    {
        number: "10+",
        label: "Años de Experiencia Sectorial",
        description: "Nuestro equipo, con una década en el sector, traslada su conocimiento a cada protocolo de Lican, asegurando la máxima calidad.",
        icon: ClockIcon,
    },
    {
        number: "100%",
        label: "Confianza del Cliente",
        description: "Clientes corporativos anteriores nos han seguido directamente, buscando la atención personalizada y la calidad que ofrecemos en Lican.",
        icon: UserGroupIcon,
    },
    {
        number: "2025",
        label: "Nacimiento de una Nueva Visión",
        description: "Aunque somos nuevos, nacemos con una base sólida de clientes y la firme convicción de liderar la limpieza verde y profesional.",
        icon: StarIcon,
    },
];
</script>

<template>
    <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-texto-principal mb-3">Nuestra Solidez se Mide en Experiencia</h2>
        <p class="text-lg text-texto-secundario">Datos clave que demuestran por qué puedes confiar en Lican.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div v-for="figure in figures" :key="figure.label" class="p-8 bg-acento-claro rounded-xl border border-acento-claro">
            <component :is="figure.icon" class="w-10 h-10 text-acento mx-auto mb-4" />
            <p class="text-5xl font-extrabold text-acento mb-2">{{ figure.number }}</p>
            <h3 class="text-xl font-bold text-texto-principal mb-2">{{ figure.label }}</h3>
            <p class="text-texto-secundario text-sm">{{ figure.description }}</p>
        </div>
    </div>
</template>