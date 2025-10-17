<template>
    <section :class="ctaProps.bgColor" data-aos="zoom-in" data-aos-offset="250"
        class="text-center mt-20 mb-10 max-w-7xl mr-auto ml-auto p-8 rounded-xl shadow-lg">
        <SparklesIcon class="w-12 h-12 text-fondo mx-auto mb-4" />
        <h3 class="text-2xl font-extrabold text-acento mb-4">{{ ctaProps.title}}</h3>
        <p class="text-lg text-texto-principal mb-6">
            {{ ctaProps.subtitle }}
        </p>

        <router-link 
            to="/contacto" 
            class="py-3 px-10 rounded-full mr-auto ml-auto w-fit flex items-center text-lg font-bold bg-acento text-fondo shadow-elevado 
                    hover:bg-acento-oscuro transition duration-300 transform hover:scale-105"
            >
            {{ ctaProps.buttonText || 'Contactar Ahora' }}
            <ArrowRightIcon class="w-5 h-5 ml-3" />
        </router-link>
    </section>
</template>

<script setup>
    import { SparklesIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';

    defineProps({
        ctaProps: {
            type: Object,
            required: true,
        }
    })
</script>