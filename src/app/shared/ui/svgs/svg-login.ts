import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-login',
  standalone: true,
  template: `
    <div class="h-6 w-6 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_43_234)">
          <path
            d="M6.4285 5.71422V2.14279C6.4285 1.76391 6.57901 1.40054 6.84692 1.13263C7.11483 0.864726 7.47819 0.714216 7.85707 0.714216H17.8571C18.236 0.714216 18.5993 0.864726 18.8672 1.13263C19.1351 1.40054 19.2856 1.76391 19.2856 2.14279V17.8571C19.2856 18.236 19.1351 18.5993 18.8672 18.8672C18.5993 19.1351 18.236 19.2856 17.8571 19.2856H7.85707C7.47819 19.2856 7.11483 19.1351 6.84692 18.8672C6.57901 18.5993 6.4285 18.236 6.4285 17.8571V14.2856"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.14272 10H13.5713"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7141 12.8569L13.5713 9.99979L10.7141 7.14265"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_43_234">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="matrix(-1 0 0 -1 20 20)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgLogin {}
