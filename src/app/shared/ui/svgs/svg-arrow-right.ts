import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-right',
  standalone: true,
  imports: [],
  template: `
    <div class="h-6 w-6 [&>svg>path]:stroke-white [&>svg>path]:stroke-[1.5]">
      <svg
        class="h-full w-full"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.7998 1.14282L22.8569 15.2C22.9663 15.3026 23.0534 15.4265 23.113 15.5641C23.1725 15.7017 23.2033 15.85 23.2033 16C23.2033 16.1499 23.1725 16.2982 23.113 16.4358C23.0534 16.5734 22.9663 16.6974 22.8569 16.8L8.7998 30.8571"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgArrowRight {}
