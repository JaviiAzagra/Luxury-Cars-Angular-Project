import { CarsService } from './../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-ferrari',
  templateUrl: './update-ferrari.component.html',
  styleUrls: ['./update-ferrari.component.scss']
})
export class UpdateFerrariComponent implements OnInit{

  ferrariForm!: FormGroup;
  updatedFerrari!: any;
  _id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarsService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((params) => {
      this._id = params.get("id");
      this.carService.getFerrari(this._id).subscribe(data => {
        console.log(data);
        this.updatedFerrari = data

        this.ferrariForm = this.formBuilder.group({
          model: [this.updatedFerrari.model, [Validators.required]],
          name: [this.updatedFerrari.name, [Validators.required]],
          price: [this.updatedFerrari.price, [Validators.required]],
          power_cv: [this.updatedFerrari.power_cv, [Validators.required]],
          max_speed: [this.updatedFerrari.max_speed, [Validators.required]],
          img: [this.updatedFerrari.img, [Validators.required]],
        })
      });
    })
    this.ferrariForm.valueChanges.subscribe((changes) => {
      this.updatedFerrari = changes
    })
  }

  onFileChange(event: any) {
    const file = event.target.file[0];
    console.log(file);
    this.ferrariForm.patchValue({
      img: file
    });
  }

  onSubmitFerrari(){
    console.log(this.updatedFerrari);
    const formData = new FormData();
    formData.append("model", this.ferrariForm.get("model")?.value);
    formData.append("name", this.ferrariForm.get("name")?.value);
    formData.append("price", this.ferrariForm.get("price")?.value);
    formData.append("power_cv", this.ferrariForm.get("power_cv")?.value);
    formData.append("max_speed", this.ferrariForm.get("max_speed")?.value);
    formData.append("img", this.ferrariForm.get("img")?.value);
    this.carService.putFerrari(this._id, formData).subscribe(() => this.router.navigate(["/ferrari"]));
  }
}
