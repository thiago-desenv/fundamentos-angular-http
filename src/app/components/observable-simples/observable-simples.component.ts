import { Component, inject, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-observable-simples',
  templateUrl: './observable-simples.component.html',
  styleUrls: ['./observable-simples.component.css'],
  standalone: true,
})
export class ObservableSimplesComponent {
  private readonly _observableService = inject(ObservableService);

  ngOnInit() {
    this._observableService.obsSimples().subscribe((valor) => console.log(valor));
  }
}
