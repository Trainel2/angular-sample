import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISection, ISectionStatus } from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  apiUrl = 'https://korawinsupply.com/api/glove/glove.php/section';

  constructor(
    private http: HttpClient
  ) { }

  listSection() {
    return this.http.get<ISectionStatus>(this.apiUrl);
  }

  insertSection(value: ISection) {
    return this.http.post(this.apiUrl, value);
  }
}
