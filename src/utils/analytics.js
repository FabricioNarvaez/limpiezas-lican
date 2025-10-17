const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initializeGA4() {
    if (typeof window.gtag === 'function') {
        gtag('config', GA_MEASUREMENT_ID);
    }
}