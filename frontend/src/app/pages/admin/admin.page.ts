import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPage implements OnInit {

  vehicleArray!: Vehicle[];

  collectionSize: number = 0;
  page:number = 0;
  pageSize: number = 0;

  constructor(
    private authSvc: AuthService,
  ) {}

  ngOnInit(): void {
    this.pageChange(this.page);
  }

  OnDelete(id: Number): void {
    this.authSvc.deleteVehicle(id).subscribe((value: any) => {
      console.log(value);
      this.vehicleArray = this.vehicleArray.filter(vehicle => vehicle.id !== id);
    })
  }

  pageChange($event: any) {
    window.scroll(0,0);

    const params = new HttpParams()
        .set('page', this.page - 1)
        .set('sort', 'brand,asc')
        .append('sort', 'model,asc');

    this.authSvc.getAllVehicles(params).subscribe(
      (value: any) => {
        this.pageSize = value.size;
        this.collectionSize = value.totalElements;
        this.vehicleArray = value.content;
      })
  }

}
