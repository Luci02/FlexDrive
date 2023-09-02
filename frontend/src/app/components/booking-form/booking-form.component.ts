import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { HomepageForm } from 'src/app/models/homepage-form';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit, AfterViewInit {

  @ViewChild('homePageForm') form!: NgForm;

  private data: HomepageForm = new HomepageForm('', '', '', '', '');

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  public onSubmit(): void {

    this.data.setName( this.form.value.nome );
    this.data.setSurname( this.form.value.surname );
    this.data.setEmail( this.form.value.email );
    this.data.setPhoneNumber( this.form.value.phoneNumber );
    this.data.setDescription( this.form.value.myTextArea );

    console.log('Dati form: ', this.data);
  }

}
