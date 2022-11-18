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
import { FormsModule } from '@angular/forms';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
