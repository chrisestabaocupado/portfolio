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
		description: "Sitio web institucional para una aseguradora",
		project_url: "https://fasmee.gob.ve/",
		img_url: "/nvim.png"
	}
];
