import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgPlay } from '../../../../shared/ui/svgs/svg-play';
import { SvgRockstar } from '../../../../shared/ui/svgs/svg-rockstar';
import { SvgEpicGames } from '../../../../shared/ui/svgs/svg-epic-games';
import { SvgSteam } from '../../../../shared/ui/svgs/svg-steam';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-how-to-play',
  imports: [SvgPlay, SvgRockstar, SvgEpicGames, SvgSteam, NgOptimizedImage],
  templateUrl: './how-to-play.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowToPlay {}
