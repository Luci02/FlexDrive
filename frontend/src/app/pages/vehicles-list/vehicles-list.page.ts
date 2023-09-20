import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './vehicles-list.page.html',
  styleUrls: ['./vehicles-list.page.scss']
})
export class VehiclesListPage implements OnInit {

  constructor(
    private authSvc: AuthService,
  ) {}

  ngOnInit(): void {
    this.authSvc.getAllVehicles().subscribe(
      (value: any) => {
        console.log(value);
      }
    )
  }

}
