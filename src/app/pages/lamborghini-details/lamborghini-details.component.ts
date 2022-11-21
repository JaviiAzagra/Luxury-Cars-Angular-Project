import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lamborghini-details',
  templateUrl: './lamborghini-details.component.html',
  styleUrls: ['./lamborghini-details.component.scss']
})
export class LamborghiniDetailsComponent implements OnInit{
  _id:any;
  myLamborghini: any;

  constructor(private activatedRoute: ActivatedRoute, private lamborghiniService: CarsService, private router: Router){
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

  deleteLamborghini(){
    this.lamborghiniService.deleteLamborghini(this._id).subscribe(()=> this.router.navigate(['/lamborghini']))
  }

}
