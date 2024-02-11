import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-components/home/home.component';
import { SkillsComponent } from './app-components/skills/skills.component';
import { AboutComponent } from './app-components/about/about.component';
import { ContactComponent } from './app-components/contact/contact.component';
import { NotFoundComponent } from './app-components/not-found/not-found.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Skills',component:SkillsComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'',redirectTo: 'Home', pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
