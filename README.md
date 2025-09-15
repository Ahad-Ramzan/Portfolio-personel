# Ahad Ramzan - Portfolio Website

A modern, dark-themed portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features stunning animations, responsive design, and professional presentation of skills, experience, and projects.

## ✨ Features

- **Modern Dark Theme**: Professional dark mode design with blue/purple gradient accents
- **Smooth Animations**: Beautiful scroll animations and hover effects using Framer Motion
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Glassmorphism Effects**: Modern UI with backdrop blur and transparent elements
- **SEO Optimized**: Complete metadata setup for better search engine visibility
- **Interactive Components**: Animated skill bars, project showcases, and contact forms

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Development**: ESLint, Prettier

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **About Me**: Professional summary with stats and highlights
3. **Skills**: Interactive skill categories with progress bars
4. **Experience**: Timeline-based work experience display
5. **Education**: Academic background and certifications
6. **Projects**: Featured projects with hover effects and links
7. **Contact**: Contact form and direct contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ahad-ramzan/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Colors

The color scheme is defined in `src/app/globals.css` using CSS custom properties:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  /* ... more colors */
}
```

### Content

Update the content in the component files:

- Personal info: `src/components/Hero.tsx`, `src/components/About.tsx`
- Skills: `src/components/Skills.tsx`
- Experience: `src/components/Experience.tsx`
- Projects: `src/components/Projects.tsx`

### CV/Resume

Replace `public/cv.pdf` with your actual CV file.

## 📊 SEO Features

- Optimized meta tags
- Open Graph support
- Twitter Card support
- Structured data
- Sitemap friendly

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
npm run start
```

## 📧 Contact Information

- **Email**: ahadramzan584@gmail.com
- **Phone**: 0306-4468027
- **LinkedIn**: [linkedin.com/in/ahad-ramzan](https://linkedin.com/in/ahad-ramzan)
- **GitHub**: [github.com/ahad-ramzan](https://github.com/ahad-ramzan)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Built with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)

---

**Made with ❤️ by Ahad Ramzan**
