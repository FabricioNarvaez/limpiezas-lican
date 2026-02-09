<template>
    <section class="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-texto-principal text-center mb-12" data-aos="zoom-in">
            Personaliza tu Limpieza: <span class="text-acento">Adaptada a tus Necesidades</span>
        </h2>
        <p class="text-xl text-texto-secundario text-center mb-10 max-w-3xl mx-auto" data-aos="zoom-in">
            Cada vehículo es único, por eso ofrecemos diferentes niveles de servicios que para un resultado perfecto.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.title" class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
                <div class="flex items-center text-acento mb-4" data-aos="zoom-in">
                    <Icon :icon="service.icon" class="w-8 h-8 mr-3" />
                    <h3 class="text-2xl font-bold">{{ service.title }}</h3>
                </div>
                <p class="text-texto-secundario mb-4" data-aos="zoom-in">
                    {{ service.description }}
                </p>
                <ul class="text-texto-principal space-y-2" data-aos="zoom-in">
                    <li v-for="feature in service.features" class="flex items-start">
                        <Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" />
                        <p v-html="feature"></p>
                    </li>
                </ul>
            </div>
        </div>
        <ConditionsAndExtras />
    </section>
</template>

<script setup>
    import ConditionsAndExtras from './ConditionsAndExtras.vue';
    const services = [
        {
            title: 'Licán ESSENTIAL',
            icon: 'mdi:vacuum-cleaner',
            description: 'Diseñado para quienes buscan un mantenimiento impecable sin rastro de suciedad.',
            features: [
                '<b>Exterior:</b> Lavado exterior. Limpieza de llantas con producto específico no ácido. Secado con aire a presión y microfibra técnica para evitar micro-arañazos.',
                '<b>Interior:</b> Aspirado profundo de moqueta, asientos y maletero. Limpieza de salpicadero, consola central y aireadores con pinceles de detallado.',
                '<b>Cristales:</b> Limpieza de cristales con productos específicos para un acabado cristalino.'
            ]
        },
        {
            title: 'Licán SUPREME',
            icon: 'mdi:car-seat-heater',
            description: 'La solución definitiva para devolverle a tu coche el aspecto de "recién salido del concesionario".',
            features: [
                '<b>Todo lo incluido en el nivel ESSENTIAL</b>',
                '<b>Tratamiento de Tapicería:</b> Limpieza profunda de asientos (tela o alcántara) mediante sistema de inyección y extracción, eliminando manchas y olores',
                '<b>Desinfección Total:</b> Tratamiento para eliminar bacterias y neutralizar olores persistentes.',
                '<b>Detallado de Motor:</b> Limpieza segura y acondicionamiento de plásticos del vano motor.',
                '<b>Protección Exterior:</b> Aplicación de sellador cerámico rápido que aporta un brillo extra y repelencia al agua.'
            ]
        },
        {
            title: 'Licán INFINITE',
            icon: 'mdi:spray-bottle',
            description: 'El nivel más alto de cuidado. Protección profunda y recuperación del color original.',
            features: [
                '<b>Todo lo incluido en el nivel SUPREME</b>',
                '<b>Descontaminado de Pintura:</b> Eliminación de partículas férricas y contaminación ambiental mediante Clay Bar (barra de arcilla), dejando la carrocería suave al tacto.',
                '<b>Corrección de Brillo:</b> Pulido fino de un paso para eliminar micro-rayas superficiales y potenciar el reflejo de la pintura.',
                '<b>Cuidado del Cuero:</b> Limpieza y nutrición profunda de asientos de cuero con productos que mantienen su flexibilidad y acabado mate original.',
                '<b>Protección Premium:</b> Sellado de larga duración o cera de alta gama (6-12 meses de protección contra agentes externos y sal de carretera).'
            ]
        },
    ];
</script>