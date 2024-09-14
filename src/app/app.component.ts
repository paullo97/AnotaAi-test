import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { CardComponent } from "./components/card/card.component";
import { ServicesModule } from './core/services/services.module';
import { DataService } from './core/services/data.service';
import { StorageService } from './core/services/storage.service';
import { IItem } from './core/model/item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchInputComponent,
    CardComponent,
    ServicesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public loading: boolean = true;
  public data: Array<IItem> = [];

  constructor(
    private readonly dataService: DataService,
    private readonly storage: StorageService
  )
  { }

  public ngOnInit(): void {
    this.dataService.getData()
      .then((response: Array<IItem>) => {
        this.data = response;
        this.storage.setItem('data', this.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  public searchItem(param: string): void
  {
    console.log(param);
  }

  public deleteItem(item: IItem): void {
    console.log(item);
  }
}
