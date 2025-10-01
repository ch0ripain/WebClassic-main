import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSubscriptions } from './profile-subscriptions';

describe('ProfileSubscriptions', () => {
  let component: ProfileSubscriptions;
  let fixture: ComponentFixture<ProfileSubscriptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSubscriptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSubscriptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
