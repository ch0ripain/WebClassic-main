import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgDot } from '../../../../../shared/ui/svgs/svg-dot';
import { SvgVip } from '../../../../../shared/ui/svgs/svg-vip';
import { SvgStaff } from '../../../../../shared/ui/svgs/svg-staff';
import { SvgChecked } from '../../../../../shared/ui/svgs/svg-checked';
import { SvgStar } from '../../../../../shared/ui/svgs/svg-star';
import { SvgSkull } from '../../../../../shared/ui/svgs/svg-skull';
import { SvgInfinite } from '../../../../../shared/ui/svgs/svg-infinite';
import { SvgThrophy } from '../../../../../shared/ui/svgs/svg-trophy';
import { SvgMoneyBag } from '../../../../../shared/ui/svgs/svg-money-bag';
import { SvgFire } from '../../../../../shared/ui/svgs/svg-fire';

@Component({
  selector: 'app-profile-description',
  imports: [
    SvgDot,
    SvgVip,
    SvgStaff,
    SvgChecked,
    SvgStar,
    SvgSkull,
    SvgInfinite,
    SvgThrophy,
    SvgMoneyBag,
    SvgFire,
  ],
  templateUrl: './profile-description.html',
  styleUrl: './profile-description.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDescription {}
