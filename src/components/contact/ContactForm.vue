<template>
    <div data-aos="zoom-in-right">
        <h2 class="text-3xl font-bold text-texto-principal mb-6 border-b pb-3">
            Formulario de Contacto Rápido
        </h2>
        
        <div v-if="formSubmitted">
            <div class="p-6 bg-acento-claro border-l-4 border-acento rounded-md text-texto-principal">
                <p class="font-bold text-lg mb-2">¡Gracias por contactar a Lican!</p>
                <p>Hemos recibido tu solicitud. Un experto te contactará muy pronto para coordinar tu presupuesto.</p>
            </div>
            <div class="text-center mt-10">
                <router-link 
                    to="/"
                    class="py-3 px-10 rounded-full mr-auto ml-auto w-fit block text-lg font-bold bg-acento text-fondo shadow-elevado 
                            hover:bg-acento-oscuro transition duration-300 transform hover:scale-105"
                >
                    Volver al Inicio
                </router-link>
            </div>
        </div>

        <div v-else-if="formSubmitted === false">
            <div class="p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-md text-yellow-700 mb-6">
                <p class="font-bold text-lg mb-2">¡Vaya! Algo salió mal.</p>
                <p>Por favor, inténtalo de nuevo más tarde o contáctanos directamente a <a href="mailto:contacto@limpiezaslican.es" class="underline font-semibold">contacto@limpiezaslican.es</a>.</p>
            </div>
        </div>

        <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
            v-if="!formSubmitted"
        >
            <template #message></template>

            <template #default="{ value }">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <FormKit
                        type="text"
                        name="nombre"
                        label="Nombre completo *"
                        placeholder="Ej. Juan Pérez"
                        validation="required"
                        :validation-messages="{ required: 'Su nombre es obligatorio.' }"
                    />
                    <FormKit
                        type="email"
                        name="email"
                        label="Email de contacto *"
                        placeholder="ejemplo@empresa.com"
                        validation="required|email"
                        :validation-messages="{ required: 'El email es obligatorio.', email: 'Introduce un email válido.' }"
                    />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <FormKit
                        type="text"
                        name="telefono"
                        label="Teléfono *"
                        placeholder="Ej. +34 600 123 456"
                        validation="required|number"
                        :validation-messages="{ required: 'Necesitamos un teléfono.', number: 'Solo números.' }"
                    />
                    <FormKit
                        type="select"
                        name="servicio_interes"
                        label="Servicio de interés *"
                        placeholder="Selecciona una opción..."
                        validation="required"
                        :options="serviceOptions"
                        :validation-messages="{ required: '¿Qué tipo de servicio va a necesitar?' }"
                    />
                </div>

                <div v-if="value.servicio_interes === 'vehiculos'" class="mb-6">
                    <FormKit
                        type="select"
                        name="nivel_limpieza"
                        label="Nivel de limpieza deseado *"
                        placeholder="Selecciona un nivel..."
                        validation="required"
                        :options="cleaningLevelOptions"
                        :validation-messages="{ required: 'Por favor, selecciona un nivel o indica que no lo tienes claro.' }"
                    />
                </div>
                
                <FormKit
                    type="textarea"
                    name="mensaje"
                    label="Detalla tu necesidad (escriba al menos 30 caracteres)*"
                    placeholder="Indícanos más detalles..."
                    rows="5"
                    validation="required|length:30"
                    :validation-messages="{ required: 'Detalle lo máximo posible su necesidad.', length: 'Por favor, escriba al menos 30 caracteres.' }"
                />

                <div class="mb-6 p-4 rounded-xl border">
                    <FormKit
                        type="checkbox"
                        name="quiere_cita"
                        label="¿Quieres concertar una cita?"
                    />

                    <div v-if="value.quiere_cita" class="mt-4">
                        <FormKit
                            type="datetime-local"
                            name="fecha_cita"
                            label="Selecciona fecha y hora para tu cita *"
                            validation="required|horarioComercial"
                            :validation-rules="{ horarioComercial }"
                            :validation-messages="{ 
                                required: 'Debes elegir una fecha.',
                                horarioComercial: 'Fuera de horario (L-V: 9-20h, S: 8-14h). Domingos cerrado.' 
                            }"
                        />
                    </div>
                </div>

                <FormKit
                    type="checkbox"
                    name="acepta_privacidad"
                    validation="accepted"
                    :validation-messages="{ accepted: 'Es necesario aceptar la política de privacidad.' }"
                >
                    <template #label>
                        <p>
                            Acepto la <router-link to="/legal/politica-privacidad" class="text-acento font-semibold underline" target="_blank">Política de Privacidad</router-link>.
                        </p>
                    </template>
                </FormKit>

                <p class="text-sm text-blue-700 font-semibold mb-6 border-l-4 border-blue-500 px-4 py-1 bg-blue-50 w-fit">
                    Todos los campos con * son obligatorios
                </p>
                
                <FormKit type="submit" label="Solicitar Presupuesto" />
            </template>
        </FormKit>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { allServices } from '@composables/useServices';

const formSubmitted = ref(null);
const FORM_URL = import.meta.env.VITE_FORM_URL || '';

const serviceOptions = allServices.value.map(s => ({
    label: s.title,
    value: s.id
}));

const cleaningLevelOptions = computed(() => {
    const vehiculoService = allServices.value.find(s => s.id === 'vehiculos');
    if (!vehiculoService) return [];
    
    const levels = vehiculoService.cleaningLevels.map(level => ({ label: level, value: level }));
    levels.push({ label: 'No lo tengo claro / Necesito asesoramiento', value: 'no_decidido' });
    return levels;
});

const horarioComercial = (node) => {
    if (!node.value) return true;
    const date = new Date(node.value);
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const time = hour + (minutes / 60);

    if (day === 0) return false;
    if (day === 6) return time >= 8 && time <= 14;
    return time >= 9 && time <= 20;
};

const handleSubmit = async (formData, node) => {
    try {
        const response = await fetch(FORM_URL, { 
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            formSubmitted.value = true;
            node.reset();
        } else {
            formSubmitted.value = false;
        }
    } catch (e) {
        formSubmitted.value = false;
        };
    }
</script>

<style scoped>
    :deep(.formkit-input[type="submit"]) {
        @apply bg-acento text-fondo font-bold py-3 px-8 rounded-full shadow-elevado transition duration-300 hover:bg-acento-oscuro;
    }
    :deep(.formkit-input[type="submit"]:hover) {
        @apply transform scale-105;
    }

    :deep(.formkit-input) {
        @apply border-gray-300 focus:border-acento focus:ring-acento rounded-lg px-4 py-3;
    }
    :deep(.formkit-label) {
        @apply text-texto-principal font-semibold mb-1;
    }
    :deep(.formkit-message) {
        @apply text-red-600 mt-1 text-sm;
    }
</style>