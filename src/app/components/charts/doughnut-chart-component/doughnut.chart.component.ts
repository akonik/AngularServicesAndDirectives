import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
    selector: 'app-doughnut-chart',
    templateUrl: 'doughnut.chart.component.html'
})
export class DoughnutChartComponent implements OnInit {


    public doughnutChartLabels: Label[];
    public doughnutChartData: MultiDataSet;
    public doughnutChartType: ChartType = 'doughnut';

    constructor(private dataService:DataService) {
        this.doughnutChartData = [this.dataService.getProjectAmountData.values];
        this.doughnutChartLabels = this.dataService.getProjectAmountData.valueLabels;
     }

    ngOnInit() { 

    }

}