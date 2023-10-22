import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { RouterModule, Routes } from '@angular/router';
import { PoPageModule, PoTableModule, PoTagModule  } from '@po-ui/ng-components';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
  },
]

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    PoPageModule,
    PoTableModule,
    PoTagModule,
    RouterModule.forChild(routes),
  ]
})
export class DevelopersModule { }
