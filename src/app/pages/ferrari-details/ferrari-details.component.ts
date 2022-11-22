import { CarsService } from './../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferrari-details',
  templateUrl: './ferrari-details.component.html',
  styleUrls: ['./ferrari-details.component.scss']
})
export class FerrariDetailsComponent implements OnInit{

  _id:any;
  myFerrari: any;

  constructor(private activatedRoute: ActivatedRoute, private ferrariService: CarsService, private router: Router){
    this.activatedRoute.paramMap.subscribe((params) => {
      this._id = params.get("id");
      this.ferrariService.getFerrari(this._id).subscribe((data: any) => {
        console.log(data);
        this.myFerrari = {...data};
      })
    })  
  }

  ngOnInit(): void {

  }

  deleteFerrari(){
    this.ferrariService.deleteFerrari(this._id).subscribe(()=> this.router.navigate(['/ferrari']))
  }

}
