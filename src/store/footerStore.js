import { ref } from "vue";
import { defineStore } from "pinia";

export const useFooterStore = defineStore("footer", () => {
    const legalLinks = [
        { name: 'Aviso Legal', path: '/aviso-legal' },
        { name: 'Política de Privacidad', path: '/politica-privacidad' },
        { name: 'Política de Cookies', path: '/politica-cookies' },
    ];

    const contactInfo = {
        phone: '+34 675 47 60 14',
        email: 'contacto@limpiezaslican.es',
        // address: 'C/ Limpieza, 123 | Ciudad, País',
    };

    return {
        legalLinks,
        contactInfo
    };
});