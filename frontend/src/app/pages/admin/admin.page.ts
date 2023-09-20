import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPage implements OnInit {

  vehicleArray!: Vehicle[];

  constructor(
    private authSvc: AuthService,
  ) {}

  ngOnInit(): void {
    this.authSvc.getAllVehicles().subscribe((value: any) => {
      this.vehicleArray = value.content;
      console.log(this.vehicleArray);
    });

  }

  OnDelete(id: Number): void {
    this.authSvc.deleteVehicle(id).subscribe((value: any) => {
      console.log(value);
      this.vehicleArray = this.vehicleArray.filter(vehicle => vehicle.id !== id);
    })
  }

}
