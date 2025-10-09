<template>
    <LegalContent title="Aviso Legal">
        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">1. Datos de Identificación del Titular</h2>
        <p>En cumplimiento con el deber de información recogido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), se informa de lo siguiente:</p>
        <ul class="list-none space-y-2 ml-4">
            <li><span class="font-bold">Titular de la Web:</span> {{ ownerName }} (operando bajo el nombre comercial <span class="font-bold">Licán Servicios de limpieza ecológica</span>)</li>
            <li><span class="font-bold">NIF/DNI:</span> {{ cif }}</li>
            <li><span class="font-bold">Domicilio a efectos de notificación:</span> {{ direccion }}</li>
            <li><span class="font-bold">Correo Electrónico:</span> <a :href="`mailto:${email}`" class="text-acento hover:underline">{{ email }}</a></li>
            </ul>
        <p class="mt-4">Actualmente, <span class="font-bold">Licán Servicios de limpieza ecológica</span> opera como una actividad de autónomo en proceso de alta en la Seguridad Social. La información aquí reflejada corresponde a la persona física titular de dicha actividad.</p>

        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">2. Objeto</h2>
        <p>El presente Aviso Legal regula el acceso y la utilización del sitio web <span class="font-bold">{{ website }}</span> (en adelante, el "Sitio Web") propiedad de la persona física titular de Licán.</p>
        <p>La utilización del Sitio Web atribuye la condición de Usuario e implica la aceptación de las condiciones incluidas en este Aviso Legal.</p>

        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">3. Propiedad Intelectual e Industrial</h2>
        <p>Licán (y su titular) es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (imágenes, sonido, audio, vídeo, textos, marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).</p>
        <p>Queda expresamente prohibida la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de este Sitio Web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Licán.</p>

        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">4. Exclusión de Garantías y Responsabilidad</h2>
        <p>Licán no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos.</p>
        
        <p class="pt-4 text-sm text-gray-500">Última actualización: Octubre de 2025</p>

    </LegalContent>
</template>

<script setup>
    import LegalContent from '@components/legal/LegalContent.vue';

    const ownerName = 'Ramón Ramiro Chávez Orozco';
    const cif = '73617556F';
    const email = 'contacto@limpiezaslican.es';
    const direccion = 'Paseo Anelier 6, 31014 Pamplona, España';
    const website = 'www.limpiezaslican.com'; 
</script>