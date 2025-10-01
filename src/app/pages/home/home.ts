import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgPlay } from '../../shared/ui/svgs/svg-play';
import { HowToPlay } from './components/how-to-play/how-to-play';
import { Experience } from './components/experience/experience';
import { StatsFaq } from './components/stats-faq/stats-faq';
import { Footer } from '../../shared/layouts/footer/footer';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SvgPlay, HowToPlay, Experience, StatsFaq, Footer, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
