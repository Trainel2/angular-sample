import { Component, OnInit, OnDestroy } from '@angular/core';
import { SectionService } from '../services/section.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ISection } from '../models/section';
import { Subscription } from 'rxjs';
declare const $: any;

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit, OnDestroy {

  sectionList: ISection[];
  subSectionList: Subscription;

  constructor(
    private sectionService: SectionService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getDataSectionList();
  }

  ngOnDestroy() {
    this.subSectionList.unsubscribe();
  }

  getDataSectionList() {
    this.spinner.show();
    this.subSectionList = this.sectionService.listSection().subscribe(
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
