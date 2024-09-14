import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { IItem } from '../../core/model/item.model';
import { EnumType } from '../../core/model/type.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  public item: IItem | undefined;

  @Output()
  public deleteItem: EventEmitter<IItem> = new EventEmitter<IItem>();

  public defineType(type: number): string {
    return {
      1: EnumType.Paisagem,
      2: EnumType.Flor,
      3: EnumType.Pizza
    }[type] || EnumType.Paisagem
  }

  public defineClassChip(type: number): string {
    return {
      1: 'paisagem',
      2: 'flor',
      3: 'pizza'
    }[type] || 'paisagem'
  }

  public handleDeleteItem(): void {
    this.deleteItem.emit(this.item);
  }
}
