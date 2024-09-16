import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { IItem } from '../../core/model/item.model';
import { EnumType } from '../../core/model/type.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should define type correctly based on input number', () => {
    expect(component.defineType(1)).toBe(EnumType.Paisagem);
    expect(component.defineType(2)).toBe(EnumType.Flor);
    expect(component.defineType(3)).toBe(EnumType.Pizza);
    expect(component.defineType(99)).toBe(EnumType.Paisagem);
  });

  it('should define class chip correctly based on input number', () => {
    expect(component.defineClassChip(1)).toBe('paisagem');
    expect(component.defineClassChip(2)).toBe('flor');
    expect(component.defineClassChip(3)).toBe('pizza');
    expect(component.defineClassChip(99)).toBe('paisagem');
  });

  it('should emit deleteItem event with the correct item on handleDeleteItem', () => {
    const testItem: IItem = {
      id: 0,
      title: '',
      description: '',
      img: '',
      type: 0
    };
    component.item = testItem;

    spyOn(component.deleteItem, 'emit');
    component.handleDeleteItem();

    expect(component.deleteItem.emit).toHaveBeenCalledWith(testItem);
  });
});
