import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { EmergencyContact } from './../../models/emergency-contact';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  province: string;
  mobileNumber: string;
  homePhone: string;
  workPhone: string;
  sailingQualification: string;
  ailingQualification: string;
  skills: string;
  sailingExperience: string;
  contact: string;

  name1: string;
  name2: string;
  phone1: string;
  phone2: string;


  constructor(
    private signupService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(signupForm: NgForm) {
    if (signupForm && signupForm.valid) {
      let contact: EmergencyContact = {
        name1: this.name1,
        name2: this.name2,
        phone1: this.phone1,
        phone2: this.phone2
      }
      let user: User = {
        UserName: this.userName,
        Email: this.email,
        Password: this.password,
        ConfirmPassword: this.confirmPassword,
        FirstName: this.firstName,
        LastName: this.lastName,
        Street: this.street,
        City: this.city,
        Province: this.province,
        PostalCode: this.postalCode,
        Country: this.country,
        MobilePhone: this.mobileNumber,
        HomePhone: this.homePhone,
        WorkPhone: this.workPhone,
        SailingQualifications: this.sailingQualification,
        Skills: this.skills,
        SailingExperience: this.sailingExperience,
        emergencyContacts: contact,
        MemberStatus: "Full Member",
        SkipperStatus: "Crew"
      }
      
      this.signupService.register(user)
        .subscribe(res => {
          this.router.navigateByUrl('/login');
        });
     }
     console.log(this.userName);
     console.log(this.email);
  }
}
