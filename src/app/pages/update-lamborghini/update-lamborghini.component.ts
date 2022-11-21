import { CarsService } from './../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-lamborghini',
  templateUrl: './update-lamborghini.component.html',
  styleUrls: ['./update-lamborghini.component.scss'],
})
export class UpdateLamborghiniComponent implements OnInit {
  carForm!: FormGroup;
  updatedLamborghini!: any;
  _id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this._id = params.get('id');
      this.carService.getLamborghini(this._id).subscribe(data => {
        console.log(data);
        this.updatedLamborghini = data;

        this.carForm = this.formBuilder.group({
          model: [this.updatedLamborghini.model, [Validators.required]],
          name: [this.updatedLamborghini.name, [Validators.required]],
          price: [this.updatedLamborghini.price, [Validators.required]],
          power_cv: [this.updatedLamborghini.power_cv, [Validators.required]],
          max_speed: [this.updatedLamborghini.max_speed, [Validators.required]],
          img: [this.updatedLamborghini.img, [Validators.required]],
        })
      }); 
    })
    this.carForm.valueChanges.subscribe((changes) => {
      this.updatedLamborghini = changes;
    })
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.carForm.patchValue({
      img: file
    });
  }

  onSubmit(){
    console.log(this.updatedLamborghini);
    /* const formData =JSON.stringify(this.carForm.value); */
    const formData = new FormData();
    formData.append("model", this.carForm.get("model")?.value);
    formData.append("name", this.carForm.get("name")?.value);
    formData.append("price", this.carForm.get("price")?.value);
    formData.append("power_cv", this.carForm.get("power_cv")?.value);
    formData.append("max_speed", this.carForm.get("max_speed")?.value);
    formData.append("img", this.carForm.get("img")?.value);
    console.log(formData)
    this.carService.putLamborghini(this._id, formData).subscribe(() => this.router.navigate(['/lamborghini']))
  }

}
