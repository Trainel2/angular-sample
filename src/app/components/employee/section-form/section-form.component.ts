import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SectionService } from '../services/section.service';

import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {

  form: FormGroup;
  response: any;

  constructor(
    private fb: FormBuilder,
    private sectionService: SectionService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      sectionID: [],
      sectionName: []
    });
  }

  onSubmit() {
    this.spinner.show();
    this.sectionService.insertSection(this.form.value).subscribe(
      (res) => {
        this.response = res;
        if (this.response.message === 'success') {
          this.sweetAlert(this.response);
        } else {
          this.sweetAlert(this.response);
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.form.reset();
        this.spinner.hide();
      }
    );
  }

  private sweetAlert(res: any) {
    Swal.fire({
      title: '',
      text: res.message,
      type: res.status,
    });
  }
}
