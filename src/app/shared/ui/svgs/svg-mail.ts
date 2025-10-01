import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-mail',
  imports: [],
  template: `
    <div class="h-6 w-6 [&>svg>path]:stroke-white [&>svg>path]:stroke-[1.5]">
      <svg
        class="h-full w-full"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8572 2.5H3.14293C2.35395 2.5 1.71436 3.13959 1.71436 3.92857V16.0714C1.71436 16.8604 2.35395 17.5 3.14293 17.5H18.8572C19.6462 17.5 20.2858 16.8604 20.2858 16.0714V3.92857C20.2858 3.13959 19.6462 2.5 18.8572 2.5Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.71436 4.28564L10.0858 11.4285C10.3425 11.6423 10.666 11.7594 11.0001 11.7594C11.3341 11.7594 11.6577 11.6423 11.9144 11.4285L20.2858 4.28564"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgMail {}
