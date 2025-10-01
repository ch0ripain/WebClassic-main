import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-sign-up',
  standalone: true,
  imports: [],
  template: `
    <div class="h-4 w-4 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_31_239)">
          <path
            d="M6.4285 6.42829C8.02618 6.42829 9.32136 5.13312 9.32136 3.53544C9.32136 1.93775 8.02618 0.642578 6.4285 0.642578C4.83082 0.642578 3.53564 1.93775 3.53564 3.53544C3.53564 5.13312 4.83082 6.42829 6.4285 6.42829Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.78568 16.0709H0.642822V14.1423C0.653057 13.1623 0.911507 12.2009 1.39403 11.3479C1.87655 10.4949 2.56741 9.7781 3.40206 9.26447C4.23672 8.75083 5.18793 8.45713 6.16687 8.41078C7.14581 8.36444 8.12052 8.56697 8.99997 8.99945"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5 9.64258V17.3569"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.64282 13.5H17.3571"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_31_239">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgSignUp {}
