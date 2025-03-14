interface Project {
	title: string;
	tags: string[];
	description: string;
	project_url: string;
	img_url: string;
}

export const Projects: Project[] = [
  {
    title: "FASMEE",
    tags: ["Javascript", "PUG", "ExpressJS", "Bootstrap"],
    description:
      "El sitio web institucional del FASMEE es una plataforma moderna y accesible que informa a los usuarios sobre los servicios, logros y actividades de la institución, facilitando el acceso a contenido relevante de manera clara y organizada.",
    project_url: "https://fasmee.gob.ve/",
    img_url: "/projects/fasmee.png",
  },
  {
    title: "ecommerce",
    tags: ["ExpressJS", "Bootstrap", "PUG"],
    description: "Sitio web de comercio electrónico",
    project_url: "https://github.com/chrisestabaocupado/ecommerce",
    img_url: "/projects/nvim.png",
  },
];
