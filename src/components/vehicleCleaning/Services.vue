<!-- TODO: add animations to the service cards on scroll -->
<template>
    <section class="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-texto-principal text-center mb-12">
            Personaliza tu Limpieza: <span class="text-acento">Adaptada a tus Necesidades</span>
        </h2>
        <p class="text-xl text-texto-secundario text-center mb-10 max-w-3xl mx-auto">
            Cada vehículo es único, por eso ofrecemos una gama flexible de servicios que puedes combinar para un resultado perfecto.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div class="flex items-center text-acento mb-4">
                    <Icon icon="mdi:vacuum-cleaner" class="w-8 h-8 mr-3" />
                    <h3 class="text-2xl font-bold">Aspirado Básico / Detallado</h3>
                </div>
                <p class="text-texto-secundario mb-4">
                    Eliminamos polvo, suciedad y residuos del interior de tu vehículo, incluyendo alfombrillas, asientos y maletero. Deja el habitáculo fresco y limpio.
                </p>
                <ul class="text-texto-principal space-y-2">
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" />Alfombrillas y suelos</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" />Asientos y tapicerías</li>
                </ul>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div class="flex items-center text-acento mb-4">
                    <Icon icon="mdi:car-seat-heater" class="w-8 h-8 mr-3" />
                    <h3 class="text-2xl font-bold">Limpieza Profunda Interior</h3>
                </div>
                <p class="text-texto-secundario mb-4">
                    Vamos más allá: desmontaje parcial de asientos para acceso total, limpieza de conductos de aire y cada rincón. ¡Tu coche como nuevo!
                </p>
                <ul class="text-texto-principal space-y-2">
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Desmontaje de asientos</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Conductos de ventilación</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Consolas, paneles y puertas</li>
                </ul>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div class="flex items-center text-acento mb-4">
                    <Icon icon="mdi:spray-bottle" class="w-8 h-8 mr-3" />
                    <h3 class="text-2xl font-bold">Tratamientos Especializados</h3>
                </div>
                <p class="text-texto-secundario mb-4">
                    Desde tratamientos de tapicerías y plásticos hasta la desinfección de ozono y eliminación de olores persistentes.
                </p>
                <ul class="text-texto-principal space-y-2">
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Tapicerías y plásticos</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Desinfección con Ozono</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Eliminación de olores</li>
                </ul>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div class="flex items-center text-acento mb-4">
                    <Icon icon="mdi:car-wash" class="w-8 h-8 mr-3" />
                    <h3 class="text-2xl font-bold">Lavado, Pulido y Encerado Exterior</h3>
                </div>
                <p class="text-texto-secundario mb-4">
                    Devuelve el brillo original a la carrocería de tu coche, eliminando micro-arañazos y protegiéndolo con ceras de alta calidad.
                </p>
                <ul class="text-texto-principal space-y-2">
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Lavado profesional</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Pulido profesional</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Encerado protector</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Sellado de pintura</li>
                </ul>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div class="flex items-center text-acento mb-4">
                    <Icon icon="mdi:truck-fast" class="w-8 h-8 mr-3" />
                    <h3 class="text-2xl font-bold">Limpieza de Flotas de Empresa</h3>
                </div>
                <p class="text-texto-secundario mb-4">
                    Soluciones personalizadas para mantener la imagen profesional de tu flota de vehículos. Eficiencia y resultados garantizados.
                </p>
                <ul class="text-texto-principal space-y-2">
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Planes de mantenimiento</li>
                    <li class="flex items-start"><Icon icon="mdi:check-circle" class="w-5 h-5 text-acento mr-2 flex-shrink-0" /> Facturación simplificada</li>
                </ul>
            </div>
        </div>
    </section>
</template>