import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-dot',
  standalone: true,
  imports: [],
  template: `
    <div
      class="[&>svg]:fill-classic-main-light [&>svg>g>path]:stroke-classic-main-light h-3 w-3 [&>svg>g>path]:stroke-[1]"
    >
      <svg
        class="h-full w-full"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_145_445)">
          <path
            d="M9.00021 17.3572C13.6157 17.3572 17.3574 13.6155 17.3574 9.00003C17.3574 4.3845 13.6157 0.642883 9.00021 0.642883C4.38469 0.642883 0.643066 4.3845 0.643066 9.00003C0.643066 13.6155 4.38469 17.3572 9.00021 17.3572Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_145_445">
            <rect width="18" height="18" fill="none" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgDot {}
