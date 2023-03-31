import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { CD } from '../models/cd';
import { map } from 'rxjs/operators';
import { Router} from "@angular/router";
import { Validators } from '@angular/forms';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent implements OnInit{
  formulaire!: FormGroup;
  currentCD$!: Observable<CD>;

  constructor(
    private formBuilder: FormBuilder,
    private cdsService: CdsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    let unNouveauCD!: CD;
    let thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(1)]],
      price: [null,[Validators.required, Validators.minLength(1)]],
      thumbnail: [null, [Validators.required, Validators.pattern(thumbRegex)]],
      dateDeSortie: [null, [Validators.required, Validators.minLength(10)]],
      quantity: [null, Validators.required]
    },
    {
      updateOn: 'blur'
    });

    this.currentCD$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        price: formValue.price,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantity: formValue.quantity
      }
      )));
  }

  addCD() {
    let unNouveauCD: CD = {
      id: 0,
      title: this.formulaire.get('title')?.value,
      author: this.formulaire.get('author')?.value,
      price: this.formulaire.get('price')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantity: this.formulaire.get('quantity')?.value,
    }

    this.cdsService.createCD(unNouveauCD).subscribe();
    this.router.navigate(['']);
  }
}

