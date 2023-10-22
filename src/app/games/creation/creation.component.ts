import { Component, OnInit, ViewChild } from '@angular/core';
import { PoPageSlideComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  @ViewChild(PoPageSlideComponent, { static: true }) poPageSlide!: PoPageSlideComponent;


  ngOnInit(): void {
    this.poPageSlide.open();
  }

}
