<template>
    <section class="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center bg-fondo"
        style="background-image: url('/img/hero-clean.jpg'); background-size: cover; background-position: center;"
    >
        <div class="absolute inset-0 bg-texto-principal opacity-60"></div>

        <div class="relative z-10 text-center max-w-4xl px-4 py-20">
            
            <h2 class="text-xl md:text-2xl font-semibold text-acento-claro mb-4 tracking-wider uppercase">
                Servicios de limpieza ecológicos
            </h2>

            <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold text-fondo leading-tight mb-8">
                Limpieza impecable, <span class="text-acento-claro">Huella impecable</span>.
            </h1>

            <p class="text-lg md:text-xl text-fondo opacity-90 max-w-2xl mx-auto mb-10">
                <span class="font-bold">Lican</span> combina la <span class="font-bold">máxima profesionalidad</span> con un compromiso inquebrantable con el planeta. Soluciones de limpieza avanzadas para un futuro más verde.
            </p>

            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <router-link to="/contacto" 
                    class="py-3 px-10 rounded-full text-lg font-bold bg-acento text-fondo shadow-elevado 
                            hover:bg-acento-oscuro transition duration-300 transform hover:scale-105"
                >
                    Solicitar Presupuesto Gratuito
                </router-link>

                <router-link to="/servicios" 
                    class="py-3 px-10 rounded-full text-lg font-bold bg-fondo text-acento border-2 border-acento 
                            hover:bg-acento hover:text-fondo transition duration-300"
                >
                    Ver Todos Nuestros Servicios
                </router-link>
            </div>
        </div>
    </section>
</template>
