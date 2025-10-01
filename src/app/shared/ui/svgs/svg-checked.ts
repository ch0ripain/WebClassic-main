import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-checked',
  imports: [],
  template: `
    <div class="h-6 w-6 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_53_138)">
          <path
            d="M5.14307 10.2854L7.77878 12.394C7.84957 12.4523 7.93245 12.4941 8.02142 12.5163C8.11038 12.5386 8.20318 12.5407 8.29307 12.5226C8.38382 12.5056 8.46983 12.4692 8.54527 12.4159C8.6207 12.3627 8.68378 12.2938 8.73021 12.214L12.8574 5.14258"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.00021 17.3569C13.6157 17.3569 17.3574 13.6152 17.3574 8.99972C17.3574 4.3842 13.6157 0.642578 9.00021 0.642578C4.38469 0.642578 0.643066 4.3842 0.643066 8.99972C0.643066 13.6152 4.38469 17.3569 9.00021 17.3569Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_53_138">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgChecked {}
