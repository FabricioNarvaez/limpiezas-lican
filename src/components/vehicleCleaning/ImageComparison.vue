<template>
    <section class="py-16 bg-fondo-claro relative overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-extrabold text-texto-principal text-center mb-12" data-aos="fade-up">
                ¡La Transformación Habla Por Sí Misma!
            </h2>
            <p class="text-xl text-texto-secundario text-center mb-10 max-w-3xl mx-auto" data-aos="fade-up">
                Descubre el antes y el después de nuestros servicios de limpieza profesional. Desliza para ver la magia.
            </p>
            <div class="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative" data-aos="fade-up">
                <ImgComparisonSlider class="w-full h-auto max-h-[700px] object-cover overflow-hidden">
                    <div slot="first" class="relative"> 
                        <img class="w-full h-auto" src="/img/Antes.jpeg" alt="Interior de vehículo sucio antes de la limpieza" />
                        <div class="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm font-semibold z-10 pointer-events-none">
                            ANTES
                        </div>
                    </div>
                    
                    <div slot="second" class="relative"> 
                        <img class="w-full h-auto" src="/img/Después.jpeg" alt="Interior de vehículo impecable después de la limpieza" />
                        <div class="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm font-semibold z-8 pointer-events-none">
                            DESPUÉS
                        </div>
                    </div>
                </ImgComparisonSlider>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ImgComparisonSlider } from '@img-comparison-slider/vue';
</script>