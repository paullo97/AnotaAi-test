import { Injectable } from '@angular/core';
import { IItem } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json';

  getData(): Promise<Array<IItem>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(this.apiUrl)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      }, 1500);
    });
  }
}
