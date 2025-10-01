import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDescription } from './profile-description';

describe('ProfileDescription', () => {
  let component: ProfileDescription;
  let fixture: ComponentFixture<ProfileDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
