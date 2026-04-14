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
      observer.next('Obs simples 1');
      observer.next('Obs simples 2');
      observer.next('Obs simples 3');
      observer.next('Obs simples 4');
    });
  }

  obsInterval() {
    return new Observable((observer) => {
      console.log('obsInterval');

      const interval = setInterval(() => {
        console.log('setInterval');
        observer.next('obsInterval');
      }, 2000);

      return () => {
        console.log('Limpeza');
        observer.complete();
        clearInterval(interval);
      }
    });
  }
}
