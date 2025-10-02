import { ref } from 'vue';
import { 
    BuildingOfficeIcon, HomeModernIcon,
    WindowIcon, CogIcon, SunIcon, SwatchIcon, 
    HomeIcon, TruckIcon 
} from '@heroicons/vue/24/outline';

export const allServices = ref([
    {
        id: 'oficinas',
        title: 'Limpieza de Oficinas y Empresas',
        iconComponent: BuildingOfficeIcon,
        path: '/servicios#oficinas',
        descriptionServices: 'Mantenimiento diario o periódico para crear un ambiente de trabajo saludable y profesional. Incluye desinfección de zonas comunes y equipos.',
        descriptionHome: 'Soluciones de limpieza verde adaptadas a entornos corporativos, garantizando un ambiente de trabajo saludable.',
        includes: [
            'Limpieza de despachos y salas de reuniones',
            'Limpieza y desinfección de baños y cocinas',
            'Gestión ecológica de residuos',
        ]
    },
    {
        id: 'comunidades',
        title: 'Comunidades y Espacios Comunes',
        iconComponent: HomeModernIcon,
        path: '/servicios#comunidades',
        descriptionServices: 'Servicios de limpieza enfocados en el bienestar de los residentes, manteniendo portales, escaleras y áreas de ocio impecables.',
        descriptionHome: null,
        includes: [
            'Limpieza de escaleras, ascensores y pasillos',
            'Mantenimiento de garajes y trasteros',
            'Limpieza de cristales y barandillas',
        ]
    },
    {
        id: 'cristales',
        title: 'Limpieza Profesional de Cristales',
        iconComponent: WindowIcon,
        path: '/servicios#cristales',
        descriptionServices: 'Servicio de limpieza y pulido de cristales en altura o a nivel de calle, fachadas acristaladas y escaparates, utilizando herramientas especializadas.',
        descriptionHome: 'Hacemos que sus ventanas, escaparates y fachadas brillen, eliminando manchas persistentes y marcas de agua con seguridad y profesionalidad.',
        includes: [
            'Limpieza de ventanas y escaparates',
            'Limpieza de cristales en altura (con medios auxiliares)',
            'Tratamiento antical y antipolvo para vidrios',
        ]
    },
    {
        id: 'alimentaria',
        title: 'Limpieza y Mantenimiento Industrial Alimentario',
        iconComponent: CogIcon,
        path: '/servicios#alimentaria',
        descriptionServices: 'Servicios de desinfección y saneamiento riguroso en entornos de producción alimentaria, cumpliendo con la normativa APPCC y los más altos estándares de higiene.',
        descriptionHome: null,
        includes: [
            'Limpieza de líneas de producción y maquinaria',
            'Desinfección de salas blancas y áreas sensibles',
            'Protocolos de limpieza validados y certificados',
        ]
    },
    {
        id: 'suelos',
        title: 'Pulido, Abrillantado y Cristalizado de Suelos',
        iconComponent: SwatchIcon,
        path: '/servicios#suelos',
        descriptionServices: 'Restauración profesional de la belleza de sus suelos (mármol, terrazo, piedra) mediante procesos de pulido, abrillantado y protección cristalizada.',
        descriptionHome: 'Recuperamos el brillo original de sus suelos. Técnicas especializadas para pulir, abrillantar y cristalizar mármol, terrazo y piedra.',
        includes: [
            'Pulido y eliminación de arañazos profundos',
            'Abrillantado y sellado de superficies',
            'Cristalizado para protección y acabado espejo',
        ]
    },
    {
        id: 'paneles',
        title: 'Limpieza de Paneles Solares',
        iconComponent: SunIcon,
        path: '/servicios#paneles',
        descriptionServices: 'Servicio especializado para optimizar el rendimiento energético de sus instalaciones fotovoltaicas mediante la eliminación de polvo, polen y suciedad acumulada.',
        descriptionHome: null,
        includes: [
            'Limpieza con agua osmotizada (sin residuos)',
            'Mantenimiento en grandes superficies y tejados',
            'Inspección visual del estado del panel',
        ]
    },
    {
        id: 'fachadas',
        title: 'Limpieza y Mantenimiento de Fachadas',
        iconComponent: HomeIcon,
        path: '/servicios#fachadas',
        descriptionServices: 'Limpieza exterior de edificios y fachadas de cualquier material (piedra, ladrillo, monocapa), eliminando grafitis, musgo y contaminación.',
        descriptionHome: 'Mejore la imagen de su edificio. Limpieza exterior profesional para eliminar grafitis, suciedad y contaminación en todo tipo de materiales de fachada.',
        includes: [
            'Limpieza a presión controlada',
            'Tratamiento anti-grafiti y anti-musgo',
            'Limpieza de piedra y ladrillo visto',
        ]
    },
    {
        id: 'montaje',
        title: 'Montaje y Desmontaje de Mobiliario',
        iconComponent: TruckIcon,
        path: '/servicios#montaje',
        descriptionServices: 'Servicio auxiliar de montaje, desmontaje y recolocación de muebles en oficinas o comunidades, facilitando mudanzas o cambios de distribución.',
        descriptionHome: null,
        includes: [
            'Montaje de mobiliario nuevo y reubicación',
            'Desmontaje para mudanzas internas',
            'Ajuste y anclaje de estanterías y elementos de seguridad',
        ]
    }
]);

export const homeServices = ()=> {
    const servicesFiltered = allServices.value.filter(services => {
        return services.descriptionHome !== null;
    });

    return servicesFiltered;
};