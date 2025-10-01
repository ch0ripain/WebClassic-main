import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-notification',
  imports: [],
  template: `
    <div class="h-6 w-6 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_69_1284)">
          <path
            d="M16.0002 1.14258C18.6008 1.14258 21.095 2.17568 22.9339 4.01461C24.7728 5.85353 25.8059 8.34765 25.8059 10.9483C25.8059 21.8511 29.7831 23.9997 30.8574 23.9997H1.14307C2.24021 23.9997 6.19449 21.8283 6.19449 10.9483C6.19449 8.34765 7.22759 5.85353 9.06652 4.01461C10.9054 2.17568 13.3996 1.14258 16.0002 1.14258V1.14258Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5718 28.1826C12.7694 28.9415 13.2132 29.6135 13.8336 30.0931C14.4541 30.5727 15.2161 30.8329 16.0003 30.8329C16.7846 30.8329 17.5466 30.5727 18.1671 30.0931C18.7875 29.6135 19.2313 28.9415 19.4289 28.1826"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_69_1284">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgNotification {}
