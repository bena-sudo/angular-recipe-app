import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-sub-header',
  imports: [ReactiveFormsModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.css',
})
export class SubHeaderComponent {
  @Output() searchTerm = new EventEmitter<string>();
  searchControl: FormControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => this.searchTerm.emit(value));
  }
}
