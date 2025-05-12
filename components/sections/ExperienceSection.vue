<template>
  <section id="experience" class="py-20 bg-background dark:bg-darkBg">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        My <span class="text-primary">Experience</span>
      </h2>
      
      <!-- Tab Controls -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        class="flex justify-center mb-12"
      >
        <div class="flex border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
          <button 
            @click="activeTab = 'experience'" 
            :class="['px-4 py-2 transition', activeTab === 'experience' ? 'bg-primary text-white' : 'bg-white dark:bg-secondary/10 hover:bg-primary/20 dark:hover:bg-primary/20']"
          >
            Experience
          </button>
          <button 
            @click="activeTab = 'education'" 
            :class="['px-4 py-2 transition', activeTab === 'education' ? 'bg-primary text-white' : 'bg-white dark:bg-secondary/10 hover:bg-primary/20 dark:hover:bg-primary/20']"
          >
            Education
          </button>
        </div>
      </div>
      
      <!-- Experience Timeline -->
      <div 
        v-if="activeTab === 'experience'" 
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { delay: 300, duration: 600 } }"
        class="max-w-4xl mx-auto"
      >
        <div class="relative">
          <!-- Timeline Line -->
          <div 
            v-motion
            :initial="{ opacity: 0, scaleY: 0, transformOrigin: 'top' }"
            :visibleOnce="{ opacity: 1, scaleY: 1, transition: { delay: 400, duration: 1500 } }"
            class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"
          ></div>
          
          <!-- Timeline Items -->
          <div 
            v-for="(item, index) in experiences" 
            :key="index" 
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 500 + (index * 200), duration: 700 } }"
            class="mb-12 relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse"
          >
            
            <!-- Timeline Dot -->
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 700 + (index * 200), duration: 500 } }"
              class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-darkBg z-10"
            ></div>
            
            <!-- Timeline Date - Left side on odd, right side on even -->
            <div class="md:w-1/2 md:pr-10 md:odd:pl-10 md:odd:pr-0 flex md:odd:justify-start md:justify-end">
              <div class="bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full inline-block">
                {{ item.period }}
              </div>
            </div>
            
            <!-- Timeline Content - Right side on odd, left side on even -->
            <div class="md:w-1/2 bg-white dark:bg-secondary/10 p-6 rounded-lg shadow-sm md:ml-10 md:odd:mr-10 md:odd:ml-0 mt-4 md:mt-0">
              <h3 class="text-xl font-bold mb-1">{{ item.role }}</h3>
              <h4 class="text-primary mb-3">{{ item.company }}</h4>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ item.description }}</p>
              <ul class="list-disc list-inside text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li v-for="(achievement, i) in item.achievements" :key="i">{{ achievement }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Education Timeline -->
      <div 
        v-if="activeTab === 'education'" 
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { delay: 300, duration: 600 } }"
        class="max-w-4xl mx-auto"
      >
        <div class="relative">
          <!-- Timeline Line -->
          <div 
            v-motion
            :initial="{ opacity: 0, scaleY: 0, transformOrigin: 'top' }"
            :visibleOnce="{ opacity: 1, scaleY: 1, transition: { delay: 400, duration: 1500 } }"
            class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"
          ></div>
          
          <!-- Timeline Items -->
          <div 
            v-for="(item, index) in education" 
            :key="index" 
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 500 + (index * 200), duration: 700 } }"
            class="mb-12 relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse"
          >
            
            <!-- Timeline Dot -->
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 700 + (index * 200), duration: 500 } }"
              class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-darkBg z-10"
            ></div>
            
            <!-- Timeline Date - Left side on odd, right side on even -->
            <div class="md:w-1/2 md:pr-10 md:odd:pl-10 md:odd:pr-0 flex md:odd:justify-start md:justify-end">
              <div class="bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full inline-block">
                {{ item.period }}
              </div>
            </div>
            
            <!-- Timeline Content - Right side on odd, left side on even -->
            <div class="md:w-1/2 bg-white dark:bg-secondary/10 p-6 rounded-lg shadow-sm md:ml-10 md:odd:mr-10 md:odd:ml-0 mt-4 md:mt-0">
              <h3 class="text-xl font-bold mb-1">{{ item.degree }}</h3>
              <h4 class="text-primary mb-3">{{ item.institution }}</h4>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ item.description }}</p>
              <div v-if="item.achievements" class="text-sm text-gray-600 dark:text-gray-400">
                <div class="font-medium mb-1">Key Achievements:</div>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(achievement, i) in item.achievements" :key="i">{{ achievement }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

// Active tab state
const activeTab = ref('experience');

// Mock data for professional experience
const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCraft Solutions',
    period: 'Jan 2021 - Present',
    description: 'Leading frontend development for enterprise SaaS applications with focus on performance and accessibility.',
    achievements: [
      'Implemented new component library reducing development time by 40%',
      'Improved application load time by 65% through code splitting and lazy loading',
      'Mentored junior developers and established frontend best practices'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Digital Innovations Inc.',
    period: 'Mar 2019 - Dec 2020',
    description: 'Worked on various client projects developing responsive web applications and e-commerce solutions.',
    achievements: [
      'Developed 15+ client websites using Vue.js and Laravel',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
      'Integrated payment gateways and third-party APIs for e-commerce platforms'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'WebMatrix Agency',
    period: 'Jun 2017 - Feb 2019',
    description: 'Collaborated with design team to implement pixel-perfect UI for client websites and web applications.',
    achievements: [
      'Converted design mockups to responsive web interfaces for 20+ projects',
      'Optimized website performance achieving 95+ scores on Google PageSpeed',
      'Implemented cross-browser compatible animations and interactive elements'
    ]
  },
  {
    role: 'Junior Web Developer',
    company: 'StartUp Nexus',
    period: 'Jan 2016 - May 2017',
    description: 'Assisted in development of web applications for early-stage startups.',
    achievements: [
      'Built and maintained WordPress websites for small business clients',
      'Created custom plugins to extend CMS functionality',
      'Provided technical support and training for content editors'
    ]
  }
];

// Mock data for education
const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Tech University',
    period: '2019 - 2021',
    description: 'Specialized in web technologies and distributed systems with focus on modern JavaScript frameworks.',
    achievements: [
      'Graduated with 3.85 GPA',
      'Published research paper on frontend performance optimization',
      'Teaching assistant for "Advanced Web Development" course'
    ]
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'State University',
    period: '2015 - 2019',
    description: 'Comprehensive program covering software development lifecycle, algorithms, and web technologies.',
    achievements: [
      'Dean\'s List for six consecutive semesters',
      'Developed an open-source project management application as capstone project',
      'President of university coding club'
    ]
  },
  {
    degree: 'Web Development Bootcamp',
    institution: 'CodeCamp Academy',
    period: '2014 - 2015',
    description: 'Intensive full-stack web development program covering frontend and backend technologies.',
    achievements: [
      'Graduated top of class with 98% completion score',
      'Built 5 full-stack applications as part of the curriculum',
      'Received Outstanding Student Award'
    ]
  }
];

// Reset animations when tab changes
watch(activeTab, () => {
  // This will help trigger new animations when the tab changes
  // The Vue Motion plugin will handle reapplying animations for newly visible elements
});
</script> 