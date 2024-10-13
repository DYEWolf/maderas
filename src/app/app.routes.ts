import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import ContactComponent from './features/contact/contact.component';
import { ProductsComponent } from './features/products/products.component';
import { GalleryComponent } from './features/gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component'),
  },
  { path: '**', redirectTo: 'home' },
];
