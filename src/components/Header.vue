<template>
  <header class="sticky top-0 z-50 bg-fondo shadow-sutil">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        
        <router-link to="/" class="flex-shrink-0 flex items-center">
            <img src="/img/LicanLogo2.png" alt="Logo Lican" class="h-40 w-auto drop-shadow-lg" />
            <span class="ml-3 text-xs text-texto-secundario tracking-widest uppercase hidden md:inline">
                Servicios de limpieza ecológicos
            </span>
        </router-link>

        <nav class="hidden md:flex md:space-x-8 items-center">
          <router-link 
            v-for="link in navStore.links" 
            :key="link.name" 
            :to="link.href"
            class="text-texto-secundario hover:text-acento-oscuro transition duration-150 ease-in-out font-medium"
          >
            {{ link.name }}
          </router-link>
          
          <router-link 
            to="/contacto" 
            class="ml-4 py-2 px-6 rounded-full bg-acento text-fondo font-bold hover:bg-acento-oscuro transition duration-150 ease-in-out shadow-md"
          >
            Presupuesto
          </router-link>
        </nav>
        
        <div class="md:hidden flex items-center">
          <button @click="navStore.toggleNav()" class="inline-flex items-center justify-center p-2 rounded-md text-texto-secundario hover:text-acento-oscuro focus:outline-none focus:ring-2 focus:ring-inset focus:ring-acento">
            <svg v-if="!navStore.isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>
    
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="navStore.isOpen" class="md:hidden absolute w-full bg-fondo shadow-elevado pb-4 transition transform origin-top">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <router-link 
            v-for="link in navStore.links" 
            :key="link.name" 
            :to="link.href"
            @click="navStore.toggleNav()"
            class="block px-3 py-2 rounded-md text-base font-medium text-texto-principal hover:bg-acento-claro hover:text-fondo w-full text-center"
          >
            {{ link.name }}
          </router-link>
          
          <router-link 
            to="/contacto" 
            @click="navStore.toggleNav()"
            class="mt-4 w-4/5 py-3 px-6 rounded-lg bg-acento text-fondo font-bold text-center hover:bg-acento-oscuro transition duration-150 ease-in-out"
          >
            Presupuesto
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
    import { useNavStore } from '@store/navStore';
    const navStore = useNavStore();

</script>