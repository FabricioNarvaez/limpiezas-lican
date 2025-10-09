<template>
    <section class="bg-fondo pt-16 md:pt-24 pb-16 md:pb-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <header class="mb-10 text-center">
                <h1 class="text-4xl md:text-5xl font-extrabold text-texto-principal border-b pb-3">
                    {{ title }}
                </h1>
            </header>

            <div class="space-y-8 text-texto-secundario text-base leading-relaxed">
                <slot></slot>
            </div>
            
        </div>
    </section>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            required: true,
        },
    });
</script>