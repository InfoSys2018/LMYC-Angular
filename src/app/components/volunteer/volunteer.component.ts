import { Component, OnInit } from '@angular/core';
import { ClassificationCode } from '../../models/classification-code';
import { Report } from '../../models/report';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  report: Report;

  // volunteerForm = new FormGroup ({
  //   volunteerDate: new FormControl(),
  //   volunteerHours: new FormControl(),
  //   volunteerDesc: new FormControl()
  // });


  constructor(private fb: FormBuilder, private http: Http) { 
    this.report = new Report();
    this.report.date = new Date(); // This prevents a console error for reading a null date
  }

  // createForm() {
  //   this.volunteerForm = this.fb.group({
  //     volunteerDate: ['', Validators.required], 
  //     volunteerHours: ['', Validators.required], 
  //     volunteerDesc: ['', Validators.required], 
  //   })
  // }

  ngOnInit() {
  }

  
  loadClassificationCodes() {

  }  

  newReport() {

    console.log(this.report.date);
    console.log(this.report.numberHours);
    console.log(this.report.description);

    return this.http.post("https://localhost:44302" + "/api/Reports", this.report)
      .subscribe((data) => {}); 
  }
}
