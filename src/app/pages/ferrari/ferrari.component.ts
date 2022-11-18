import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferrari',
  templateUrl: './ferrari.component.html',
  styleUrls: ['./ferrari.component.scss']
})

export class FerrariComponent implements OnInit {

  myFerraris?: any[];

  constructor(private ferrariService: CarsService) {
    this.ferrariService.getAllFerraris().subscribe((data:any) => {
      console.log(data);
      this.myFerraris = [...data];
    })
  }

  ngOnInit(): void {
  }

}
