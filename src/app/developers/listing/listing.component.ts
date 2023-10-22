import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { lastValueFrom } from 'rxjs';
import { DeveloperListing } from 'src/shared/models/developers.model';
import { DevelopersService } from 'src/shared/services/developers/developers.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {


  itemsTable: DeveloperListing[] = [];


  columns: PoTableColumn[] = [
    { property: 'name', label: "Name" },
  ];

  constructor(private service: DevelopersService) {}

  async ngOnInit(): Promise<void> {
    await lastValueFrom(this.service.getAll())
    .then((resp) => this.itemsTable = resp);
  }

}
