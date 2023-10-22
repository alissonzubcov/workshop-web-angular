import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService, PoPageSlideComponent } from '@po-ui/ng-components';
import { DevelopersComboDirective } from 'src/shared/directives/developers-combo/developers-combo.directive';
import { GamesService } from 'src/shared/services/games/games.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
  providers: [DevelopersComboDirective]
})
export class CreationComponent implements OnInit {

  @ViewChild(PoPageSlideComponent, { static: true }) poPageSlide!: PoPageSlideComponent;

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: GamesService, private poNotification: PoNotificationService, private router: Router, private activeRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.poPageSlide.open();
    this.form = this.buildFormRegister();
  }

  public save() {
    if (this.form.valid) {
      this.service.register(this.form.value).subscribe(
        () => {
          this.poNotification.success('Registed with success!')
          this.poPageSlide.close();
          this.goBack();
        }
      );

    }
  }

  goBack(){
    this.router.navigate([".."], {relativeTo: this.activeRoute})
  }

  private buildFormRegister() {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      developer: ['', [Validators.required]],
      punctuation: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

}
