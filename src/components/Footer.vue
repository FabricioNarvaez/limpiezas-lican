<template>
    <footer class="bg-acento-oscuro text-fondo border-t-4 border-acento">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                <div>
                    <!-- <router-link to="/" class="text-3xl font-extrabold text-acento-claro">LICAN</router-link> -->
                    <img src="/img/WhiteLogo.png" alt="Logo Lican" class="h-20 w-auto drop-shadow-lg" />
                    <p class="mt-2 text-sm text-gray-300">Servicios de limpieza ecológicos</p>
                </div>

                <div v-if="sitePaths.length">
                    <h3 class="text-lg font-semibold mb-4 text-acento-claro uppercase tracking-wider">Navegación</h3>
                    <ul class="space-y-2">
                        <li v-for="link in sitePaths" :key="link.name">
                            <router-link :to="link.path" class="text-gray-300 hover:text-acento transition duration-150 text-sm">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4 text-acento-claro uppercase tracking-wider">Contacto</h3>
                    <ul class="space-y-3">
                        <li v-if="footerStore.contactInfo.phone" class="flex items-center">
                            <PhoneIcon class="w-5 h-5 mr-3 text-acento" />
                            <a :href="`tel:${footerStore.contactInfo.phone.replace(/\s/g, '')}`" class="text-gray-300 hover:text-acento transition duration-150 text-sm">
                                {{ footerStore.contactInfo.phone }}
                            </a>
                        </li>
                        <li v-if="footerStore.contactInfo.email" class="flex items-center">
                            <EnvelopeIcon class="w-5 h-5 mr-3 text-acento" />
                            <a :href="`mailto:${footerStore.contactInfo.email}`" class="text-gray-300 hover:text-acento transition duration-150 text-sm">
                                {{ footerStore.contactInfo.email }}
                            </a>
                        </li>
                        <li v-if="footerStore.contactInfo.address" class="flex items-start">
                            <MapPinIcon class="w-5 h-5 mr-3 text-acento flex-shrink-0 mt-0.5" />
                            <span class="text-gray-300 text-sm">{{ footerStore.contactInfo.address }}</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4 text-acento-claro uppercase tracking-wider">Información Legal</h3>
                    <ul class="space-y-2">
                        <li v-for="link in legalPaths" :key="link.name">
                            <router-link :to="link.path" class="text-gray-300 hover:text-acento transition duration-150 text-sm">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>

                    <div class="mt-6">
                        <h3 class="text-lg font-semibold mb-3 text-acento-claro uppercase tracking-wider">Síguenos</h3>
                        <div class="flex space-x-4">
                            <a href="#" target="_blank" aria-label="LinkedIn" class="text-gray-300 hover:text-acento transition duration-150">
                                <Icon icon="uil:linkedin" style="font-size: 24px;" />
                            </a>
                            <a href="#" target="_blank" aria-label="Instagram" class="text-gray-300 hover:text-acento transition duration-150">
                                <Icon icon="formkit:instagram" style="font-size: 24px;"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-12 pt-8 border-t border-gray-700 text-center">
                <p class="text-sm text-gray-400">
                    &copy; {{ new Date().getFullYear() }} Lican: Servicios de limpieza ecológicos. Todos los derechos reservados.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { useFooterStore } from '@store/footerStore';
    import { legalPaths } from '@composables/useSitePaths';
    import { sitePaths } from '@composables/useSitePaths.js';
    import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline';

    const footerStore = useFooterStore();
</script>