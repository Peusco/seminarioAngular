import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShirtStoreComponent } from './shirt-store/shirt-store.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'shirts', pathMatch: 'full'
  },
  {
    path: 'shirts', component: ShirtStoreComponent
  },
  {
    path: 'about' , component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
