<template>
  <section id="projects" class="py-20 bg-white dark:bg-secondary/5">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        My <span class="text-primary">Projects</span>
      </h2>
      <p 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Check out some of my recent works. Each project showcases my skills and expertise in different technologies.
      </p>
      
      <!-- Project Categories -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
        class="flex flex-wrap justify-center gap-4 mb-12"
      >
        <button 
          v-for="(category, index) in categories" 
          :key="category" 
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400 + (index * 100), duration: 500 } }"
          @click="setFilter(category)"
          :class="[
            'px-4 py-2 rounded-md transition',
            activeFilter === category ? 'bg-primary text-white' : 'bg-white dark:bg-secondary/20 hover:bg-primary/20 hover:text-primary dark:hover:bg-primary/20'
          ]"
        >
          {{ category }}
        </button>
      </div>
      
      <!-- Projects Grid -->
      <div 
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { delay: 500, duration: 600 } }"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div 
          v-for="(project, index) in featuredProjectsFiltered" 
          :key="index" 
          v-motion
          :initial="{ opacity: 0, y: 30, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, y: 0, scale: 1, transition: { delay: 600 + (index * 150), duration: 600 } }"
          class="group perspective-card"
          @mousemove="(e) => handleMouseMove(e, index)"
          @mouseleave="() => handleMouseLeave(index)"
        >
          <div 
            class="bg-background dark:bg-secondary/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 card-3d"
            :style="getCardTransform(index)"
          >
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
      <div v-if="featuredProjectsFiltered.length === 0" class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
      </div>
      
      <!-- View All Projects Button -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 800, duration: 500 } }"
        class="text-center mt-12"
      >
        <a 
          href="/projects/" 
          class="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition"
        >
          View All Projects
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, reactive } from 'vue';

// Use the global projects state from the composable
const { 
  projects, 
  categories, 
  activeFilter, 
  featuredProjects, 
  setFilter 
} = useProjects();

// Store card rotations with an array of objects
const cardRotations = ref([]);

// Initialize card rotations
function initializeCardRotations() {
  if (featuredProjects.value && featuredProjects.value.length > 0) {
    cardRotations.value = featuredProjects.value.map(() => ({ x: 0, y: 0 }));
  }
}

// Call initialization once (ensure reactivity)
initializeCardRotations();

// Watch for changes in featuredProjects and reinitialize
// Ensures cardRotations syncs with the filtered projects
watch(() => featuredProjects.value?.length, (newLen) => {
  if (newLen > 0) {
    initializeCardRotations();
  }
});

// Filter featured projects based on the active filter
const featuredProjectsFiltered = computed(() => {
  if (activeFilter.value === 'All') {
    return featuredProjects.value;
  }
  
  return featuredProjects.value.filter(project => 
    project.category.includes(activeFilter.value)
  );
});

// 3D effect transform computed property - now a function for each card
function getCardTransform(index) {
  // Make sure cardRotations has been initialized and index is valid
  if (!cardRotations.value[index]) return '';
  
  const { x, y } = cardRotations.value[index];
  
  if (x === 0 && y === 0) {
    return 'transform: rotateY(0deg) rotateX(0deg); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)';
  }
  
  return `transform: rotateY(${y}deg) rotateX(${x}deg); 
          box-shadow: ${-y/2}px ${x/2}px 10px rgba(0, 0, 0, 0.2)`;
}

// Mouse move handler for 3D effect - now with card index
function handleMouseMove(event, index) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  
  // Calculate mouse position relative to the card center
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Calculate rotation based on mouse position
  const rotationX = -1 * ((event.clientY - centerY) / (rect.height / 2)) * 10; // Limit rotation to 10 degrees
  const rotationY = ((event.clientX - centerX) / (rect.width / 2)) * 10;
  
  // Update rotation state for this specific card
  if (cardRotations.value[index]) {
    cardRotations.value[index].x = rotationX;
    cardRotations.value[index].y = rotationY;
  }
}

// Reset card rotation when mouse leaves - now with card index
function handleMouseLeave(index) {
  if (cardRotations.value[index]) {
    cardRotations.value[index].x = 0;
    cardRotations.value[index].y = 0;
  }
}
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.perspective-card {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.card-3d {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.card-3d::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%);
  z-index: 1;
  pointer-events: none;
  border-radius: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-3d:hover::after {
  opacity: 1;
}
</style> 