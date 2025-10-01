import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpen = signal(false);

  toggle() {
    this.isOpen.update((value) => !value);
  }

  get isOpenSignal() {
    return this.isOpen.asReadonly();
  }
}
