<template>
    <section class="bg-acento-claro py-16 md:py-24 border-b-4 border-acento">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
            <p class="text-xl text-acento font-semibold uppercase tracking-widest mb-2">{{ headerProps.title }}</p>
            <h1 class="text-4xl md:text-6xl font-extrabold text-texto-principal mb-4">
                {{ headerProps.subtitle }} <span class="text-acento">{{ headerProps.subtitleSpan }}</span>
            </h1>
            <p class="text-lg md:text-xl text-texto-secundario max-w-3xl mx-auto" v-html="headerProps.description">
            </p>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        headerProps: Object,
    })
</script>