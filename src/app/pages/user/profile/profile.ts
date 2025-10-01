import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { ProfileDescription } from './components/profile-description/profile-description';
import { ProfileCharacters } from './components/profile-characters/profile-characters';
import { ProfileSubscriptions } from './components/profile-subscriptions/profile-subscriptions';
import { ProfileDescriptionSkeleton } from './components/ui/profile-description-skeleton/profile-description-skeleton';
import { ProfileCharactersSkeleton } from './components/ui/profile-characters-skeleton/profile-characters-skeleton';
import { ProfileSubscriptionsSkeleton } from './components/ui/profile-subscriptions-skeleton/profile-subscriptions-skeleton';
import { FooterSmall } from '../../../shared/layouts/footer/footer-small/footer-small';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    ProfileDescription,
    ProfileCharacters,
    ProfileSubscriptions,
    ProfileDescriptionSkeleton,
    ProfileCharactersSkeleton,
    ProfileSubscriptionsSkeleton,
    FooterSmall,
    NgOptimizedImage,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfile implements OnInit {
  public userId = input.required<string>();
  public isLoading = signal(true);
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 3000);
  }
}
