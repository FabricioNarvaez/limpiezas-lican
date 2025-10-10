import { ref } from 'vue';
import { 
    BuildingOfficeIcon, HomeModernIcon,
    CogIcon, SunIcon, SwatchIcon, 
    HomeIcon, TruckIcon 
} from '@heroicons/vue/24/outline';

import imgPanelesSolares from '@images/services/1.jpg'; 
import imgCuartoMaquinas from '@images/services/2.jpg'; 
import imgTechoSucioLimpio from '@images/services/4.jpg'; 
import imgTuberiasAntesDespues from '@images/services/8.jpg'; 

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
        ],
        image: imgCuartoMaquinas,
        alt: 'Área técnica y cuarto de máquinas industrial mantenido impecable por Lican.',
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
        ],
        image: null,
        alt: null,
    },
    {
        id: 'industrial-tecnico',
        title: 'Limpieza Industrial, Técnica y Post-Obra',
        iconComponent: CogIcon,
        path: '/servicios#industrial-tecnico',
        descriptionServices: 'Servicios de saneamiento riguroso en entornos industriales, post-obra y áreas técnicas, cumpliendo con la normativa. Incluye limpieza en altura de estructuras, conductos y maquinaria.',
        descriptionHome: 'Especialistas en la suciedad más difícil: limpieza de techos, tuberías, maquinaria industrial y eliminación de restos de obra.',
        includes: [
            'Limpieza de techos y estructuras en altura',
            'Desengrase de maquinaria y líneas de producción',
            'Eliminación de restos de obra y cemento',
            'Protocolos de limpieza validados y certificados',
        ],
        image: imgTuberiasAntesDespues,
        alt: 'Contraste en la limpieza profunda de tuberías industriales antes y después.',
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
        ],
        image: null,
        alt: null,
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
        ],
        image: imgPanelesSolares,
        alt: 'Limpieza ecológica de paneles solares en un tejado industrial con agua osmotizada.',
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
        ],
        image: imgTechoSucioLimpio,
        alt: 'Limpieza de cubiertas y fachadas con contraste antes y después.',
    },
    {
        id: 'montaje',
        title: 'Montaje y Desmontaje de Mobiliario (Servicio Auxiliar)',
        iconComponent: TruckIcon,
        path: '/servicios#montaje',
        descriptionServices: 'Servicio auxiliar de montaje, desmontaje y recolocación de muebles en oficinas o comunidades, facilitando mudanzas o cambios de distribución.',
        descriptionHome: null,
        includes: [
            'Montaje de mobiliario nuevo y reubicación',
            'Desmontaje para mudanzas internas',
            'Ajuste y anclaje de estanterías y elementos de seguridad',
        ],
        image: null,
        alt: null,
    }
]);

export const homeServices = ()=> {
    const servicesFiltered = allServices.value.filter(services => {
        return services.descriptionHome !== null;
    });

    return servicesFiltered;
};