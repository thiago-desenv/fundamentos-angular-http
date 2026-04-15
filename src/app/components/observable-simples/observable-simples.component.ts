import { Component, inject, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-simples',
  templateUrl: './observable-simples.component.html',
  styleUrls: ['./observable-simples.component.css'],
  standalone: true,
})
export class ObservableSimplesComponent {
  subs!: Subscription;

  private readonly _observableService = inject(ObservableService);

  ngOnInit() {
    // this._observableService.obsSimples().subscribe((valor) => console.log(valor));

    // this.subs = this._observableService.obsInterval().subscribe((valor) => console.log(valor));

    this._observableService.getTodoInfos(1).subscribe((response) => {
      console.log('Todo', response);
    });
  }

  unsubscribeInterval() {
    this.subs?.unsubscribe();
  }
}
