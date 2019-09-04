export class CompanyInfo {
    companyName: string;
    involvementDiration: string;
    projectRole: string;
    responsibilities: string[];
    toolsAndTechnologies: string[];
    projects: string[];


    constructor(
        companyName: string,
        involvementDiration: string,
        projectRole: string,
        responsibilities: string[],
        toolsAndTechnologies: string[],
        projects: string[]) {

        this.companyName = companyName;
        this.involvementDiration = involvementDiration;
        this.projectRole = projectRole;
        this.responsibilities = responsibilities;
        this.toolsAndTechnologies = toolsAndTechnologies;
        this.projects = projects;

    }
}