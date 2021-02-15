import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowcaseComponent } from './view/home/showcase/showcase.component';
import { PlaceComponent } from './view/home/place/place.component';
import { FooterComponent } from './view/footer/footer.component';
import { AdventureComponent } from './view/adventure/adventure.component';
import { ResortComponent } from './view/resort/resort.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShowcaseComponent,
    PlaceComponent,
    FooterComponent,
    AdventureComponent,
    ResortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
