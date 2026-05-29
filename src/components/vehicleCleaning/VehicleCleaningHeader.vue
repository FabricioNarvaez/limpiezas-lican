<template>
    <header class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-800 flex items-center justify-center">
        
        <img class="absolute inset-0 w-full h-full object-cover opacity-50"
            src="/img/Faro-limpio.png" 
            alt="Parte frontal de un coche limpio después del tratamiento de faros"
            loading="eager" 
        />

        <div class="absolute inset-0 bg-gradient-to-r from-acento/0 via-acento/50 to-acento/90"></div>

        <div class="relative z-10 text-center text-white p-6 max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-extrabold mb-4" data-aos="fade-down" data-aos-once="true">
                Limpieza y Lavado de <span class="text-white">Vehículos</span>
            </h1>
            <p class="text-xl md:text-2xl font-light mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                Servicio profesional con ubicación física en <span class="font-semibold">Pamplona</span>. Tu coche impecable y desinfectado.
            </p>
            
            <button class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-acento bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                @click="openVideoModal" 
                data-aos="fade-up" data-aos-delay="400" data-aos-once="true"
            >
                <Icon icon="mdi:play-circle" class="w-5 h-5 mr-2" />
                Ver Resultado
            </button>
        </div>
    </header>

    <Teleport to="body">
        <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" @click.self="closeVideoModal">
            <div class="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden">
                
                <button @click="closeVideoModal" class="absolute top-3 right-3 text-acento text-3xl z-20">
                    <Icon icon="charm:cross" />
                </button>

                <div class="relative" style="padding-top: 56.25%;"> 
                    <video 
                        class="absolute top-0 left-0 w-full h-full"
                        src="/video/faro-resultado.mp4" 
                        autoplay loop muted
                    >
                        Tu navegador no soporta el tag de video.
                    </video>
                </div>

            </div>
        </div>
    </Teleport>
</template>

<script setup>
    import { ref } from 'vue';

    const isModalOpen = ref(false);

    const openVideoModal = () => {
        isModalOpen.value = true;
        document.body.style.overflow = 'hidden'; 
    };

    const closeVideoModal = () => {
        isModalOpen.value = false;
        document.body.style.overflow = '';
    };
</script>