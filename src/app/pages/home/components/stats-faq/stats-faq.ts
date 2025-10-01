import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgArrowRight } from '../../../../shared/ui/svgs/svg-arrow-right';
import { SvgStaff } from '../../../../shared/ui/svgs/svg-staff';
import { SvgTicket } from '../../../../shared/ui/svgs/svg-ticket';
import { SvgFaction } from '../../../../shared/ui/svgs/svg-faction';
import { SvgUser } from '../../../../shared/ui/svgs/svg-user';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-stats-faq',
  imports: [
    SvgArrowRight,
    SvgStaff,
    SvgTicket,
    SvgFaction,
    SvgUser,
    NgOptimizedImage,
  ],
  templateUrl: './stats-faq.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    details::details-content {
      block-size: 0;
      transition:
        block-size 0.4s,
        content-visibility 0.4s;
      transition-behavior: allow-discrete;
    }

    details[open]::details-content {
      block-size: auto;
    }
  `,
})
export class StatsFaq {}
