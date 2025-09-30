<template>
    <section class="py-16 md:py-24 bg-fondo">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
            <h2 class="text-3xl md:text-4xl font-extrabold text-texto-principal mb-4">
                Lo que Dicen Nuestros <span class="text-acento">Clientes</span>
            </h2>
            <p class="text-lg text-texto-secundario max-w-3xl mx-auto mb-12">
                La satisfacción y la confianza de quienes nos eligen son nuestro mejor aval.
            </p>

            <div class="relative max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-elevado">
                <transition 
                    name="fade" 
                    mode="out-in"
                    enter-active-class="transition-opacity duration-500 ease-out"
                    leave-active-class="transition-opacity duration-300 ease-in"
                    enter-from-class="opacity-0"
                    leave-to-class="opacity-0"
                >
                    <div :key="testimonials[currentIndex].id">
                        <p class="text-xl md:text-2xl italic text-texto-principal mb-6">
                            "{{ testimonials[currentIndex].quote }}"
                        </p>
                        <p class="text-lg font-bold text-acento mb-1">
                            {{ testimonials[currentIndex].author }}
                        </p>
                        <p class="text-texto-secundario text-base">
                            {{ testimonials[currentIndex].position }}
                        </p>
                    </div>
                </transition>

                <button @click="prevTestimonial" aria-label="Testimonio anterior"
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-acento text-fondo hover:bg-acento-oscuro transition duration-200 focus:outline-none focus:ring-2 focus:ring-acento"
                >
                    <ChevronLeftIcon class="w-6 h-6" />
                </button>
                <button @click="nextTestimonial" aria-label="Siguiente testimonio"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-acento text-fondo hover:bg-acento-oscuro transition duration-200 focus:outline-none focus:ring-2 focus:ring-acento"
                >
                    <ChevronRightIcon class="w-6 h-6" />
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

    const testimonials = ref([
        {
            id: 1,
            quote: "Desde que Lican se encarga de la limpieza de nuestras oficinas, el ambiente es más fresco y nuestros empleados notan la diferencia de los productos ecológicos. ¡Un servicio excelente y responsable!",
            author: "María Pérez",
            position: "Directora de Operaciones, EcoTech Solutions"
        },
        {
            id: 2,
            quote: "Necesitábamos una limpieza a fondo después de una reforma y Lican superó todas nuestras expectativas. Profesionales, rápidos y con un resultado impecable. ¡Recomendadísimos!",
            author: "Juan García",
            position: "Gerente de Construcciones Modernas"
        },
        {
            id: 3,
            quote: "La limpieza de nuestra comunidad siempre ha sido un reto, pero con Lican, la gestión es sencilla y el resultado constante. El compromiso ecológico es un plus que valoramos mucho.",
            author: "Ana López",
            position: "Presidenta de la Comunidad 'Los Robles'"
        },
        {
            id: 4,
            quote: "Confío en Lican para la limpieza de mi hogar. Son discretos, eficientes y sé que usan productos seguros para mi familia y mis mascotas. La tranquilidad no tiene precio.",
            author: "Carlos Ruiz",
            position: "Cliente particular"
        }
    ]);

    const currentIndex = ref(0);

    const nextTestimonial = () => {
        currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
    };

    const prevTestimonial = () => {
        currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
    };
</script>