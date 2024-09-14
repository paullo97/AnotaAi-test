import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  public text: string = '';

  public Search(word: string): void
  {
    this.search.emit(word);
  }
}
