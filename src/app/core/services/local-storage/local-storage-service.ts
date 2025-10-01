import { Injectable, signal } from '@angular/core';

export type ThemeType = 'green' | 'orange';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly THEME_KEY = 'app-theme';
  private readonly DEFAULT_THEME: ThemeType = 'green';

  private _theme = signal<ThemeType>(this.getInitialTheme());
  public readonly theme = this._theme.asReadonly();

  public setTheme(theme: ThemeType): void {
    localStorage.setItem(this.THEME_KEY, theme);
    this._theme.set(theme);
  }

  public getTheme(): ThemeType {
    return this._theme();
  }

  private getInitialTheme(): ThemeType {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    return (savedTheme as ThemeType) || this.DEFAULT_THEME;
  }
}
