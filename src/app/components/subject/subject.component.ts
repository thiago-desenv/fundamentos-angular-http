import { Component, inject } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  private readonly _subjectService = inject(SubjectService);

  dispararObs(num: number) {
    this._subjectService.emitValue(num);
  }
}
