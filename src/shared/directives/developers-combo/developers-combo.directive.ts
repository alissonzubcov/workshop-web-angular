import { Directive } from '@angular/core';
import { PoComboComponent } from '@po-ui/ng-components';
import { DevelopersComboService } from './developers-combo.service';

@Directive({
  selector: '[developersCombo]',
  providers: [DevelopersComboService],
})
export class DevelopersComboDirective {
  constructor(combo: PoComboComponent, service: DevelopersComboService) {
    combo.label = "Developer";
    combo.placeholder = "Select";
    combo.clean = true;
    combo.debounceTime = 500;
    combo.setService(service);
  }

}
