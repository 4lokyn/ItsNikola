import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './app-components/about/about.component';
import { ContactComponent } from './app-components/contact/contact.component';
import { HomeComponent } from './app-components/home/home.component';
import { NavigationComponent } from './app-components/navigation/navigation.component';
import { NotFoundComponent } from './app-components/not-found/not-found.component';
import { SkillsComponent } from './app-components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
