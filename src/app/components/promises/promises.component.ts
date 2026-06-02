import { Component, inject } from '@angular/core';
import { PromiseService } from './promise.service';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent {
  private readonly _promisesService = inject(PromiseService);

  ngOnInit() {
    this._promisesService.promiseSimples().then((value) => { console.log('Then', value) });

    this._promisesService.promiseRejected()
      .then((value) => { console.log('Resolved') })
      .catch((error) =>  {
        console.log('Catch ', error);
      })
      .finally(() =>  {
        console.log('Finally');
      });
  }
}
