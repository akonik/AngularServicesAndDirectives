import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';
import { PersonalData } from 'src/app/models/personal.information';
import { CompanyInfo } from 'src/app/models/company.info';

@Component({
    selector: 'app-resume',
    templateUrl: 'resume.component.html',
    styleUrls:['resume.component.css']
})
export class ResumeComponent implements OnInit {

    constructor(private dataService: DataService) { }

    ngOnInit() {

    }

    get personalInformation() :PersonalData{
        return this.dataService.getPersonalData;
    }

    get companiesInfo() : Array<CompanyInfo>{
        return this.dataService.getCompaniesInfo;
    }

}