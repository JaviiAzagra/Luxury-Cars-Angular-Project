import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LamborghiniComponent } from './pages/lamborghini/lamborghini.component';
import { FerrariComponent } from './pages/ferrari/ferrari.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FerrariDetailsComponent } from './pages/ferrari-details/ferrari-details.component';
import { LamborghiniDetailsComponent } from './pages/lamborghini-details/lamborghini-details.component';
import { NewCarComponent } from './pages/new-car/new-car.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateLamborghiniComponent } from './pages/update-lamborghini/update-lamborghini.component';
import { UpdateFerrariComponent } from './pages/update-ferrari/update-ferrari.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LamborghiniComponent,
    FerrariComponent,
    ContactComponent,
    FerrariDetailsComponent,
    LamborghiniDetailsComponent,
    NewCarComponent,
    NavbarComponent,
    FooterComponent,
    UpdateLamborghiniComponent,
    UpdateFerrariComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
