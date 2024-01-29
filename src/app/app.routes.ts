import { Routes } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { TeamComponent } from './component/team/team.component';
import { JobApplicationComponent } from './component/job-application/job-application.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { RightsComponent } from './component/rights/rights.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainPage',
    pathMatch: 'full',
  },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'job', component: JobApplicationComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'rights', component: RightsComponent },
];

// {
//   path:"mainPage",
//   loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
// }
