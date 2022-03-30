import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'add', component: AddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
