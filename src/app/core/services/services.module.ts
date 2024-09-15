import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
      DataService,
      StorageService,
      ToastService
    ]
})
export class ServicesModule
{ }
