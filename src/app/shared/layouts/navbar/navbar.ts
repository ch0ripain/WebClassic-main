import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SvgDot } from '../../ui/svgs/svg-dot';
import { SvgUser } from '../../ui/svgs/svg-user';
import { SvgSignUp } from '../../ui/svgs/svg-sign-up';
import { SvgLoginUser } from '../../ui/svgs/svg-login-user';
import { SvgPlay } from '../../ui/svgs/svg-play';
import { SvgHome } from '../../ui/svgs/svg-home';
import { SvgMenu } from '../../ui/svgs/svg-menu';
import { SidebarService } from '../sidebar/service/sidebar-service';
import { SvgLogout } from '../../ui/svgs/svg-logout';
import { LocalStorageService } from '../../../core/services/local-storage/local-storage-service';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SvgDot,
    SvgUser,
    SvgSignUp,
    SvgLoginUser,
    SvgPlay,
    SvgHome,
    SvgMenu,
    SvgLogout,
    NgOptimizedImage,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private sidebarService = inject(SidebarService);
  public isOpen = this.sidebarService.isOpenSignal;
  protected localStorageService = inject(LocalStorageService);

  toggle() {
    this.sidebarService.toggle();
  }

  toggleTheme() {
    const nextTheme =
      this.localStorageService.getTheme() === 'green' ? 'orange' : 'green';
    this.localStorageService.setTheme(nextTheme);
  }
}
