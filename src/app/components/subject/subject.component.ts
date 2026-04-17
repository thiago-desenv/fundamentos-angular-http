import { Component, inject } from '@angular/core';
import { SubjectService } from './subject.service';
import { ConsumidorComponent } from './components/consumidor/consumidor.component';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [ConsumidorComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  showConsumidor = false;
  private readonly _subjectService = inject(SubjectService);

  dispararObs(num: number) {
    this._subjectService.emitValue(num);
  }
}
