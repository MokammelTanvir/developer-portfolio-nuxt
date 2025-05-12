<template>
  <div class="min-h-screen bg-background dark:bg-darkBg text-text dark:text-darkText">
    <header class="fixed w-full top-0 bg-white dark:bg-secondary shadow-sm z-50">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <div class="text-2xl font-bold text-primary">
          <NuxtLink to="/" class="hover:text-primary-dark transition">Mokammel<span class="text-vue-dark dark:text-white">Tanvir</span></NuxtLink>
        </div>
        <div class="hidden md:flex space-x-6">
          <NuxtLink to="/#home" class="hover:text-primary transition">Home</NuxtLink>
          <NuxtLink to="/#about" class="hover:text-primary transition">About</NuxtLink>
          <NuxtLink to="/#skills" class="hover:text-primary transition">Skills</NuxtLink>
          <NuxtLink to="/#projects" class="hover:text-primary transition">Projects</NuxtLink>
          <NuxtLink to="/#experience" class="hover:text-primary transition">Experience</NuxtLink>
          <NuxtLink to="/#contact" class="hover:text-primary transition">Contact</NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <!-- Dark mode toggle -->
          <button @click="toggleColorMode" class="p-2.5 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors shadow-sm">
            <!-- Sun icon for dark mode (when in dark mode, show sun to switch to light) -->
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <!-- Moon icon for light mode (when in light mode, show moon to switch to dark) -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-secondary py-4 px-4 shadow-md">
        <div class="flex flex-col space-y-4">
          <NuxtLink @click="mobileMenuOpen = false" to="/#home" class="py-2 hover:text-primary transition">Home</NuxtLink>
          <NuxtLink @click="mobileMenuOpen = false" to="/#about" class="py-2 hover:text-primary transition">About</NuxtLink>
          <NuxtLink @click="mobileMenuOpen = false" to="/#skills" class="py-2 hover:text-primary transition">Skills</NuxtLink>
          <NuxtLink @click="mobileMenuOpen = false" to="/#projects" class="py-2 hover:text-primary transition">Projects</NuxtLink>
          <NuxtLink @click="mobileMenuOpen = false" to="/#experience" class="py-2 hover:text-primary transition">Experience</NuxtLink>
          <NuxtLink @click="mobileMenuOpen = false" to="/#contact" class="py-2 hover:text-primary transition">Contact</NuxtLink>
        </div>
      </div>
    </header>

    <main class="pt-20">
      <slot />
    </main>

    <footer class="text-white py-10" style="background-color: #020617;">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center">
          <p>© 2024 Mokammel Tanvir | All Rights Reserved</p>
          <div class="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/mokammeltanvir" target="_blank" class="hover:text-primary">GitHub</a>
            <a href="https://linkedin.com/in/mokammeltanvir" target="_blank" class="hover:text-primary">LinkedIn</a>
            <a href="https://twitter.com/mokammeltanvir" target="_blank" class="hover:text-primary">Twitter</a>
            <a href="https://facebook.com/mokammeltanvir" target="_blank" class="hover:text-primary">Facebook</a>
          </div>
          <p class="text-sm mt-4 text-gray-300">Built with <a href="https://nuxt.com" class="text-primary hover:underline">Nuxt.js</a> and <a href="https://vuejs.org" class="text-vue-green hover:underline">Vue.js</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useColorMode } from '#imports';

// Mobile menu state
const mobileMenuOpen = ref(false);

// Get color mode from composable
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');

// Function to toggle color mode
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script> 