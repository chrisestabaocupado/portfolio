export interface Project {
  name: string;
  language: string;
  description: string;
  html_url: string;
  topics: string[];
}

export const GetProyectsPagination = async (
  token: string,
  page: number,
  items: number
) => {
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
      return data.map((project: Project) => {
        return {
          name: project.name,
          language: project.language,
          description: project.description,
          html_url: project.html_url,
          topics: project.topics.filter(
            (tag: string) => project.topics.indexOf(tag) < 2
          ),
        };
      });
    });
  const Projects: Project[] = await GetProjects;
  return Projects;
};
