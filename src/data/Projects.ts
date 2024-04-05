interface Project {
  title: string;
  language: string;
  description: string;
  url: string;
  tags: string[];
}

export const GetProyectsPagination = async (token, page, items) => {
  const GetProjects = fetch(
    `https://api.github.com/user/repos?page=${page}&per_page=${items}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data.map((project) => {
        return {
          title: project.name,
          language: project.language,
          description: project.description,
          url: project.html_url,
          tags: project.topics.filter((tag) => project.topics.indexOf(tag) < 2),
        };
      });
    });
  const Projects: Project[] = await GetProjects;
  return Projects;
};
