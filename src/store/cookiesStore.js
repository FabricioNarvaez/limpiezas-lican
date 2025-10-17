import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { initializeGA4 } from '@utils/analytics';

export const useCookiesStore = defineStore("cookies", ()=>{
    const CONSENT_KEY = 'lican_cookie_consent';
    const acceptedStatus = 'accepted';
    const declinedStatus = 'declined';
    const hasConsent = ref(true);

    const acceptCookies = () => {
        localStorage.setItem(CONSENT_KEY, acceptedStatus);
        hasConsent.value = true;
        initializeGA4();
    };

    const declineCookies = () => {
        localStorage.setItem(CONSENT_KEY, declinedStatus);
        hasConsent.value = true;
    };

    const resetConsent = () => {
        localStorage.removeItem(CONSENT_KEY);
        location.reload();
    };

    onMounted(() => {
        const consentStatus = localStorage.getItem(CONSENT_KEY);
        
        if (consentStatus === acceptedStatus) {
            initializeGA4();
            hasConsent.value = true;
        } else if (consentStatus === declinedStatus) {
            hasConsent.value = true;
        } else {
            hasConsent.value = false;
        }
    });

    return {
        CONSENT_KEY,
        acceptCookies,
        declineCookies,
        resetConsent,
        hasConsent
    }
});