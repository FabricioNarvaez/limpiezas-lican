<template>
    <LegalContent title="Política de Privacidad">
        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">1. Identidad del Responsable</h2>
        <p>El responsable del tratamiento de los datos personales recogidos en este sitio web es <span class="font-bold">{{ contactInfo.owner }}</span> (en adelante, "Licán"), con CIF <span class="font-bold">{{ contactInfo.cif }}</span> y domicilio en <span class="font-bold">{{ contactInfo.address }}</span>.</p>
        <p>Contacto del responsable vía email: <a :href="`mailto:${contactInfo.email}`" class="text-acento hover:underline" target="_blank">{{ contactInfo.email }}</a>.</p>

        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">2. Finalidad del Tratamiento</h2>
        <p>Los datos personales que se recogen a través del formulario de contacto serán tratados con la única finalidad de:</p>
        <ul class="list-disc list-inside ml-4 space-y-2">
            <li>Gestionar la solicitud de información o presupuesto realizada por el usuario.</li>
            <li>Enviar comunicaciones comerciales relativas a los servicios de Licán, solo si el usuario ha dado su <span class="font-bold">consentimiento explícito</span> (a través de la casilla de aceptación en el formulario).</li>
        </ul>
        <p>Los datos se conservarán mientras exista una relación contractual o comercial, o hasta que el interesado solicite su supresión enviando un correo electrónico a <a :href="`mailto:${contactInfo.email}`" class="text-acento hover:underline" target="_blank">{{ contactInfo.email }}</a>.</p>

        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">3. Legitimación</h2>
        <p>La base legal para el tratamiento de sus datos es el <span class="font-bold">consentimiento</span> del interesado, manifestado al rellenar y enviar el formulario de contacto y al aceptar la presente política.</p>

        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">4. Derechos del Interesado</h2>
        <p>Usted tiene derecho a acceder a sus datos personales, solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Puede ejercer estos derechos enviando un email a <a :href="`mailto:${contactInfo.email}`" class="text-acento hover:underline" target="_blank">{{ contactInfo.email }}</a>.</p>
        
        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">5. Comunicación de Datos</h2>
        <p>Sus datos <span class="font-bold">no serán cedidos a terceros</span>, salvo por obligación legal. No se realizarán transferencias internacionales de datos.</p>
        
        <p class="pt-4 text-sm text-gray-500">Última actualización: Octubre de 2025</p>
    </LegalContent>
</template>

<script setup>
    import { contactInfo } from '@composables/useContactInfo';
    import LegalContent from '@components/legal/LegalContent.vue';
</script>