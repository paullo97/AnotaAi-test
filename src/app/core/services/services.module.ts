import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { StorageService } from './storage.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
      DataService,
      StorageService
    ]
})
export class ServicesModule
{ }
