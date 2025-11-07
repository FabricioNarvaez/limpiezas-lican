<template>
    <main>
        <ViewHeader :headerProps />
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2">
                    <ContactForm />
                </div>
                <div class="lg:col-span-1">
                    <ContactInfo />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { useHead } from '@unhead/vue';
    import ViewHeader from '@components/viewHeader.vue';
    import ContactForm from '@components/contact/ContactForm.vue';
    import ContactInfo from '@components/contact/ContactInfo.vue';

    const headerProps = {
        title: 'Hablemos de tu Proyecto',
        subtitle: 'Solicita tu',
        subtitleSpan: 'Presupuesto sin Compromiso',
        description: 'Envíanos tus datos y un especialista de Lican te contactará en menos de 24 horas para un diagnóstico personalizado.'
    }

    useHead({
        title: 'Contacto - Limpiezas Licán',
        link: [
            { 
                rel: 'canonical', 
                href: 'https://www.limpiezaslican.es/contacto' 
            }
        ],
        meta: [
            {
                name: 'description',
                content: '¿Tienes un proyecto de limpieza en mente? Contacta con Limpiezas Licán para solicitar tu presupuesto sin compromiso. Nuestro equipo de expertos te atenderá en menos de 24 horas.'
            },
            {
                name: 'keywords',
                content: 'contacto limpieza, solicitar presupuesto limpieza, limpieza ecológica contacto, Limpiezas Licán, limpieza en Navarra, servicios de limpieza'
            },
        ]
    });
</script>