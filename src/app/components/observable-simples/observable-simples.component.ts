import { Component, inject, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-observable-simples',
  templateUrl: './observable-simples.component.html',
  styleUrls: ['./observable-simples.component.css'],
  standalone: true,
})
export class ObservableSimplesComponent {
  subs!: Subscription;
  subsSwitchMap!: Subscription;

  private readonly _observableService = inject(ObservableService);

  ngOnInit() {
    // this._observableService.obsSimples().subscribe((valor) => console.log(valor));

    // this.subs = this._observableService.obsInterval().subscribe((valor) => console.log(valor));

    // this._observableService.getTodoInfos(1).subscribe((response) => {
    //   console.log('Todo', response);
    // });

    this.subsSwitchMap = this._observableService.obs1().pipe(
      switchMap((valueObs1) => {
        console.log('valueObs1', valueObs1);

        return this._observableService.obs2();
      }),
    ).subscribe((valueObs2) => console.log('valueObs2', valueObs2));
  }

  unsubscribeInterval() {
    this.subs?.unsubscribe();
  }

  unsubscribeSwitchMap() {
    this.subsSwitchMap?.unsubscribe();
  }
}
