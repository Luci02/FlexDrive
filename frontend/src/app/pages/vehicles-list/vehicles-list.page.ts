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

  collectionSize: number = 0;
  page:number = 0;
  pageSize: number = 0;

  constructor(
    private authSvc: AuthService,
  ) {}

  ngOnInit(): void {
    this.pageChange(this.page);
  }

  pageChange($event: any) {
    const params = new HttpParams()
      .set('page', this.page - 1)
      .set('sort', 'brand,asc')
      .append('sort', 'model,asc');

    this.authSvc.getAllVehicles(params).subscribe(
      (value: any) => {
        this.pageSize = value.size;
        this.collectionSize = value.totalElements;
        this.vehiclesArray = value.content;
      })
    window.scroll(0,0);
  }

}
