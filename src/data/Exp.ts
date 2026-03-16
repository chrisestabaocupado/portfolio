export interface Exp {
  id: string;
  url: string;
  date: string;
  title: string;
  details: string;
  description: string;
}

export const expData: Record<"es" | "en", Exp[]> = {
  es: [
    {
      id: "fasmee-analista",
      url: "https://fasmee.gob.ve/",
      date: "Septiembre 2021 - Actualidad",
      title: "Fondo Autoadministrado de Salud del MPPEE",
      details: "Analista de Sistemas",
      description:
        "Desarrollo y mantenimiento del sitio web institucional. Gestión de bases de datos PostgreSQL. Soporte técnico y mejora de procesos con soluciones tecnológicas.",
    },
    {
      id: "fasmee-auxiliar",
      url: "https://fasmee.gob.ve/",
      date: "Septiembre 2021 - Diciembre 2024",
      title: "Fondo Autoadministrado de Salud del MPPEE",
      details: "Auxiliar de Soporte de TI",
      description:
        "Soporte técnico de primer nivel: hardware, software, redes y ofimática. Mantenimiento preventivo y correctivo. Instalación de equipos y administración de accesos.",
    },
  ],
  en: [
    {
      id: "fasmee-analista",
      url: "https://fasmee.gob.ve/",
      date: "September 2021 - Present",
      title: "Self-Managed Health Fund of the MPPEE",
      details: "Systems Analyst",
      description:
        "Development and maintenance of the institutional website. PostgreSQL database management. Technical support and process improvement with technology solutions.",
    },
    {
      id: "fasmee-auxiliar",
      url: "https://fasmee.gob.ve/",
      date: "September 2021 - December 2024",
      title: "Self-Managed Health Fund of the MPPEE",
      details: "IT Support Assistant",
      description:
        "First-level technical support: hardware, software, networking and office tools. Preventive and corrective maintenance. Equipment installation and access administration.",
    },
  ],
};
