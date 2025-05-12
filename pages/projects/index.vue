<template>
  <section class="py-20">
    <div class="container mx-auto px-4 max-w-6xl">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-4">
        All <span class="text-primary">Projects</span>
      </h1>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Browse through my complete portfolio of projects across various technologies and domains.
      </p>
      
      <!-- Project Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category" 
          @click="setFilter(category)"
          :class="[
            'px-4 py-2 rounded-md transition',
            activeFilter === category ? 'bg-primary text-white' : 'bg-white dark:bg-secondary/20 hover:bg-primary/20 hover:text-primary dark:hover:bg-primary/20'
          ]"
        >
          {{ category }}
        </button>
      </div>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
      </div>
      
      <!-- Projects Grid -->
      <div v-else-if="displayProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in displayProjects" 
          :key="index" 
          class="group animate-fade-in"
        >
          <div class="bg-background dark:bg-secondary/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <!-- Project Image -->
            <div class="h-52 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 group-hover:scale-105 transition duration-300">
                {{ project.title }} Screenshot
              </div>
            </div>
            
            <!-- Project Tags -->
            <div class="px-4 pt-4 flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {{ tag }}
              </span>
            </div>
            
            <!-- Project Info -->
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2 group-hover:text-primary transition">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{{ project.description }}</p>
              
              <!-- Project Links -->
              <div class="flex gap-3">
                <a v-if="project.demo" :href="project.demo" target="_blank" class="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  <span>Live Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a v-if="project.code" :href="project.code" target="_blank" class="text-secondary dark:text-gray-300 hover:underline text-sm font-medium flex items-center gap-1">
                  <span>Source Code</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- No Projects Message -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
      </div>
      
      <!-- Back to Home -->
      <div class="text-center mt-12">
        <NuxtLink to="/" class="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition">
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Meta tags for the page
useHead({
  title: 'All Projects - Mokammel Tanvir',
  meta: [
    { name: 'description', content: 'Browse through all projects by Mokammel Tanvir, a Full Stack Web Developer specializing in Vue.js, Nuxt, and Laravel.' }
  ]
});

// Loading state
const loading = ref(true);

// Directly define all the projects data here to avoid any state issues
const allProjects = ref([
  {
    title: 'TechShop Pro',
    description: 'Modern e-commerce platform with advanced inventory management, customer analytics, and seamless payment integration.',
    tags: ['WordPress', 'E-Commerce', 'WooCommerce'],
    category: ['WordPress', 'E-Commerce'],
    demo: 'https://techshop-pro.com',
    code: null,
    featured: true
  },
  {
    title: 'ProSupply Hub',
    description: 'B2B marketplace connecting suppliers and retailers with custom pricing tiers and wholesale order management.',
    tags: ['WordPress', 'E-Commerce'],
    category: ['WordPress', 'E-Commerce'],
    demo: 'https://prosupplyhub.com',
    code: null,
    featured: true
  },
  {
    title: 'InvenTrack',
    description: 'Real-time inventory tracking system with barcode scanning, analytics dashboard, and multi-location support.',
    tags: ['Laravel', 'Vue.js', 'SPA'],
    category: ['Laravel', 'FrontEnd', 'FullStack'],
    demo: null,
    code: 'https://github.com/webdev/inventracker',
    featured: true
  },
  {
    title: 'ConnectHub',
    description: 'Community engagement platform with real-time notifications, content moderation, and user authentication system.',
    tags: ['Laravel', 'TailwindCSS'],
    category: ['Laravel', 'FullStack'],
    demo: 'https://connecthub.io',
    code: 'https://github.com/webdev/connecthub',
    featured: true
  },
  {
    title: 'EventFlow',
    description: 'Comprehensive event management system with booking capabilities, payment processing, and automated email notifications.',
    tags: ['Laravel', 'API'],
    category: ['Laravel', 'FullStack'],
    demo: 'https://eventflow.app',
    code: 'https://github.com/webdev/eventflow',
    featured: true
  },
  {
    title: 'CareerLaunch',
    description: 'Job matching platform with intelligent candidate filtering, application tracking, and resume parsing features.',
    tags: ['Laravel', 'SPA', 'Vue.js'],
    category: ['Laravel', 'FrontEnd', 'FullStack'],
    demo: 'https://careerlaunch.io',
    code: 'https://github.com/webdev/careerlaunch',
    featured: true
  },
  // Additional projects for the full projects page
  {
    title: 'DevPortfolio',
    description: 'Personal portfolio website template with customizable sections, dark mode toggle, and responsive design.',
    tags: ['Vue.js', 'Nuxt.js', 'TailwindCSS'],
    category: ['FrontEnd'],
    demo: 'https://dev-portfolio-template.com',
    code: 'https://github.com/webdev/dev-portfolio',
    featured: false
  },
  {
    title: 'MediTrack',
    description: 'Digital healthcare solution for medical professionals to create, manage, and track patient prescriptions securely.',
    tags: ['Laravel', 'Vue.js', 'Bootstrap'],
    category: ['FullStack', 'Laravel'],
    demo: null,
    code: 'https://github.com/webdev/meditrack',
    featured: false
  },
  {
    title: 'GroceryDirect',
    description: 'Food delivery platform with vendor management, order tracking, and customer loyalty program integration.',
    tags: ['WordPress', 'WooCommerce', 'E-Commerce'],
    category: ['WordPress', 'E-Commerce'],
    demo: 'https://grocerydirect.store',
    code: null,
    featured: false
  },
  {
    title: 'WanderBlog',
    description: 'Travel blog theme with rich media galleries, geolocation tagging, and social sharing integration for travel enthusiasts.',
    tags: ['WordPress', 'PHP', 'CSS'],
    category: ['WordPress'],
    demo: 'https://wanderblog-theme.com',
    code: 'https://github.com/webdev/wanderblog',
    featured: false
  },
  {
    title: 'DineEasy',
    description: 'Restaurant management system with table reservations, digital menu creation, and kitchen order management.',
    tags: ['Laravel', 'Vue.js', 'API'],
    category: ['Laravel', 'FullStack'],
    demo: null,
    code: 'https://github.com/webdev/dineeasy',
    featured: false
  },
  {
    title: 'TaskFlow',
    description: 'Project management tool with Kanban boards, time tracking, and team collaboration features for remote teams.',
    tags: ['Vue.js', 'Firebase', 'TailwindCSS'],
    category: ['FrontEnd'],
    demo: 'https://taskflow-app.web.app',
    code: 'https://github.com/webdev/taskflow',
    featured: false
  }
]);

// Also define categories locally to avoid state issues
const categories = ['All', 'FrontEnd', 'FullStack', 'Laravel', 'E-Commerce', 'WordPress'];
const activeFilter = ref('All');

// Set active filter
function setFilter(filter) {
  activeFilter.value = filter;
}

// Computed property for filtered projects
const displayProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return allProjects.value;
  }
  
  return allProjects.value.filter(project => 
    project.category.includes(activeFilter.value)
  );
});

// Wait for the component to be fully mounted
onMounted(() => {
  // Simulate a small loading delay for better UX
  setTimeout(() => {
    loading.value = false;
  }, 300);
});

// Define name for the page component
definePageMeta({
  name: 'projects-index'
});
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style> 