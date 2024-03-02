import { Routes } from '@angular/router';
import { HomeComponent } from '@/pages/home/home.component';
import { NotFoundComponent } from '@/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: "", redirectTo: '/Home', pathMatch: 'full' },

  { path: "Home", component: HomeComponent },
  { path: "404", component: NotFoundComponent },

  { path: "**", redirectTo: '/404', pathMatch: 'full' },
];
