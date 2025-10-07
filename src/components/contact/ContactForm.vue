<template>
    <h2 class="text-3xl font-bold text-texto-principal mb-6 border-b pb-3">
        Formulario de Contacto Rápido
    </h2>
    
    <div v-if="formSubmitted">
        <div v-if="formSubmitted" class="p-6 bg-acento-claro border-l-4 border-acento rounded-md text-texto-principal">
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

    <FormKit
        type="form"
        @submit="submitHandler"
        submit-label="Solicitar Presupuesto"
        :actions="false"
        v-if="!formSubmitted"
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <FormKit
                type="text"
                name="nombre"
                label="Nombre completo"
                placeholder="Ej. Juan Pérez"
                validation="required"
                :validation-messages="{ required: 'Su nombre es obligatorio.' }"
            />
            <FormKit
                type="email"
                name="email"
                label="Email de contacto"
                placeholder="ejemplo@empresa.com"
                validation="required|email"
                :validation-messages="{ required: 'El email es obligatorio.', email: 'Introduce un email válido.' }"
            />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
             <FormKit
                type="text"
                name="telefono"
                label="Teléfono"
                placeholder="Ej. +34 600 123 456"
                validation="required|number"
                :validation-messages="{ required: 'Necesitamos un teléfono.', number: 'Solo números.' }"
            />
            <FormKit
                type="select"
                name="servicio_interes"
                label="Servicio de interés principal"
                placeholder="Selecciona una opción..."
                validation="required"
                :options="serviceOptions"
                :validation-messages="{ required: '¿Qué tipo de servicio va a necesitar?' }"
            />
        </div>
        
        <FormKit
            type="textarea"
            name="mensaje"
            label="Detalla tu necesidad (m2, frecuencia, etc.)"
            placeholder="Necesito limpieza semanal para una oficina de 200m²..."
            rows="5"
            validation="required|length:10"
            :validation-messages="{ required: 'Detalle lo máximo posible su necesidad.' }"
        />

        <!-- <FormKit
            type="checkbox"
            name="acepta_privacidad"
            label="Acepto la Política de Privacidad."
            validation="accepted"
            validation-visibility="live"
        /> -->
        
        <FormKit type="submit" label="Solicitar Presupuesto" />
    </FormKit>
</template>

<script setup>
    import { ref } from 'vue';
    import { allServices } from '@composables/useServices';

    const serviceOptions = allServices.value.map(s => ({
        label: s.title,
        value: s.id
    }));

    const formSubmitted = ref(false);

    const submitHandler = async (formData) => {
        // TODO: Enviar formulario a backend o servicio de email
        console.log("Enviando datos:", formData);
        formSubmitted.value = true;
    };
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