import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  newLamborghini: any = {
    model: "",
    name: "",
    price: "",
    power_cv: "",
    max_speed: "",
    img: ""
  }
  newFerrari: any = {
    model: "",
    name: "",
    price: "",
    power_cv: "",
    max_speed: "",
    img: ""
  }
  constructor(private lamborghiniService: CarsService) { 
  }

  ngOnInit(): void {
  }

  enviarLamborghini(){
    console.log(this.newLamborghini);
    this.lamborghiniService.postLamborghini(this.newLamborghini).subscribe();
  }
  enviarFerrari(){
    console.log(this.newFerrari);
    this.lamborghiniService.postFerrari(this.newFerrari).subscribe();
  }

}
