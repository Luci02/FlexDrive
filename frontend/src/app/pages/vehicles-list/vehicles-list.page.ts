import { HttpParams } from '@angular/common/http';
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
    const params = new HttpParams()
        .set('size', 200)
        .set('sort', 'brand,asc');
    this.authSvc.getAllVehicles(params).subscribe(
      (value: any) => {
        this.vehiclesArray = value.content;
      })
  }

}
