import { NgModule } from "@angular/core";
import { DevelopersComboDirective } from "./developers-combo/developers-combo.directive";


@NgModule({
    declarations: [
      DevelopersComboDirective
    ],
    exports: [
      DevelopersComboDirective
    ]
  })
  export class DirectivesModule { }