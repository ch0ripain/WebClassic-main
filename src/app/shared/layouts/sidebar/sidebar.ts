import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgReport } from '../../ui/svgs/svg-report';
import { SvgTicket } from '../../ui/svgs/svg-ticket';
import { SvgVip } from '../../ui/svgs/svg-vip';
import { SvgFriends } from '../../ui/svgs/svg-friends';
import { SvgCharacters } from '../../ui/svgs/svg-characters';
import { SvgUser } from '../../ui/svgs/svg-user';
import { SvgSignUp } from '../../ui/svgs/svg-sign-up';
import { SvgPlay } from '../../ui/svgs/svg-play';
import { SvgHome } from '../../ui/svgs/svg-home';
import { SvgX } from '../../ui/svgs/svg-x';
import { SidebarService } from './service/sidebar-service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgLoginUser } from '../../ui/svgs/svg-login-user';
import { SvgLogout } from '../../ui/svgs/svg-logout';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SvgReport,
    SvgTicket,
    SvgVip,
    SvgFriends,
    SvgCharacters,
    SvgUser,
    SvgSignUp,
    SvgPlay,
    SvgHome,
    SvgX,
    SvgLoginUser,
    SvgLogout,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  host: {
    '[class]': 'isOpen() ? "sidebar-is-open" : "sidebar-is-closed"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  private sidebarService = inject(SidebarService);
  public isOpen = this.sidebarService.isOpenSignal;

  toggle() {
    this.sidebarService.toggle();
  }
}
