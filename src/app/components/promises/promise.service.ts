import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  promiseSimples() {
    return new Promise((resolve, reject) => {
      console.log('Promise Simples');

      const interval = setInterval(() => {
        console.log('setInterval');
        resolve('Promise Resolved');
        clearInterval(interval);
      }, 1000);

      console.log('Final Promise');
    });
  }

  promiseRejected() {
    return new Promise((resolve, reject) =>  {
      console.log('Promise rejected');

      reject(new Error('Ocorreu um erro'));

      console.log('Final')
    });
  }
}
