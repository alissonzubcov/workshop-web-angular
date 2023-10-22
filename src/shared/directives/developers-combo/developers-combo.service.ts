import { Injectable } from '@angular/core';
import { PoComboFilter, PoComboOption } from '@po-ui/ng-components';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DevelopersService } from 'src/shared/services/developers/developers.service';

@Injectable()
export class DevelopersComboService implements PoComboFilter {
  constructor(private service: DevelopersService) {}

  getFilteredData(params: any, filterParams?: any): Observable<PoComboOption[]> {
    return this.service.getAll().pipe(
      map( r => this.createOptions(r))
    );
  }

  getObjectByValue(value: string, filterParams?: any): Observable<PoComboOption> {
    return of();
  }

  private createOptions(response: any): PoComboOption[]{
    return response.map(this.createOption);
  }

  private createOption(item: any): PoComboOption {
    return {  label: item.name,
      value: item.id,};
  }

}
