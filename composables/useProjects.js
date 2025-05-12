import { ref, computed } from 'vue';

// Create a global state for projects
export const useProjects = () => {
  // State
  const projectsData = useState('projects', () => [
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
  
  const categories = useState('categories', () => ['All', 'FrontEnd', 'FullStack', 'Laravel', 'E-Commerce', 'WordPress']);
  const activeFilter = useState('activeFilter', () => 'All');
  
  // Get featured projects for homepage
  const featuredProjects = computed(() => {
    return projectsData.value.filter(project => project.featured);
  });
  
  // Filter projects based on the active filter
  const filteredProjects = computed(() => {
    if (activeFilter.value === 'All') {
      return projectsData.value;
    }
    
    return projectsData.value.filter(project => 
      project.category.includes(activeFilter.value)
    );
  });
  
  // Get specific projects for the specified category
  const getProjectsByCategory = (category) => {
    if (category === 'All') {
      return projectsData.value;
    }
    
    return projectsData.value.filter(project => 
      project.category.includes(category)
    );
  };
  
  // Return all the necessary data and functions
  return {
    projects: projectsData,
    categories,
    activeFilter,
    featuredProjects,
    filteredProjects,
    getProjectsByCategory,
    setFilter: (filter) => {
      // Make sure the filter value is valid
      if (categories.value.includes(filter)) {
        activeFilter.value = filter;
      } else {
        // Default to All if invalid
        activeFilter.value = 'All';
      }
    }
  };
}; 