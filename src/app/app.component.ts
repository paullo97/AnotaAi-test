import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { CardComponent } from "./components/card/card.component";
import { ServicesModule } from './core/services/services.module';
import { DataService } from './core/services/data.service';
import { StorageService } from './core/services/storage.service';
import { IItem } from './core/model/item.model';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './core/services/toast.service';
import { LoadingComponent } from "./components/loading/loading.component";
import { NoResultComponent } from "./components/no-result/no-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchInputComponent,
    CardComponent,
    ServicesModule,
    ToastComponent,
    LoadingComponent,
    NoResultComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public textSeach: string = '';
  public loading: boolean = true;
  public data: Array<IItem> = [];
  public filteredData: Array<IItem> = [];
  public enableFilter: boolean = false;

  constructor(
    private readonly dataService: DataService,
    private readonly storage: StorageService,
    private readonly toast: ToastService
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
        this.toast.showToast({
          title: 'Error',
          message: 'Error in Get Data!',
          type: 'error',
          duration: 4000
        });
      })
      .finally(() => {
        this.loading = false;
      });
  }

  public searchItem(param: string): void
  {
    const text = param.trim().toLowerCase();
    this.textSeach = param;
    this.enableFilter = text.length > 0;
    this.filteredData = this.data.filter((item: IItem) =>
      item.title.toLowerCase().includes(text) ||
      item.description.toLowerCase().includes(text)
    )
  }

  public deleteItem(item: IItem): void {
    this.storage.deleteItemById('data', item.id.toString());
    this.data = this.storage.getItem('data');
    this.toast.showToast({
      title: 'Success',
      message: 'Operation completed successfully!',
      type: 'success',
      duration: 4000
    });

    if(this.enableFilter) {
      this.searchItem(this.textSeach);
    }
  }
}
