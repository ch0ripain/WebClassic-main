import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-eye-open',
  imports: [],
  template: `
    <div
      class="[&>svg>path]:stroke-classic-black h-4 w-4 [&>svg>path]:stroke-[1]"
    >
      <svg
        class="h-full w-full"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.2298 6.33C13.3957 6.51375 13.4875 6.75248 13.4875 7C13.4875 7.24752 13.3957 7.48625 13.2298 7.67C12.1798 8.8 9.78985 11 6.99985 11C4.20985 11 1.81985 8.8 0.769846 7.67C0.604006 7.48625 0.512207 7.24752 0.512207 7C0.512207 6.75248 0.604006 6.51375 0.769846 6.33C1.81985 5.2 4.20985 3 6.99985 3C9.78985 3 12.1798 5.2 13.2298 6.33Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgEyeOpen {}
