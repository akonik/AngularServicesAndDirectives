import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
    selector: 'app-polar-area-chart',
    templateUrl: 'polar.area.chart.component.html'
})
export class PolarAreaChartComponent implements OnInit {

    public polarAreaChartLabels: Label[];
    public polarAreaChartData: SingleDataSet;
    public polarAreaLegend = true;

    public polarAreaChartType: ChartType = 'polarArea';

    constructor(private dataService : DataService) {
        this.polarAreaChartLabels = dataService.getTechnologiesUsedInProjectsData.valueLabels;
        this.polarAreaChartData = dataService.getTechnologiesUsedInProjectsData.values;
     }

    ngOnInit() {
    }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

}