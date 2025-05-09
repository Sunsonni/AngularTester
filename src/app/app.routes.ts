import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        title:'Home page'
    },
    { 
        path: 'about', 
        component: AboutComponent,
        title: 'About page'
    }, 
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
    }
];
