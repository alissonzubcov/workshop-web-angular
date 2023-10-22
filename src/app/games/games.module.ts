import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PoButtonModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { DirectivesModule } from 'src/shared/directives/directives.module';
import { CreationComponent } from './creation/creation.component';
import { ListingComponent } from './listing/listing.component';




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
    ReactiveFormsModule,
    PoPageModule,
    PoFieldModule,
    DirectivesModule,
    PoButtonModule,
    RouterModule.forChild(routes),
  ]
})
export class GamesModule { }
