<template>
    <div class="container mx-auto py-20 text-center min-h-[70vh]">
        <h1 class="text-9xl font-extrabold text-acento-claro">404</h1>
        <h2 class="text-4xl font-bold text-texto-principal mt-4 mb-4">
            ¡Vaya! Página no encontrada.
        </h2>
        <p class="text-lg text-texto-secundario max-w-xl mx-auto mb-8">
            Parece que la URL a la que intentas acceder no existe o ha sido movida.
            <br>
            Te invitamos a volver a la página de inicio o a revisar nuestros servicios.
        </p>
        
        <div class="flex justify-center space-x-4">
            <router-link to="/" 
                class="py-3 px-10 rounded-full text-lg font-bold bg-acento text-fondo shadow-elevado 
                        hover:bg-acento-oscuro transition duration-300 transform hover:scale-105"
            >
                Ir a Inicio
            </router-link>

            <router-link to="/servicios" 
                class="py-3 px-10 rounded-full text-lg font-bold bg-fondo text-acento border-2 border-acento 
                        hover:bg-acento hover:text-fondo transition duration-300"
            >
                Ver Servicios
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { useHead } from '@unhead/vue';
    useHead({
        title: '404 - Página no encontrada | Limpiezas Licán',
    });
</script>