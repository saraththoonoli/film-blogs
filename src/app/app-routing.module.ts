import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WilsCardComponent } from './wils-card/wils-card.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path:"blogs",component:BlogsComponent},
  {path:"about",component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:WilsCardComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
