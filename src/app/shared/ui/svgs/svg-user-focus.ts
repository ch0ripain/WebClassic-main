import { Component, input } from '@angular/core';

@Component({
  selector: 'app-svg-user-focus',
  standalone: true,
  template: `
    <div
      class="h-6 w-6 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1.5]"
    >
      <svg
        class="h-full w-full"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_61_273)">
          <path
            d="M10.0001 11.4285C11.9726 11.4285 13.5716 9.82952 13.5716 7.85707C13.5716 5.88463 11.9726 4.28564 10.0001 4.28564C8.02769 4.28564 6.42871 5.88463 6.42871 7.85707C6.42871 9.82952 8.02769 11.4285 10.0001 11.4285Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.7286 15.3571C13.4233 14.2042 11.7417 13.5679 10.0001 13.5679C8.25844 13.5679 6.57683 14.2042 5.27148 15.3571"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.2857 15V17.8571C19.2857 18.236 19.1352 18.5994 18.8673 18.8673C18.5994 19.1352 18.236 19.2857 17.8571 19.2857H15"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 0.714355H17.8571C18.236 0.714355 18.5994 0.864865 18.8673 1.13277C19.1352 1.40068 19.2857 1.76405 19.2857 2.14293V5.00007"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.714355 5.00007V2.14293C0.714355 1.76405 0.864865 1.40068 1.13277 1.13277C1.40068 0.864865 1.76405 0.714355 2.14293 0.714355H5.00007"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.00007 19.2857H2.14293C1.76405 19.2857 1.40068 19.1352 1.13277 18.8673C0.864865 18.5994 0.714355 18.236 0.714355 17.8571V15"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_61_273">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
})
export class SvgUserFocus {}
