import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

interface ITodoInfosResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ITodoInfo {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private readonly _httpClient = inject(HttpClient);

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

  getTodoInfos(id: number): Observable<ITodoInfo> {
    return this._httpClient.get<ITodoInfosResponse>(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
      map((todoResponse) => {
        const newTodo: ITodoInfo = {
          id: todoResponse.id,
          title: todoResponse.title
        };

        return newTodo;
      }),
    );
  }

  obs1() {
    return new Observable((observer) => {
      observer.next(1);
      // observer.complete();

      return () => console.log('Limpeza 1');
    });
  }

  obs2() {
    return new Observable((observer) => {
      observer.next(2);
      // observer.complete();

      return () => console.log('Limpeza 2');
    });
  }
}
