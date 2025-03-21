interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  project_url: string;
  img_url: string;
}

export const Projects: Project[] = [
  {
    id: "fasmee-web",
    title: "FASMEE",
    tags: ["Javascript", "PUG", "ExpressJS", "Bootstrap"],
    description:
      "Sitio web institucional del FASMEE con información sobre servicios y actividades, diseñado para ser accesible y fácil de navegar.",
    project_url: "https://fasmee.gob.ve/",
    img_url: "/projects/fasmee.png",
  },
  /* {
    id: "ecommerce",
    title: "ecommerce",
    tags: ["ExpressJS", "Bootstrap", "PUG"],
    description:
      "Plataforma de comercio electrónico con ExpressJS y Bootstrap, optimizada para una experiencia de compra fluida y responsiva.",
    project_url: "https://github.com/chrisestabaocupado/ecommerce",
    img_url: "/projects/nvim.png",
  }, */
  {
    id: "python",
    title: "Fundamentos de Python",
    tags: ["Python"],
    description:
      "Repositorio con fundamentos de Python, ideal para aprender y reforzar conceptos básicos y avanzados.",
    img_url: "/projects/python.png",
    project_url: "https://github.com/chrisestabaocupado/python",
  },
];
