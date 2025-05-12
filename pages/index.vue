<template>
  <!-- Hero Section -->
  <section
    id="home"
    class="py-20 bg-gradient-to-r from-background to-gray-100 dark:from-darkBg dark:to-gray-900"
  >
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row items-center max-w-6xl"
    >
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="md:w-1/2 mb-10 md:mb-0"
      >
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          class="text-4xl md:text-5xl font-bold mb-4"
        >
          Hi, I'm <span class="text-primary">Mokammel Tanvir</span>
        </h1>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
          class="text-2xl md:text-3xl mb-6"
        >
          Full Stack Developer
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
          class="text-lg mb-8"
        >
          I help businesses with modern, performant web apps using 
          <span class="text-vue-green font-medium">Vue.js</span>, 
          <span class="text-primary font-medium">Nuxt</span>, and 
          <span class="font-medium">Laravel</span>.
        </p>
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 500 } }"
          class="flex space-x-4"
        >
          <a
            href="#contact"
            class="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium transition"
            >Hire Me</a
          >
          <a
            href="#"
            class="border border-vue-green text-vue-green hover:bg-vue-green hover:text-white px-6 py-3 rounded-md font-medium transition"
            >Download Resume</a
          >
        </div>
      </div>
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
        class="md:w-1/2 flex justify-center"
      >
        <div class="relative">
          <!-- Nuxt-colored background circle - larger size for better 3D effect -->
          <div 
            v-motion
            :initial="{ opacity: 0, scale: 0.5, x: -10, y: -10 }"
            :enter="{ opacity: 0.2, scale: 1, x: -16, y: -16, transition: { delay: 500, duration: 800 } }"
            class="absolute w-72 h-72 rounded-full bg-primary opacity-20 transform -translate-x-4 -translate-y-4"
          ></div>
          
          <!-- Profile image container - kept at original size -->
          <div class="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
            <img 
              src="~/assets/img/mokammeltanvir.png" 
              alt="Mokammel Tanvir" 
              class="w-full h-full object-contain" 
              style="background-color: #080F21;"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Components -->
  <AboutSection />
  <SkillsSection />
  <ProjectsSection />
  <ExperienceSection />
  <ContactSection />
</template>

<script setup>
import AboutSection from '~/components/sections/AboutSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

// Meta tags for the page
useHead({
  title: 'Mokammel Tanvir - Full Stack Developer',
  meta: [
    { name: 'description', content: 'Mokammel Tanvir is a Full Stack Web Developer specializing in Vue.js, Nuxt, and Laravel.' }
  ]
});
</script> 