import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  obsSimples() {
    // return of('Obs simples');

    return new Observable<string>((observer) => {
      console.log('Obs simples');
      observer.next('Obs simples');
    });
  }
}
