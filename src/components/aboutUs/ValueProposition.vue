<template>
    <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-texto-principal mb-3">Nuestros Pilares</h2>
        <p class="text-lg text-texto-secundario">Valores que nos definen en cada servicio que realizamos.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
            v-for="value in values" 
            :key="value.name" 
            class="p-6 bg-fondo border border-gray-100 rounded-xl shadow-sutil text-center hover:shadow-elevado transition duration-300"
        >
            <component :is="value.icon" class="w-12 h-12 text-acento mx-auto mb-4" />
            <h3 class="text-xl font-bold text-texto-principal mb-2">{{ value.name }}</h3>
            <p class="text-texto-secundario text-sm">{{ value.description }}</p>
        </div>
    </div>
</template>

<script setup>
    import { GlobeAltIcon, ShieldCheckIcon, UserIcon } from '@heroicons/vue/24/outline';

    const values = [
        {
            name: "Sostenibilidad Total",
            description: "Utilizamos productos 100% biodegradables y procesos de bajo impacto energético para proteger su salud y el planeta.",
            icon: GlobeAltIcon,
        },
        {
            name: "Calidad Certificada",
            description: "Personal altamente capacitado y experimentado garantizan que cada rincón cumpla con nuestros rigurosos estándares de higiene.",
            icon: ShieldCheckIcon,
        },
        {
            name: "Compromiso Humano",
            description: "Trato cercano, flexibilidad horaria y personal estable. Creemos en el bienestar de nuestro equipo para ofrecer el mejor servicio.",
            icon: UserIcon,
        },
    ];
</script>