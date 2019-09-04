import { Component, OnInit, Input } from '@angular/core';
import { CompanyInfo } from 'src/app/models/company.info';

@Component({
    selector: 'app-resume-company',
    templateUrl: 'resume.company.component.html',
    styleUrls: ['resume.component.css']
})
export class ResumeCompanyComponent implements OnInit {

    @Input() company: CompanyInfo;

    private isOpened : boolean = false;
    constructor() { }

    ngOnInit() {

    }

    get IsOpened(){
        return this.isOpened;
    }

    toggleState(event){
        event.preventDefault();
        this.isOpened = !this.isOpened;
    }

}