import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styleUrls: ['./lamborghini.component.scss']
})
export class LamborghiniComponent implements OnInit{

  myLamborghinis?: any[];

  constructor(private lamborghiniService: CarsService) {
    this.lamborghiniService.getAllLamborghini().subscribe((data:any) => {
      console.log(data);
      this.myLamborghinis = [...data];
    })
  }

  ngOnInit(): void {
  }

}
