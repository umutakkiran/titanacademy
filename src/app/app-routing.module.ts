import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {path:"", component: LayoutComponent, children:[
    {path:"", component: HomeComponent},
    {path:"register", loadChildren: () => import("../app/ui/components/register/register.module").then(module => module.RegisterModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
