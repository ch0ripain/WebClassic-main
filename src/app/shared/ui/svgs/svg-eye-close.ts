import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-eye-close',
  imports: [],
  template: `
    <div
      class="[&>svg>path]:stroke-classic-black h-4 w-4 [&>svg>path]:stroke-[1]"
    >
      <svg
        class="h-full w-full"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2896 5.3999C12.6696 5.7399 12.9896 6.0699 13.2296 6.3299C13.3954 6.51365 13.4872 6.75238 13.4872 6.9999C13.4872 7.24742 13.3954 7.48615 13.2296 7.6699C12.1796 8.7999 9.78961 10.9999 6.99961 10.9999H6.59961"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.86985 10.13C2.71148 9.48125 1.66482 8.65067 0.769846 7.67C0.604006 7.48625 0.512207 7.24752 0.512207 7C0.512207 6.75248 0.604006 6.51375 0.769846 6.33C1.81985 5.2 4.20985 3 6.99985 3C8.09962 3.02299 9.17596 3.32216 10.1298 3.87"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 1.5L1.5 12.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.59 8.41C5.21441 8.03665 5.00223 7.52958 5 7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5C7.52958 5.00223 8.03665 5.21441 8.41 5.59"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.74 8C8.56198 8.3043 8.3067 8.55614 8 8.73"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgEyeClose {}
