import {
  ChangeDetectionStrategy,
  Component,
  inject,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './shared/layouts/sidebar/sidebar';
import { Navbar } from './shared/layouts/navbar/navbar';
import { SidebarService } from './shared/layouts/sidebar/service/sidebar-service';
import { LocalStorageService } from './core/services/local-storage/local-storage-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Sidebar, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'themeClass()',
  },
})
export class App {
  protected title = 'gta-classic';
  sidebarService = inject(SidebarService);
  isOpen = this.sidebarService.isOpenSignal;
  localStorageService = inject(LocalStorageService);
  themeClass = computed(() => `theme-${this.localStorageService.theme()}`);
}
