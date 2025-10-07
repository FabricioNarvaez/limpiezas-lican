import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', () => {
    const isOpen = ref(false);

    function toggleNav() {
        isOpen.value = !isOpen.value;
    }

    return { 
        isOpen,
        toggleNav
    };
});