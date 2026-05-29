<template>
    <div class="mt-16 max-w-5xl mx-auto" data-aos="fade-up">
            <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div class="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 p-6 flex items-center">
                    <Icon icon="mdi:alert-circle" class="w-8 h-8 text-yellow-500 mr-4" />
                    <h3 class="text-2xl font-bold text-texto-principal">Condiciones y Extras</h3>
                </div>

                <div class="px-8 py-2">
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <li class="flex items-center text-lg text-texto-secundario">
                            <span class="w-2 h-2 bg-acento rounded-full mr-4 flex-shrink-0"></span>
                            <span><strong class="text-texto-principal">Berlinas / Compactos:</strong> Precio base.</span>
                        </li>
                        <li class="flex items-center text-lg text-texto-secundario">
                            <span class="w-2 h-2 bg-acento rounded-full mr-4 flex-shrink-0"></span>
                            <span><strong class="text-texto-principal">Suplemento SUV / Monovolumen:</strong> +15€ sobre el precio base.</span>
                        </li>
                        <li class="flex items-center text-lg text-texto-secundario">
                            <span class="w-2 h-2 bg-acento rounded-full mr-4 flex-shrink-0"></span>
                            <span><strong class="text-texto-principal">Suplemento 4x4 / Furgonetas:</strong> +25€ sobre el precio base.</span>
                        </li>
                        <li class="flex items-center text-lg text-texto-secundario">
                            <span class="w-2 h-2 bg-acento rounded-full mr-4 flex-shrink-0"></span>
                            <span><strong class="text-texto-principal">Suciedad extrema / Pelos de mascota:</strong> Valoración previa (desde +20€).</span>
                        </li>
                    </ul>
                    
                    <div class="mt-4 pt-6 border-t border-gray-100 flex items-center justify-center text-texto-secundario italic">
                        <Icon icon="mdi:leaf" class="w-5 h-5 text-acento mr-2" />
                        <p>Todos nuestros servicios utilizan productos biodegradables respetuosos con el medio ambiente.</p>
                    </div>
                </div>
            </div>
        </div>
</template>