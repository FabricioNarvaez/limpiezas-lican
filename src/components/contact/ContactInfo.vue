<template>
    <div class="bg-fondo p-8 rounded-xl shadow-lg border border-gray-200" data-aos="zoom-in-left">
        <h3 class="text-2xl font-bold text-texto-principal mb-6 border-b pb-3">
            Detalles de Contacto
        </h3>
        
        <ul class="space-y-6">
            <li class="flex items-start">
                <PhoneIcon class="w-6 h-6 text-acento flex-shrink-0 mt-1" />
                <div class="ml-4">
                    <p class="font-semibold text-lg text-texto-principal">Teléfono</p>
                    <a :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`" class="text-texto-secundario hover:text-acento transition">
                        {{ contactInfo.phone}}
                    </a>
                </div>
            </li>
            <li class="flex items-start">
                <EnvelopeIcon class="w-6 h-6 text-acento flex-shrink-0 mt-1" />
                <div class="ml-4">
                    <p class="font-semibold text-lg text-texto-principal">Email</p>
                    <a :href="`mailto:${contactInfo.email}`" class="text-texto-secundario hover:text-acento transition">
                        {{ contactInfo.email }}
                    </a>
                </div>
            </li>
            <li class="flex flex-col">
                <div class="flex items-start">
                    <MapPinIcon class="w-6 h-6 text-acento flex-shrink-0 mt-1" />
                    <div class="ml-4">
                        <p class="font-semibold text-lg text-texto-principal">Oficina Central</p>
                        <a class="text-texto-secundario hover:text-acento hover:underline transition"
                            :href="contactInfo.addressUrl" target="_blank"
                        >
                            {{ contactInfo.address }}
                        </a>
                    </div>
                </div>
                <MapLocation />
            </li>
            <li class="flex items-start">
                <ClockIcon class="w-6 h-6 text-acento flex-shrink-0 mt-1" />
                <div class="ml-4">
                    <p class="font-semibold text-lg text-texto-principal">Horario Atención Cliente</p>
                    <p class="text-texto-secundario">{{ contactInfo.timetable }}</p>
                    <p class="text-texto-secundario">{{ contactInfo.timetableSaturday }}</p>
                    <p class="text-texto-secundario">{{ contactInfo.timetableSunday }}</p>
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
    import { contactInfo } from '@composables/useContactInfo';
    import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/outline';
    import MapLocation from '@components/contact/MapLocation.vue';
</script>