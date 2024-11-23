import {projectsData} from "../components/projectsData";

export default function useGetProjects(params){
    const project = projectsData.find(p => p.id === params)

  if (!project) {
    return null;
  }
  return project;
}