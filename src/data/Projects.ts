export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  project_url: string;
  img_url: string;
}

export const projectsData: Record<"es" | "en", Project[]> = {
  es: [
    {
      id: "fasmee-web",
      title: "FASMEE",
      tags: ["Javascript", "PUG", "ExpressJS", "Bootstrap"],
      description:
        "Sitio web institucional del FASMEE con información sobre servicios y actividades, diseñado para ser accesible y fácil de navegar.",
      project_url: "https://fasmee.gob.ve/",
      img_url: "/projects/fasmee.webp",
    },
    {
      id: "schema.desktop",
      title: "schema.desktop",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Tauri"],
      description:
        "schema.ai es una aplicación de escritorio impulsada por IA para diseñar esquemas de bases de datos mediante lenguaje natural. Describe tu modelo de datos en texto plano, y la aplicación genera diagramas ER interactivos junto con scripts listos para usar de SQL — todo almacenado localmente en tu máquina.",
      img_url: "/projects/schemadesktop.png",
      project_url: "https://github.com/chrisestabaocupado/schema.desktop",
    },
  ],
  en: [
    {
      id: "fasmee-web",
      title: "FASMEE",
      tags: ["Javascript", "PUG", "ExpressJS", "Bootstrap"],
      description:
        "FASMEE's institutional website with information about services and activities, designed to be accessible and easy to navigate.",
      project_url: "https://fasmee.gob.ve/",
      img_url: "/projects/fasmee.webp",
    },
    {
      id: "schema.desktop",
      title: "schema.desktop",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Tauri"],
      description:
        "schema.ai is an AI-powered desktop application for designing database schemas through natural language. Describe your data model in plain text, and the app generates interactive ER diagrams along with ready-to-use SQL scripts — all stored locally on your machine.",
      img_url: "/projects/schemadesktop.png",
      project_url: "https://github.com/chrisestabaocupado/schema.desktop",
    },
  ],
};
