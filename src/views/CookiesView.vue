<template>
    <LegalContent title="Política de Cookies">
        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">1. ¿Qué son las Cookies?</h2>
        <p>Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que el sitio web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p>

        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">2. Tipos de Cookies Utilizadas por Licán</h2>
        
        <p>Actualmente, el sitio web <span class="font-bold">{{ contactInfo.website}}</span> NO utiliza cookies de terceros para análisis, publicidad o seguimiento.</p>

        <h3 class="text-xl font-semibold text-texto-principal mt-4 mb-2">2.1. Cookies Técnicas y Estrictamente Necesarias</h3>
        <p>Este sitio web utiliza únicamente cookies propias y técnicas, que son estrictamente necesarias para el correcto funcionamiento del sitio, tales como:</p>
        <ul class="list-disc list-inside ml-4 space-y-2">
            <li>Cookies de <span class="font-bold">sesión</span>: Necesarias para garantizar que el contenido de la web se carga eficazmente (propias del entorno de Vue/Vite).</li>
            <li><span class="font-bold">Almacenamiento local (localStorage) de FormKit</span>: Utilizado para gestionar el estado temporal de los formularios, permitiendo la reactividad y validación sin necesidad de cookies de seguimiento.</li>
        </ul>
        <p>Estas cookies no recogen información personal y no requieren consentimiento explícito del usuario.</p>

        <h3 class="text-xl font-semibold text-texto-principal mt-4 mb-2">2.2. Ausencia de Cookies de Terceros</h3>
        <p>Licán NO utiliza actualmente:</p>
        <ul class="list-disc list-inside ml-4 space-y-2">
            <li>Cookies de <span class="font-bold">analítica</span> (Google Analytics, etc.).</li>
            <li>Cookies de <span class="font-bold">publicidad</span> o <span class="font-bold">redes sociales</span> (Facebook, LinkedIn, etc.).</li>
        </ul>
        <p class="font-bold text-acento-oscuro mt-4">Si en el futuro se implementan servicios de terceros que usen cookies (por ejemplo, Google Maps o Analytics), se notificará a través de un aviso o banner en la web y se requerirá su consentimiento previo.</p>

        <h2 class="text-2xl font-bold text-texto-principal mt-6 mb-3">3. Cómo Gestionar las Cookies</h2>
        <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador (Chrome, Firefox, Safari, Edge, etc.).</p>

        <p class="pt-4 text-sm text-gray-500">Última actualización: Octubre de 2025</p>

    </LegalContent>
</template>

<script setup>
    import { contactInfo } from '@composables/useContactInfo';
    import LegalContent from '@components/legal/LegalContent.vue';
</script>