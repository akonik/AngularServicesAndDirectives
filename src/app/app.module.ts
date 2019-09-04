import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component/home.component';
import { routing } from './app.routing';
import { DataService } from './services/data-service/data.service';
import { ResumeComponent } from './components/resume-component/resume.component';
import { ResumeCompanyComponent } from './components/resume-component/resume.company.component';
import { HoverDirective } from './directives/hover-directive/hover.directive';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/charts/bar-chart-component/bar.chart.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart-component/doughnut.chart.component';
import { PolarAreaChartComponent } from './components/charts/polar-area-chart-component/polar.area.chart.component';
import { ChartsComponent } from './components/charts/charts-component/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ResumeCompanyComponent,
    HoverDirective,
    BarChartComponent,
    DoughnutChartComponent,
    PolarAreaChartComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
