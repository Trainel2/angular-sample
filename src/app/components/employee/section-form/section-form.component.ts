import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SectionService } from '../services/section.service';

import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISection } from '../models/section';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit, OnDestroy {

  id: string;
  form: FormGroup;
  response: any;

  getValueFromID: ISection[];

  subGetValueFromID: Subscription;
  subSectionService: Subscription;

  constructor(
    private fb: FormBuilder,
    private sectionService: SectionService,
    private spinner: NgxSpinnerService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params.id;
    this.initializeForm();

    if (this.id) {
      this.getSectionFromID(this.id);
    }
  }

  ngOnDestroy() { }

  initializeForm() {
    this.form = this.fb.group({
      sectionID: [],
      sectionName: []
    });
  }

  onSubmit() {
    this.spinner.show();

    if (!this.id) {
      // insert data
      this.subSectionService = this.sectionService.insertSection(this.form.value).subscribe(
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
          this.subSectionService.unsubscribe();
        }
      );
    } else {
      console.log('edit');

    }
  }

  private getSectionFromID(id: string) {
    this.spinner.show();
    this.subGetValueFromID = this.sectionService.getSectionByID(id).subscribe(
      (res) => {
        this.getValueFromID = res.data;
        this.form.controls.sectionID.setValue(this.getValueFromID[0].section_id);
        this.form.controls.sectionName.setValue(this.getValueFromID[0].section_name);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.spinner.hide();
        this.subGetValueFromID.unsubscribe();
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
