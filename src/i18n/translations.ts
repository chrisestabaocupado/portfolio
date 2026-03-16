export type Lang = "es" | "en";

export const translations = {
  es: {
    // Layout
    pageTitle: "Christopher Sae Glood | Desarrollador Fullstack",
    pageDescription:
      "Christopher Sae Glood - Desarrollador Fullstack especializado en React, Node.js, PHP y desarrollo web moderno. Explora mi portfolio con proyectos y experiencia profesional.",
    ogImageAlt: "Christopher Sae Glood - Desarrollador Fullstack",
    // Navbar
    navOpen: "Abrir menú de navegación",
    navLangToggle: "Cambiar idioma",
    navHome: "Inicio",
    navProjects: "Proyectos",
    navAbout: "Sobre mi",
    // About
    jobTitle: "Programador Fullstack",
    downloadCV: "Descargar CV",
    contact: "Contáctame",
    profileAlt: "Christopher Sae Glood",
    // index.astro sections
    sectionExperience: "Experiencia Laboral",
    sectionProjects: "Proyectos",
    sectionAbout: "Más Sobre Mí",
    // DetailedAbout
    bioP1:
      "¡Hola! Soy Christopher Glood, un desarrollador con una profunda pasión por la tecnología y la innovación. Siempre busco aprender nuevas herramientas y enfoques para crear soluciones que faciliten el acceso a información y mejoren la experiencia digital de las personas.",
    bioP2:
      "Desde joven, la tecnología ha sido una de mis grandes pasiones, pero también la música, lo que ha influido en mi enfoque creativo en la programación.",
    bioP3:
      "Mi objetivo es seguir aprendiendo y contribuir al desarrollo de soluciones tecnológicas que beneficien a la comunidad y mejoren el acceso a contenido de calidad.",
    // SimpleCard
    projectImgAlt: "Captura de pantalla del proyecto",
    // Footer
    footerMadeWith: "Made with",
    footerBy: "by Christopher Glood",
    footerBackToTop: "Volver arriba",
  },
  en: {
    // Layout
    pageTitle: "Christopher Sae Glood | Fullstack Developer",
    pageDescription:
      "Christopher Sae Glood - Fullstack Developer specialized in React, Node.js, PHP and modern web development. Explore my portfolio with projects and professional experience.",
    ogImageAlt: "Christopher Sae Glood - Fullstack Developer",
    // Navbar
    navOpen: "Open navigation menu",
    navLangToggle: "Change language",
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About me",
    // About
    jobTitle: "Fullstack Developer",
    downloadCV: "Download CV",
    contact: "Contact me",
    profileAlt: "Christopher Sae Glood",
    // index.astro sections
    sectionExperience: "Work Experience",
    sectionProjects: "Projects",
    sectionAbout: "More About Me",
    // DetailedAbout
    bioP1:
      "Hi! I'm Christopher Glood, a developer with a deep passion for technology and innovation. I'm always looking to learn new tools and approaches to create solutions that improve access to information and enhance people's digital experience.",
    bioP2:
      "From a young age, technology has been one of my greatest passions, but so has music, which has influenced my creative approach to programming.",
    bioP3:
      "My goal is to keep learning and contribute to the development of technological solutions that benefit the community and improve access to quality content.",
    // SimpleCard
    projectImgAlt: "Screenshot of project",
    // Footer
    footerMadeWith: "Made with",
    footerBy: "by Christopher Glood",
    footerBackToTop: "Back to top",
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
