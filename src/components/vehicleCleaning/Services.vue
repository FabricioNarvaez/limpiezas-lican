<template>
    <section class="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-texto-principal text-center mb-12" data-aos="zoom-in">
            Personaliza tu Limpieza: <span class="text-acento">Adaptada a tus Necesidades</span>
        </h2>
        <p class="text-xl text-texto-secundario text-center mb-10 max-w-3xl mx-auto" data-aos="zoom-in">
            Cada vehículo es único, por eso ofrecemos una gama flexible de servicios que puedes combinar para un resultado perfecto.
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
                        <Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" />{{ feature }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
    const services = [
        {
            title: 'Aspirado Básico / Detallado',
            icon: 'mdi:vacuum-cleaner',
            description: 'Eliminamos polvo, suciedad y residuos del interior de tu vehículo, incluyendo alfombrillas, asientos y maletero. Deja el habitáculo fresco y limpio.',
            features: [
                'Alfombrillas y suelos',
                'Asientos y tapicerías'
            ]
        },
        {
            title: 'Limpieza Profunda Interior',
            icon: 'mdi:car-seat-heater',
            description: 'Vamos más allá: desmontaje parcial de asientos para acceso total, limpieza de conductos de aire y cada rincón. ¡Tu coche como nuevo!',
            features: [
                'Desmontaje de asientos',
                'Conductos de ventilación',
                'Consolas, paneles y puertas'
            ]
        },
        {
            title: 'Tratamientos Especializados',
            icon: 'mdi:spray-bottle',
            description: 'Desde tratamientos de tapicerías y plásticos hasta la desinfección de ozono y eliminación de olores persistentes.',
            features: [
                'Tapicerías y plásticos',
                'Desinfección con Ozono',
                'Eliminación de olores'
            ]
        },
        {
            title: 'Lavado, Pulido y Encerado Exterior',
            icon: 'mdi:car-wash',
            description: 'Devuelve el brillo original a la carrocería de tu coche, eliminando micro-arañazos y protegiéndolo con ceras de alta calidad.',
            features: [
                'Lavado profesional',
                'Pulido profesional',
                'Encerado protector',
                'Sellado de pintura'
            ]
        },
        {
            title: 'Limpieza de Flotas de Empresa',
            icon: 'mdi:truck-fast',
            description: 'Soluciones personalizadas para mantener la imagen profesional de tu flota de vehículos. Eficiencia y resultados garantizados.',
            features: [
                'Planes de mantenimiento',
                'Facturación simplificada'
            ]
        }
    ];
</script>