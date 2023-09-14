import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagePage } from './pages/homepage/homepage.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HowToComponent } from './components/how-to/how-to.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FAQComponent } from './components/faq/faq.component';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { VehiclesListPage } from './pages/vehicles-list/vehicles-list.page';

@NgModule({
  declarations: [
    AppComponent,
    HomepagePage,
    HeaderComponent,
    NavbarComponent,
    BookingFormComponent,
    HowToComponent,
    FooterComponent,
    AboutComponent,
    FAQComponent,
    LoginPage,
    RegisterPage,
    VehiclesListPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
