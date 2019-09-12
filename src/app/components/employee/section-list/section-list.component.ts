import { Component, OnInit } from '@angular/core';
import { SectionService } from '../services/section.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ISection } from '../models/section';
declare const $: any;

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  sectionList: ISection[];

  constructor(
    private sectionService: SectionService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getDataSectionList();
  }

  getDataSectionList() {
    this.spinner.show();
    this.sectionService.listSection().subscribe(
      (res) => {
        this.sectionList = res.data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.spinner.hide();
      }
    );
  }

}
