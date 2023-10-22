import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { lastValueFrom } from 'rxjs';
import { GamesService } from 'src/shared/services/games/games.service';

@Component({
  selector: 'app-games-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  itemsTable: any[] = [];

  columns: PoTableColumn[] = [
    { property: 'name', label: "Name" },
    { property: 'developer.name', label: "Developer" },
    { property: 'punctuation', label: 'Punctuation', type: 'cellTemplate' },
  ];

  actions: Array<PoTableAction> = [
    {
      action: this.goToEdit.bind(this),
      icon: 'po-icon po-icon-edit',
      label: 'Edit Game',
      disabled: false,
    },
    {
      action: this.goToEdit.bind(this),
      icon: 'po-icon po-icon-delete',
      label: 'Delete Game',
      type: 'danger',
      disabled: false,
    }
  
  ];

  loading = false;

  constructor(private service: GamesService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.loading = true;
    await lastValueFrom(this.service.getAll())
      .then((resp: any) => this.itemsTable = resp.items)
      .finally(() => this.loading = false);
  }

  public goToRegister() {
    this.router.navigate(['register'], {relativeTo: this.activeRoute} );
  }

  public goToEdit(item: any) {
    this.router.navigate(['edit', item.id], {relativeTo: this.activeRoute} );
  }


  getColorPoTag(score: number) {
    if (score >= 90) {
      return 'color-10';
    } else {
      if (score >= 50 ) {
        return 'color-08';
      } else {
        return 'color-07';
      }
    }
  }
}
