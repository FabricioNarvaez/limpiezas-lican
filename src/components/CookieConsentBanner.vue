<template>
    <transition name="slide-up">
        <div 
            v-if="!cookiesStore.hasConsent" 
            class="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-2xl z-50"
            data-aos="fade-up"
        >
            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p class="text-sm leading-relaxed text-center md:text-left">
                    Utilizamos <span class="font-bold text-acento">cookies propias y de terceros (Google Analytics)</span> para mejorar nuestros servicios y la experiencia de navegación. Puede obtener más información en nuestra 
                    <router-link to="/legal/politica-cookies" class="font-bold underline text-acento hover:text-acento-oscuro">
                        Política de Cookies
                    </router-link>.
                </p>

                <div class="flex flex-row gap-3 flex-shrink-0">
                    <button @click="cookiesStore.acceptCookies"
                        class="px-5 py-2 rounded-lg font-bold bg-acento text-fondo hover:bg-acento-oscuro transition duration-300 shadow-md">
                        Aceptar Cookies
                    </button>
                    <button @click="cookiesStore.declineCookies"
                        class="px-5 py-2 rounded-lg font-semibold bg-gray-500 text-fondo hover:bg-gray-600 transition duration-300 shadow-md">
                        Rechazar
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
    import { useCookiesStore } from '@store/cookiesStore';

    const cookiesStore = useCookiesStore();
</script>