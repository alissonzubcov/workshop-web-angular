import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoLoadingModule, PoPageModule, PoTableModule, PoTagModule } from '@po-ui/ng-components';
import { ListingComponent } from './listing/listing.component';



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
    PoLoadingModule,
    RouterModule.forChild(routes),
  ]
})
export class DevelopersModule { }
