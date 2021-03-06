import { Component, OnInit } from '@angular/core';
import { ClassificationCode } from '../../models/classification-code';
import { Report } from '../../models/report';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { AppComponent } from '../../app.component';
import { ReportService } from '../../services/report.service';
import { ClassificationcodeService } from '../../services/classificationcode.service';
import { AccountService } from '../../services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { User } from '../../models/user';


@Component({
  selector: 'volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
  providers: [ReportService, ClassificationcodeService]
})
export class VolunteerComponent implements OnInit {

  report: Report;
  validation: string;
  user: User;
  classCodes: ClassificationCode[] = new Array();
  username: string = sessionStorage.getItem('username');
  temp: string;

  ngOnInit() {
    this.report = new Report();
    this.report.dateCreated = new Date();
    this.displayUserInfo();
  }

  constructor(private fb: FormBuilder,
    private reportService: ReportService,
    private classService: ClassificationcodeService,
    private accountService: AccountService)
  {
    this.report = new Report();
    this.report.dateCreated = new Date(); // This prevents a console error for reading a null date
    this.validation = new Date().toISOString().slice(0, 10); // To run on the date picker, sets max date
    this.loadClassCodes();
  }

  loadClassCodes() {
    this.classService.getClassCodes()
    .then(classCodes => this.classCodes = classCodes);
  }

  displayUserInfo(): void {
    this.accountService.getUserByName(this.username)
      .subscribe(user => {
        this.user = user;
      });
  }

  // volunteerForm = new FormGroup ({
  //   volunteerDate: new FormControl(),
  //   volunteerHours: new FormControl(),
  //   volunteerDesc: new FormControl()
  // });

  // createForm() {
  //   this.volunteerForm = this.fb.group({
  //     volunteerDate: ['', Validators.required],
  //     volunteerHours: ['', Validators.required],
  //     volunteerDesc: ['', Validators.required],
  //   })
  // }

  newReport() {
    this.username = sessionStorage.getItem('username');
    this.report.userId = this.user.id;
    this.reportService.postReport(this.report)
      .then(response => console.log('success'));
  }
}
