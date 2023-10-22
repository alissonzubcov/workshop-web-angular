import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router';
import { PoPageModule } from '@po-ui/ng-components';


const routes: Routes = [
  {
    path: '',
    component: ListagemComponent
  }

]


@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
    PoPageModule, 
    RouterModule.forChild(routes),
  ]
})
export class GamesModule { }
