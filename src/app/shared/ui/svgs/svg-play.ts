import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-play',
  imports: [],
  template: `
    <div class="h-4 w-4 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_31_230)">
          <path
            d="M1.63647 16.016C1.64109 16.2839 1.71904 16.5454 1.86184 16.7721C2.00465 16.9987 2.20685 17.1819 2.44647 17.3018C2.68576 17.437 2.95592 17.508 3.23076 17.508C3.5056 17.508 3.77576 17.437 4.01505 17.3018L15.1365 10.4232C15.3785 10.3066 15.5826 10.1241 15.7255 9.89666C15.8684 9.66922 15.9442 9.40607 15.9442 9.13747C15.9442 8.86887 15.8684 8.60572 15.7255 8.37827C15.5826 8.15083 15.3785 7.96833 15.1365 7.85175L4.01505 1.02461C3.77576 0.889408 3.5056 0.818359 3.23076 0.818359C2.95592 0.818359 2.68576 0.889408 2.44647 1.02461C2.20685 1.14442 2.00465 1.32762 1.86184 1.5543C1.71904 1.78097 1.64109 2.04245 1.63647 2.31032V16.016Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_31_230">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgPlay {}
