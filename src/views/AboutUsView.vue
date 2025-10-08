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

        <!-- <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <TrustFigures />
        </div> -->
    </main>
</template>

<script setup>
    import ViewHeader from '@components/viewHeader.vue';
    import ValueProposition from '@components/aboutUs/ValueProposition.vue';
    import EcologicalCommitment from '@/components/aboutUs/EcologicalCommitment.vue';
// import TrustFigures from '@/components/TrustFigures.vue';

    const headerProps = {
        title: 'Sobre Nosotros',
        subtitle: 'Lican: Limpieza con',
        subtitleSpan: 'Conciencia y Calidad',
        description: 'Aunque <span class="font-bold">Lican</span> acaba de nacer, lo hace con la experiencia y el compromiso personal de nuestro equipo, el cual traslada más de <span class="font-bold">10 años</span> en el sector. <br/><br/>Clientes de confianza nos han seguido, buscando un servicio más directo y responsable.'
    }
</script>