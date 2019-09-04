import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
    selector: 'app-bar-chart',
    templateUrl: 'bar.chart.component.html',
})
export class BarChartComponent implements OnInit {


    public barChartOptions: ChartOptions = {
        responsive: true,
    };
    public barChartLabels: Label[];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartDataSets[] ;

    constructor(data: DataService) {
        const chartData = data.getWorkTimeData;


        this.barChartData = [
            { data: chartData.values, label: chartData.label }
        ];

        this.barChartLabels = chartData.valueLabels;

    }

    ngOnInit() {

    }

}