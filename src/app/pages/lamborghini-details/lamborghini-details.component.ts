import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lamborghini-details',
  templateUrl: './lamborghini-details.component.html',
  styleUrls: ['./lamborghini-details.component.scss']
})
export class LamborghiniDetailsComponent implements OnInit{
  _id:any;
  myLamborghini: any;

  constructor(private activatedRoute: ActivatedRoute, private lamborghiniService: CarsService){
    this.activatedRoute.paramMap.subscribe((params) => {
      this._id = params.get("id");
      this.lamborghiniService.getLamborghini(this._id).subscribe((data: any) => {
        console.log(data);
        this.myLamborghini = {...data};
      })
    })  
  }

  ngOnInit(): void {

  }

}
