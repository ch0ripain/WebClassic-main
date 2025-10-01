import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-security-lock',
  standalone: true,
  template: `
    <div class="h-6 w-6 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_38_81)">
          <path
            d="M15.7143 7.85742H4.28575C3.49677 7.85742 2.85718 8.49702 2.85718 9.28599V17.8574C2.85718 18.6464 3.49677 19.286 4.28575 19.286H15.7143C16.5033 19.286 17.1429 18.6464 17.1429 17.8574V9.28599C17.1429 8.49702 16.5033 7.85742 15.7143 7.85742Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 7.85721V5.71436C15 4.38827 14.4732 3.1165 13.5355 2.17882C12.5979 1.24114 11.3261 0.714355 10 0.714355C8.67392 0.714355 7.40215 1.24114 6.46447 2.17882C5.52678 3.1165 5 4.38827 5 5.71436V7.85721"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99993 14.286C10.3944 14.286 10.7142 13.9662 10.7142 13.5717C10.7142 13.1772 10.3944 12.8574 9.99993 12.8574C9.60544 12.8574 9.28564 13.1772 9.28564 13.5717C9.28564 13.9662 9.60544 14.286 9.99993 14.286Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_38_81">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgSecurityLock {}
