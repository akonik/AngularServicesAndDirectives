import { Injectable } from '@angular/core';
import { CompanyInfo } from 'src/app/models/company.info';
import { PersonalData } from 'src/app/models/personal.information';
import { ChartData } from 'src/app/models/chart.data';

@Injectable()
export class DataService {

    constructor() { }

    private softum = new CompanyInfo(
        'Softum',
        '12.2017 - current',
        'C#/ .Net, Fullstack developer, Unity3d developer',
        ['Web applications development',
            'Server applications development and APIs',
            'Angular development',
            'Researches and bug fixing',
            'Applications architecture creation',
            'Unity3d application development'],
        ['C#',
            'ASP.NET MVC',
            'ASP.NET CORE',
            'Angular',
            'LINQ',
            'MS SQL',
            'MySQL',
            'T-SQL',
            'JS',
            'Azure',
            'Unity3d'],
        ['Control system for repair shops. Backend developer. C#, APS.NET CORE, Reddis, Azure, MSSQL.',
            'Unity3d WebGL card game. Frontend developer. C#, Unity3D, Javascript.',
            'Apartment reservation system. Backend developer. C#, ASP.NET MVC, MSSQL, Javascript.',
            'System for management of hotel rooms cleaning. Fullstack developer.TypeScript, Angular5, C#',
            'VR project for virtual music experience. Frontend developer. Unity3D, Vuforia',
            'Car marketplace built on ASP.NET and React.js',
            'Call center management system. C#, ASP.NET MVC, Angular 7, web services.']

    );

    private stromGS = new CompanyInfo(
        'Storm Game Studio',
        '11.2014 – 11.2017',
        'Unity3d C# developer, UnrealEngine 4 C++/Blueprints Developer',
        ['Unity3d development for mobile plaforms',
            'UnrealEngine 4 development for Windows/Linux games'],
        ['C#',
            'Unity3d',
            'C++',
            'UnrealEngine 4',
            'Blueprints'],
        ['3d action PC Game. Lead developer. UnrealEngine 4, C++, Blueprints, asp.net mvc 5 for backend.',
            '3d action arcade PC Game. Lead developer. UnrealEngine4, C++, Blueprints.',
            'Unity 3d android/iOS match3 game. Lead developer. C# Unity3d.']
    );

    private funBitGames = new CompanyInfo(
        'FunBitGames',
        '10.2012 – 11.2014',
        'TorqueScript developer',
        ['Implementation of game mechanics for hidden object game.',
            'Implementation of mini-games mechanics'],
        ['Torque2d', 'TorqueScript', 'Torsion'],
        ['Hidden objects PC game. Lead developer. Torque2d game engine, TorqueScript.']
    );

    private iveonikSystems = new CompanyInfo(
        'Iveonik Systems',
        '10.2011 – 09.2012',
        'ASP.NET, MVC, Backend and Frontend developer',
        ['Back office development',
            'Parsing data from online stores',
            'Development utils for automated testing'],
        ['C#', 'MySQL', 'LINQ', 'ASP.NET MVC', 'JavaScript',
            'JQuery', 'SVN', 'Bugzilla', 'NHibernate', 'PostgreSQL'],
        ['Aggregator of online stores for the Swiss market. .net/javascript developer. ASP.NET MVC 3, NHibernate, MySQL, PostgreSQL, javascript, jquery.']
    );

    private personalData = new PersonalData("Aleksandr", `
    7 years experience with С# .Net framework. Has a lot of experience in game development with Unity3d and UnrealEngine 4. Also has experience with automated and integrated testing. 
    
    Very responsible, business oriented professional`);


    public get getCompaniesInfo(): Array<CompanyInfo> {
        return [this.softum, this.stromGS, this.funBitGames, this.iveonikSystems];
    }

    public get getPersonalData(): PersonalData {
        return this.personalData;
    }

    private workTime = new ChartData("Work time in companies (month)",
        [10, 25, 26, 21], ['Iveonik Systems', 'FunBitGames', 'Storm Game Studio', 'Softum']);

    public get getWorkTimeData(): ChartData {
        return this.workTime;
    }

    private projectsAmount = new ChartData('', [1, 1, 3, 7], ['Iveonik Systems', 'FunBitGames', 'Storm Game Studio', 'Softum']);

    public get getProjectAmountData() {
        return this.projectsAmount;
    }

    private technologiesUsedInProjects = new ChartData('', [10, 7, 2, 1, 8, 2, 2], ['C#', 'ASP.NET', 'Angular', 'React.JS', 'SQL', 'Unity', 'Unreal Engine 4']);

    public get getTechnologiesUsedInProjectsData() {
        return this.technologiesUsedInProjects;
    }
}