import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-user',
  standalone: true,
  template: `
    <div class="h-4 w-4 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_31_246)">
          <path
            d="M8.99986 8.99972C11.3076 8.99972 13.1784 7.12891 13.1784 4.82115C13.1784 2.51339 11.3076 0.642578 8.99986 0.642578C6.6921 0.642578 4.82129 2.51339 4.82129 4.82115C4.82129 7.12891 6.6921 8.99972 8.99986 8.99972Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.9456 17.3568C16.4059 15.6736 15.3455 14.2053 13.9175 13.1636C12.4895 12.1219 10.7675 11.5605 8.99991 11.5605C7.23231 11.5605 5.51036 12.1219 4.08233 13.1636C2.65431 14.2053 1.59397 15.6736 1.0542 17.3568H16.9456Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_31_246">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
})
export class SvgUser {}
