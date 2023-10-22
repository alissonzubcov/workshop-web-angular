import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { RouterModule, Routes } from '@angular/router';
import { PoPageModule } from '@po-ui/ng-components';
import { CreationComponent } from './creation/creation.component';


const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
    children: [
      {
        path: 'register',
        component: CreationComponent
      },
    ]
  },
]


@NgModule({
  declarations: [
    ListingComponent,
    CreationComponent
  ],
  imports: [
    CommonModule,
    PoPageModule, 
    RouterModule.forChild(routes),
  ]
})
export class GamesModule { }