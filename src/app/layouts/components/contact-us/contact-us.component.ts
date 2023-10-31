import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: SharedServiceService
  ) {
    this.contactUsForm = this.formBuilder.group({
      name: [''],
      mail: [''],
      phone: [''],
    });
  }
  ngOnInit(): void {}

  sendContactData() {
    this.service
      .postContactData(this.contactUsForm.getRawValue())
      .subscribe((res: any) => {
        debugger;
      });
  }
}
