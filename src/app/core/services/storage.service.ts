import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  searchItems(key: string, searchTerm: string): any[] {
    const items = this.getItem(key);
    if (items && Array.isArray(items)) {
      return items.filter(item => JSON.stringify(item).includes(searchTerm));
    }
    return [];
  }

  deleteItemById(key: string, id: string): void {
    const items = this.getItem(key);
    if (items && Array.isArray(items)) {
      const updatedItems = items.filter(item => item.id !== id);
      this.setItem(key, updatedItems);
    }
  }
}
