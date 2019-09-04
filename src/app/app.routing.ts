import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { ResumeComponent } from './components/resume-component/resume.component';
import { ChartsComponent } from './components/charts/charts-component/charts.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path : 'charts',
        component : ChartsComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

export const routing = RouterModule.forRoot(appRoutes);