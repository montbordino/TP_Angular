import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListCdsComponent} from "./list-cds/list-cds.component";
import {CdComponent} from "./cd/cd.component";
import {NewCDComponent} from "./new-cd/new-cd.component";

const ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: ListCdsComponent },
  { path: 'cd/:id', component: CdComponent },
  { path: 'new-cd', component: NewCDComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
