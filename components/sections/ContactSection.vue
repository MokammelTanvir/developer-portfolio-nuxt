<template>
  <section id="contact" class="py-20 bg-white dark:bg-secondary/5">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        class="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Get In <span class="text-primary">Touch</span>
      </h2>
      <p 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
        class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Contact Form -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 800 } }"
          class="bg-background dark:bg-secondary/10 rounded-lg p-8 shadow-sm"
        >
          <h3 class="text-xl font-bold mb-6">Send Me a Message</h3>
          
          <form class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Name*</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-secondary/20 dark:text-white" placeholder="Your Name" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Email*</label>
                <input type="email" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-secondary/20 dark:text-white" placeholder="Your Email" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">Subject</label>
              <input type="text" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-secondary/20 dark:text-white" placeholder="Subject" />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">Message*</label>
              <textarea rows="5" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-secondary/20 dark:text-white" placeholder="Write your message here..."></textarea>
            </div>
            
            <button 
              v-motion
              :initial="{ scale: 1 }"
              :hover="{ scale: 1.05, transition: { duration: 300 } }"
              type="submit" 
              class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 800 } }"
          class="flex flex-col justify-between"
        >
          <div>
            <h3 class="text-xl font-bold mb-6">Contact Information</h3>
            
            <div class="space-y-4">
              <div 
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 500 } }"
                class="flex items-start"
              >
                <div class="bg-primary/10 p-3 rounded-full text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium">Location</h4>
                  <p class="text-gray-600 dark:text-gray-400">Uttara, Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div 
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 500 } }"
                class="flex items-start"
              >
                <div class="bg-primary/10 p-3 rounded-full text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium">Email</h4>
                  <p class="text-gray-600 dark:text-gray-400">tanvir@mokammeltanvir.com</p>
                </div>
              </div>
              
              <div 
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 1200, duration: 500 } }"
                class="flex items-start"
              >
                <div class="bg-primary/10 p-3 rounded-full text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium">Phone</h4>
                  <p class="text-gray-600 dark:text-gray-400">+8801915557363</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1400, duration: 500 } }"
            class="mt-10"
          >
            <h3 class="text-xl font-bold mb-6">Connect With Me</h3>
            <div class="flex space-x-4">
              <a 
                v-motion
                :initial="{ scale: 1 }"
                :hover="{ scale: 1.2, transition: { duration: 300 } }"
                href="https://github.com/mokammeltanvir" 
                target="_blank" 
                class="bg-secondary hover:bg-primary text-white p-3 rounded-full transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a 
                v-motion
                :initial="{ scale: 1 }"
                :hover="{ scale: 1.2, transition: { duration: 300 } }"
                href="https://linkedin.com/in/mokammeltanvir" 
                target="_blank" 
                class="bg-secondary hover:bg-primary text-white p-3 rounded-full transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a 
                v-motion
                :initial="{ scale: 1 }"
                :hover="{ scale: 1.2, transition: { duration: 300 } }"
                href="https://twitter.com/mokammeltanvir" 
                target="_blank" 
                class="bg-secondary hover:bg-primary text-white p-3 rounded-full transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
              <a 
                v-motion
                :initial="{ scale: 1 }"
                :hover="{ scale: 1.2, transition: { duration: 300 } }"
                href="https://facebook.com/mokammeltanvir" 
                target="_blank" 
                class="bg-secondary hover:bg-primary text-white p-3 rounded-full transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Optional Calendly Integration -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1600, duration: 500 } }"
            class="mt-10"
          >
            <h3 class="text-xl font-bold mb-4">Schedule a Meeting</h3>
            <a 
              v-motion
              :initial="{ scale: 1 }"
              :hover="{ scale: 1.05, transition: { duration: 300 } }"
              href="#" 
              class="inline-block bg-cta hover:bg-cta/90 text-white py-2 px-4 rounded-md font-medium transition"
            >
              Book a 30-min call
            </a>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Let's discuss your project and how I can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 