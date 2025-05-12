<template>
  <section id="about" class="py-20 bg-white dark:bg-secondary/10">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 700 } }"
        class="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        <span class="text-primary">About</span> Me
      </h2>
      
      <div class="flex flex-col md:flex-row gap-10 items-center">
        <div 
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }"
          class="md:w-1/2"
        >
          <p class="text-lg mb-6">
            I'm an accomplished Full Stack Web Developer with over 5 years of experience. I began my journey while studying Computer Science and Engineering, working part-time as a PHP Web Developer at Fiverr.
          </p>
          <p class="text-lg mb-8">
            My expertise spans PHP, JavaScript, and frameworks like Laravel, VueJS, and WordPress. I deliver clean, efficient code and continuously learn to provide the most effective solutions.
          </p>
          
          <div class="flex flex-wrap gap-6">
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
              class="flex items-center gap-2"
            >
              <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </div>
              <span>Uttara, Dhaka, Bangladesh</span>
            </div>
            
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
              class="flex items-center gap-2"
            >
              <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
              </div>
              <span>5+ Years Experience</span>
            </div>
            
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 800, duration: 500 } }"
              class="flex items-center gap-2"
            >
              <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <span>BSc in Computer Science</span>
            </div>
          </div>
        </div>
        
        <div 
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }"
          class="md:w-1/2"
        >
          <div class="grid grid-cols-2 gap-6">
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 500 } }"
              class="bg-gray-50 dark:bg-secondary/20 p-6 rounded-lg text-center shadow-sm"
            >
              <div class="text-4xl font-bold text-primary mb-2">5+</div>
              <div class="text-lg">Years of Experience</div>
            </div>
            
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 500 } }"
              class="bg-gray-50 dark:bg-secondary/20 p-6 rounded-lg text-center shadow-sm"
            >
              <div class="text-4xl font-bold text-primary mb-2">150+</div>
              <div class="text-lg">Projects Completed</div>
            </div>
            
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 500 } }"
              class="bg-gray-50 dark:bg-secondary/20 p-6 rounded-lg text-center shadow-sm"
            >
              <div class="text-4xl font-bold text-primary mb-2">3</div>
              <div class="text-lg">Frontend Frameworks</div>
            </div>
            
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 700, duration: 500 } }"
              class="bg-gray-50 dark:bg-secondary/20 p-6 rounded-lg text-center shadow-sm"
            >
              <div class="text-4xl font-bold text-primary mb-2">2</div>
              <div class="text-lg">Backend Frameworks</div>
            </div>
          </div>
          
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 900, duration: 500 } }"
            class="mt-8 text-center"
          >
            <a href="#contact" class="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 