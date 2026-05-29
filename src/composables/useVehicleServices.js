import { ref } from 'vue';

export const vehicleServicesLevels = ref([
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
    ]
);