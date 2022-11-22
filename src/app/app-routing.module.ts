import { UpdateFerrariComponent } from './pages/update-ferrari/update-ferrari.component';
import { UpdateLamborghiniComponent } from './pages/update-lamborghini/update-lamborghini.component';
import { FerrariDetailsComponent } from './pages/ferrari-details/ferrari-details.component';
import { LamborghiniDetailsComponent } from './pages/lamborghini-details/lamborghini-details.component';
import { LamborghiniComponent } from './pages/lamborghini/lamborghini.component';
import { FerrariComponent } from './pages/ferrari/ferrari.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCarComponent } from './pages/new-car/new-car.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "lamborghini", component: LamborghiniComponent},
  {path: "lamborghini/:id", component: LamborghiniDetailsComponent},
  {path: "ferrari", component: FerrariComponent},
  {path: "ferrari/:id", component: FerrariDetailsComponent},
  {path: "contact", component: ContactComponent},
  {path: "newcar", component: NewCarComponent},
  {path: "updateLamborghini/:id", component: UpdateLamborghiniComponent},
  {path: "updateFerrari/:id", component: UpdateFerrariComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
