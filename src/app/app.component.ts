import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ObservableSimplesComponent } from './components/observable-simples/observable-simples.component';
import { SearchComponent } from './search/search.component';
import { SubjectComponent } from './components/subject/subject.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ObservableSimplesComponent, SearchComponent, SubjectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
