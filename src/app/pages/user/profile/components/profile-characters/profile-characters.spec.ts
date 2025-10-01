import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCharacters } from './profile-characters';

describe('ProfileCharacters', () => {
  let component: ProfileCharacters;
  let fixture: ComponentFixture<ProfileCharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCharacters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCharacters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
