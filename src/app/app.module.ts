import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { HistoryComponent } from './components/about/history/history.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';
import { MembershipComponent } from './components/membership/membership.component';
import { MyAccountComponent } from './components/myaccount/myaccount.component';
import { ReservationsComponent } from './components/myaccount/reservations/reservations.component';
import { HomeComponent } from './components/home/home.component';
import { HomeAboutComponent } from './components/home/sections/home.about/home.about.component';
import { HomeBookingComponent } from './components/home/sections/home.booking/home.booking.component';
import { HomeEventsComponent } from './components/home/sections/home.events/home.events.component';
import { HomeBoatImagesComponent } from './components/home/sections/home.boatimages/home.boatimages.component';
import { MyAccountEmergencyContactsComponent } from './components/myaccount/sections/myaccount.emergencycontacts/myaccount.emergencycontacts.component';
import { MembershipModalSignupComponent } from './components/membership/sections/membership.modalsignup/membership.modalsignup.component';
import { MembershipRulesAndRegulationsComponent } from './components/membership/sections/membership.rulesandregulations/membership.rulesandregulations.component';
import { FaqComponent } from './components/faq/faq.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { ContactUsComponent } from './components/contactus/contactus.component';
import { ReportComponent } from './components/report/report.component'


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    FleetComponent,
    HistoryComponent,
    BookingComponent,
    FooterComponent,
    MembershipComponent,
    MembershipModalSignupComponent,
    MembershipRulesAndRegulationsComponent,
    MyAccountComponent,
    MyAccountEmergencyContactsComponent,
    ReservationsComponent,
    HomeAboutComponent,
    HomeBookingComponent,
    HomeEventsComponent,
    HomeBoatImagesComponent,
    FaqComponent,
    VolunteerComponent,
    ContactUsComponent,
    ReportComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(), // for angular calendar
    NgbModule.forRoot(), // for angular boostrap
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'fleet', component:FleetComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'home', component: HomeComponent },
      { path: 'membership', component: MembershipComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: 'about', component: AboutComponent},
      { path: 'membership', component: MembershipComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'report', component: ReportComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
