import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-throphy',
  standalone: true,
  template: `
    <div class="h-6 w-6 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_56_180)">
          <path
            d="M10 12.7344V20.2251"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.42871 20.2246H13.5716"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.00007 8.23963C3.86343 8.23963 2.77334 7.76611 1.96961 6.92324C1.16588 6.08038 0.714355 4.9372 0.714355 3.74521V2.24707H5.71436V8.23963H5.00007Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.9999 8.23963C16.1366 8.23963 17.2267 7.76611 18.0304 6.92324C18.8341 6.08038 19.2856 4.9372 19.2856 3.74521V2.24707H14.2856V8.23963H14.9999Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.2858 8.23972C14.2858 9.43172 13.8343 10.5749 13.0305 11.4178C12.2268 12.2606 11.1367 12.7341 10.0001 12.7341C8.86343 12.7341 7.77334 12.2606 6.96961 11.4178C6.16588 10.5749 5.71436 9.43172 5.71436 8.23972V0.749023H14.2858V8.23972Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_56_180">
            <rect width="20" height="20.974" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
})
export class SvgThrophy {}
