import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-send',
  standalone: true,
  template: `
    <div class="h-6 w-6 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_38_66)">
          <path
            d="M8.31451 15.7142L11.4288 18.8142C11.6199 19.0101 11.8588 19.1526 12.1219 19.2278C12.3849 19.3029 12.6631 19.3081 12.9288 19.2428C13.1962 19.1806 13.443 19.0507 13.6457 18.8656C13.8483 18.6805 13.9999 18.4463 14.0859 18.1856L19.2002 2.85707C19.307 2.56986 19.329 2.25804 19.2637 1.95867C19.1984 1.65931 19.0485 1.385 18.8318 1.16834C18.6152 0.951677 18.3408 0.801784 18.0415 0.736475C17.7421 0.671166 17.4303 0.693188 17.1431 0.799924L1.81451 5.91421C1.54487 6.00631 1.30471 6.16875 1.11886 6.38473C0.933016 6.60072 0.808218 6.86242 0.757367 7.14278C0.70488 7.39777 0.716565 7.6618 0.791371 7.91115C0.866177 8.1605 1.00176 8.38737 1.18594 8.57135L5.10022 12.4856L4.97165 17.4428L8.31451 15.7142Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.743 1.11426L5.1001 12.4857"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_38_66">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgSend {}
