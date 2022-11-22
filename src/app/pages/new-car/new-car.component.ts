import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  carForm!: FormGroup;

  constructor(private carService: CarsService, private formBuilder: FormBuilder, private router: Router) { 
  }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      model: ["", [Validators.required]],
      name: ["", [Validators.required]],
      price: ["", [Validators.required]],
      power_cv: ["", [Validators.required]],
      max_speed: ["", [Validators.required]],
      img: ["", [Validators.required]],
    })
    this.carForm.valueChanges.subscribe((changes) => {
      this.newLamborghini = changes;
    })
  }

  onFileChange(event:any){
    const file = event.target.files[0];
    console.log(file);
    this.carForm.patchValue({
      img: file
    })
  }

  onSubmitLamborghini(){
    console.log(this.newLamborghini);
    const formData = new FormData;
    formData.append("model", this.carForm.get("model")?.value);
    formData.append("name", this.carForm.get("name")?.value);
    formData.append("price", this.carForm.get("price")?.value);
    formData.append("power_cv", this.carForm.get("power_cv")?.value);
    formData.append("max_speed", this.carForm.get("max_speed")?.value);
    formData.append("img", this.carForm.get("img")?.value);
    console.log(formData);
    this.carService.postLamborghini(formData).subscribe(() => this.router.navigate(["/lamborghini"]));
  }
  onSubmitFerrari(){
    console.log(this.newFerrari);
    const formData = new FormData;
    formData.append("model", this.carForm.get("model")?.value);
    formData.append("name", this.carForm.get("name")?.value);
    formData.append("price", this.carForm.get("price")?.value);
    formData.append("power_cv", this.carForm.get("power_cv")?.value);
    formData.append("max_speed", this.carForm.get("max_speed")?.value);
    formData.append("img", this.carForm.get("img")?.value);
    console.log(formData);
    this.carService.postFerrari(formData).subscribe(() => this.router.navigate(["/ferrari"]));
  }

}
