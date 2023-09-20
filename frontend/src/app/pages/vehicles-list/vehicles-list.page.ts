import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './vehicles-list.page.html',
  styleUrls: ['./vehicles-list.page.scss']
})
export class VehiclesListPage implements OnInit {

  vehiclesArray: Vehicle[] = [];

  constructor(
    private authSvc: AuthService,
  ) {}

  ngOnInit(): void {
    this.authSvc.getAllVehicles().subscribe(
      (value: any) => {
        this.vehiclesArray = value.content;
      }
      )
  }

}
