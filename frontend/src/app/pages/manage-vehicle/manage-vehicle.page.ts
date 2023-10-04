import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './manage-vehicle.page.html',
  styleUrls: ['./manage-vehicle.page.scss']
})
export class ManageVehiclePage implements OnInit {

  manageVehicleForm!: FormGroup;
  idParam: string | null = this.route.snapshot.paramMap.get('id');
  vehicle: Vehicle = {
    brand: {
      name: ''
    },
    model: '',
    trim: '',
    engineType: '',
    mileage: 0,
    rentDuration: 0,
    transmission: '',
    price: 0,
    imgPath: ''
  };
  imgPath: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authSvc: AuthService,
  ) {}

  ngOnInit(): void {

    if(this.idParam != null) {
      let pageH1 = document.getElementById('manage-title');
      pageH1!.textContent = "Modify Vehicle";

      let btnSubmit = document.getElementById('btn-form-submit');
      btnSubmit!.textContent = "Modify Vehicle";

      this.vehicle.id = Number.parseInt(this.idParam);

      this.authSvc.getSingleVehicle( Number.parseInt(this.idParam) ).subscribe((value: any) => {
        this.vehicle = value;
        console.log(this.vehicle);
        this.manageVehicleForm.patchValue({
          brand: {
            name: this.vehicle.brand.name
          },
          model: this.vehicle.model,
          trim: this.vehicle.trim,
          engineType: this.vehicle.engineType,
          mileage: this.vehicle.mileage,
          rentDuration: this.vehicle.rentDuration,
          transmission: this.vehicle.transmission,
          price: this.vehicle.price,
        });
        this.imgPath = this.vehicle.imgPath;
      });
    }

    this.manageVehicleForm = this.fb.group({
      price: 0,
      imgPath: '',
      brand: this.fb.group({
        name: '',
      }),
      model: '',
      trim: '',
      mileage: 0,
      engineType: '',
      rentDuration: 0,
      transmission: '',
    })
  }

  OnSubmit() {

    this.manageVehicleForm.value.imgPath = this.manageVehicleForm.value.imgPath.replace('C:\\fakepath\\', 'assets/img/vehicles/');

    this.vehicle = this.manageVehicleForm.value;

    this.vehicle.mileage = Number.parseInt(this.manageVehicleForm.value.mileage);
    this.vehicle.rentDuration = Number.parseInt(this.manageVehicleForm.value.rentDuration);
    this.vehicle.id = Number.parseInt( this.idParam! );
    if ((this.manageVehicleForm.value.imgPath !== this.imgPath) && (this.manageVehicleForm.value.imgPath !== "")) {
      this.vehicle.imgPath = this.manageVehicleForm.value.imgPath;
    }else{
      this.vehicle.imgPath = this.imgPath;
    }

    this.authSvc.addVehicle(this.vehicle);
    this.manageVehicleForm.reset();
  }

}
