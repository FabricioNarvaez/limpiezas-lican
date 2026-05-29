<template>
    <div>
        <h2 v-if="title" class="text-4xl font-extrabold text-acento text-center mb-12" data-aos="zoom-in">
            ¿Dónde nos encontramos?
        </h2>
        <div class="rounded-xl overflow-hidden w-full h-96 mt-4 px-3 m-auto" data-aos="zoom-in">
            <iframe class="m-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46827.112297252635!2d-1.690944488772213!3d42.81594108010768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50930049752a61%3A0x8a197338ddb5d91!2sLimpiezas%20Lic%C3%A1n!5e0!3m2!1ses!2ses!4v1763376466501!5m2!1ses!2ses"
                :width="widthC" :height="heightC" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: Boolean,
            default: false
        },
        widthC: {
            type: Number,
            default: 350
        },
        heightC: {
            type: Number,
            default: 450
        }
    });
</script>