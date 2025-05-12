# Developer Portfolio

A modern, responsive developer portfolio website built with Nuxt.js and Vue.js.

🌐 **Live Demo:** [https://developer-portfolio-nuxt.vercel.app/](https://developer-portfolio-nuxt.vercel.app/)

## 🚀 Features

- Responsive layout for all devices
- Dark/Light mode
- Project showcase with filtering options
- Skills and experience sections
- Contact form with validation
- SEO optimized
- Fast loading with Nuxt.js performance optimizations

## 🛠️ Technologies

- [Nuxt.js 3](https://nuxt.com/) - Vue framework for building web applications
- [Vue.js 3](https://vuejs.org/) - Progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

## 📋 Prerequisites

- Node.js 16.x or later
- npm or yarn

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/MokammelTanvir/developer-portfolio-nuxt.git
cd developer-portfolio-nuxt
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
portfolio-website/
├── assets/            # Static assets like CSS, images
├── components/        # Vue components
│   └── sections/      # Page sections (About, Projects, etc.)
├── composables/       # Reusable Vue composables
├── layouts/           # Page layouts
├── pages/             # Application pages
│   └── projects/      # Project-related pages
├── public/            # Public static files
├── app.vue            # App entry
├── nuxt.config.ts     # Nuxt configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🚀 Deployment

This site can be deployed to any static hosting service:

```bash
# Generate static files
npm run generate
# or
yarn generate
```

The generated files will be in the `.output/public` directory, ready to be deployed.

## 🧰 Customization

### Content

Edit the following files to customize your portfolio:

- Update personal information in composables
- Add projects in `composables/useProjects.js`
- Modify sections in the `components/sections/` directory

### Styling

- Update colors and theme in `tailwind.config.js`
- Modify global styles in `assets/css/main.css`

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

## 📞 Contact

Mokammel Tanvir - [tanvir@mokammeltanvir.com](mailto:tanvir@mokammeltanvir.com)

Project Link: [https://github.com/MokammelTanvir/developer-portfolio-nuxt](https://github.com/MokammelTanvir/developer-portfolio-nuxt)
