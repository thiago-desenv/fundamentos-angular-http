import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchControl = new FormControl('');
  loading = false;
  resultado: string | null = null;

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      tap(() => {
        this.loading = true;
        this.resultado = null;
      }),
      switchMap(valor => this.buscarDadosApi(valor || ''))
    ).subscribe(res => {
      this.resultado = res;
      this.loading = false;
    });
  }

  buscarDadosApi(termo: string) {
    console.log('Buscando:', termo);
    return of(`Conteúdo retornado para: ${termo}`).pipe(delay(2000));
  }
}
