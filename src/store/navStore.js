import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', () => {
    const isOpen = ref(false);
    const navLinks = ref([
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/servicios' },
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Contacto', href: '/contacto' }
    ])

    function toggle() {
        isOpen.value = !isOpen.value;
    }


    return { 
        isOpen,
        navLinks,
        toggle
    };
});