<template>
    <div class="bg-fondo p-8 rounded-xl shadow-lg border border-gray-200">
        <h3 class="text-2xl font-bold text-texto-principal mb-6 border-b pb-3">
            Detalles de Contacto
        </h3>
        
        <ul class="space-y-6">
            <li class="flex items-start">
                <PhoneIcon class="w-6 h-6 text-acento flex-shrink-0 mt-1" />
                <div class="ml-4">
                    <p class="font-semibold text-lg text-texto-principal">Teléfono</p>
                    <a href="tel:+34675476014" class="text-texto-secundario hover:text-acento transition">
                        +34 675 47 60 14
                    </a>
                </div>
            </li>
            <li class="flex items-start">
                <EnvelopeIcon class="w-6 h-6 text-acento flex-shrink-0 mt-1" />
                <div class="ml-4">
                    <p class="font-semibold text-lg text-texto-principal">Email</p>
                    <a href="mailto:contacto@limpiezaslican.es" class="text-texto-secundario hover:text-acento transition">
                        contacto@limpiezaslican.es
                    </a>
                </div>
            </li>
            <!-- <li class="flex items-start">
                <MapPinIcon class="w-6 h-6 text-acento flex-shrink-0 mt-1" />
                <div class="ml-4">
                    <p class="font-semibold text-lg text-texto-principal">Oficina Central</p>
                    <p class="text-texto-secundario">C/ Limpieza, 123 | Ciudad, País</p>
                </div>
            </li> -->
            <li class="flex items-start">
                <ClockIcon class="w-6 h-6 text-acento flex-shrink-0 mt-1" />
                <div class="ml-4">
                    <p class="font-semibold text-lg text-texto-principal">Horario</p>
                    <p class="text-texto-secundario">Lunes a Viernes: 06:00 - 22:00</p>
                    <p class="text-texto-secundario">Sabado y Domingo: 08:00 - 18:00</p>
                </div>
            </li>
        </ul>
        
        <!-- <div class="mt-8">
            <h3 class="font-bold text-texto-principal mb-3">Encuéntranos</h3>
            <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-texto-secundario">
                [Insertar Google Maps]
            </div>
        </div> -->
    </div>
</template>

<script setup>
    import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/outline';
</script>