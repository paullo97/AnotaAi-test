import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the search event when Search method is called', () => {
    const word: string = 'test';

    spyOn(component.search, 'emit');
    component.Search(word);

    expect(component.search.emit).toHaveBeenCalledWith(word)
  });

  it('should update text value when input changes (ngModel)', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    inputElement.value = 'test input';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.text).toBe('test input');
  });

  it('should update the input value when text property changes', async () => {

    component.text = 'new value test';
    fixture.detectChanges();

    await fixture.whenStable();

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    expect(inputElement.value).toBe('new value test');
  });

  it('should NOT update the input value when text property changes', async () => {
    component.text = 'new value test';
    fixture.detectChanges();

    await fixture.whenStable();

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    expect(inputElement.value).not.toBe('');
  });
});
