import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgVip } from '../../../../../shared/ui/svgs/svg-vip';

@Component({
  selector: 'app-profile-subscriptions',
  imports: [SvgVip],
  templateUrl: './profile-subscriptions.html',
  styleUrl: './profile-subscriptions.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSubscriptions {}
