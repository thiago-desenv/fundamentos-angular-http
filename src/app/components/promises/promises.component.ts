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
    this._promisesService.getPromiseInterval().then((value) => {
      console.log('Then', value);
    });

    // this._promisesService.promiseSimples().then((value) => { console.log('Then', value) });

    // console.log('1');

    // this._promisesService.promiseRejected()
    //   .then((value) => { console.log('Resolved') })
    //   .catch((error) =>  {
    //     console.log('Catch ', error);
    //   })
    //   .finally(() =>  {
    //     console.log('Finally');
    //   });

    //   console.log('2');
  }

  promisseAll() {
    Promise.all([
      this._promisesService.getUsers(),
      this._promisesService.getTodos()
    ])
    .then((response) => { console.log('Response', response); })
    .catch((error) => { console.log('Error', error); })
    .finally(() => console.log('Finally'));
  }

  promiseRace() {
   Promise.race([
    this._promisesService.getUsers(),
    this._promisesService.getTodos()
   ])
   .then((response) => { console.log('Response', response); })
   .catch((error) => { console.log('Error ', error); })
   .finally(() => console.log('Finally'));
  }

  promiseAny() {
   Promise.any([
    this._promisesService.getUsers(),
    this._promisesService.getTodos()
   ])
   .then((response) => { console.log('Response', response); })
   .catch((error) => { console.log('Error ', error); })
   .finally(() => console.log('Finally'));
  }

  promiseAllSettled() {
   Promise.allSettled([
    this._promisesService.getUsers(),
    this._promisesService.getTodos()
   ])
   .then((response) => { console.log('Response', response); })
   .catch((error) => { console.log('Error ', error); })
   .finally(() => console.log('Finally'));
  }

  async userTodos() {
    try {
      console.log('User Todos');

      const userList: any[] = await this._promisesService.getUsers() as any[];
      const userTodos = await this._promisesService.getUserTodos(userList[0].id);
      console.log('Response User Todos: ', userTodos);
    } catch(error) {
      console.log('Catch', error);
    }

    // this._promisesService.getUsers().then((response: any) => {
    //   this._promisesService.getUserTodos(response[0].id).then((userTodos) => { console.log(userTodos) });
    // })
  }
}
