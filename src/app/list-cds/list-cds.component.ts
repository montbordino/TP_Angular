import { Component, OnInit } from '@angular/core';
import { CD } from 'src/app/models/cd';
import {CdsService} from "../services/cds.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})

export class ListCdsComponent implements OnInit {
  listcd$!: Observable<CD[]>;

  constructor(private myCDservice: CdsService) {}

  ngOnInit(): void {
    this.listcd$ = this.myCDservice.getAllCds();
  }
}
