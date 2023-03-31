import { Component, Input, OnInit } from '@angular/core';
import { CD } from 'src/app/models/cd';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements OnInit{
   @Input() leCd!: CD; //recu par le template list-cd
   unCd!: CD; // utilisé dans le template cd
   idCd!: string;

  constructor(private myCDservice: CdsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idCd = this.route.snapshot.params['id'];
    if (this.idCd===undefined) {
      this.unCd = this.leCd;
    }
    else {
      this.myCDservice.getCDById(+this.idCd).subscribe(cd => this.unCd = cd);
    }
  }

   onAddCd() {
     this.leCd.quantity++;
   }

}
