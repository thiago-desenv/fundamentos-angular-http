import { Component, inject, OnInit } from '@angular/core';
import { SubjectService } from '../../subject.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class ConsumidorComponent implements OnInit {
  valueChanged$: Observable<number> = of(0);
  private readonly _subjectService = inject(SubjectService);

  ngOnInit(): void {
    this.valueChanged$ = this._subjectService.valueChanged();
  }
}
