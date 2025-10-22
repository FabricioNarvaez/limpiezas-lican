<template>
    <main>
        <ViewHeader :headerProps />

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <ValueProposition />
        </div>

        <div class="bg-acento-claro py-16 md:py-24">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <EcologicalCommitment />
            </div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <TrustFigures />
        </div>
        <CtaSection :ctaProps/>
    </main>
</template>

<script setup>
    import { useHead } from '@unhead/vue';
    import ViewHeader from '@components/viewHeader.vue';
    import ValueProposition from '@components/aboutUs/ValueProposition.vue';
    import EcologicalCommitment from '@components/aboutUs/EcologicalCommitment.vue';
    import TrustFigures from '@components/aboutUs/TrustFigures.vue';
    import CtaSection from '@components/CtaSection.vue'; 

    const headerProps = {
        title: 'Sobre Nosotros',
        subtitle: 'Licán: Limpieza con',
        subtitleSpan: 'Conciencia y Calidad',
        description: 'Aunque <span class="font-bold">Licán</span> acaba de nacer, lo hace con la experiencia y el compromiso personal de nuestro equipo, el cual traslada más de <span class="font-bold">10 años</span> en el sector. <br/><br/>Clientes de confianza nos han seguido, buscando un servicio más directo y responsable.'
    }

    const ctaProps = {
        title: '¿Listo para Contratar la Experiencia de Licán?',
        subtitle: 'Con la trayectoria de nuestro personal, le garantizamos una limpieza superior y sostenible.',
        bgColor: 'bg-acento-claro'
    }

    useHead({
        title: 'Sobre Nosotros - Limpiezas Licán',
        link: [
            { 
                rel: 'canonical', 
                href: 'https://limpiezaslican.es/nosotros' 
            }
        ],
        meta: [
            {
                name: 'description',
                content: 'Conoce a Licán, la empresa de limpieza ecológica en Navarra con un equipo que cuenta con más de 10 años de experiencia. Comprometidos con la calidad y el medio ambiente, ofrecemos servicios personalizados y sostenibles para hogares y empresas.'
            },
            {
                name: 'keywords',
                content: 'sobre nosotros, limpieza ecológica, experiencia en limpieza, limpieza en Navarra, servicios de limpieza sostenible, Licán'
            },
            {
                name: 'author',
                content: 'Licán'
            }
        ]
    });
</script>