import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-faction',
  standalone: true,
  template: `
    <div class="h-4 w-4 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_67_486)">
          <path
            d="M29.5087 12.9209H2.49158C1.21158 12.9209 0.663007 11.5266 1.66872 10.8637L15.1773 2.01803C15.4267 1.87131 15.7108 1.79395 16.0001 1.79395C16.2895 1.79395 16.5736 1.87131 16.823 2.01803L30.3316 10.8637C31.3373 11.5266 30.7887 12.9209 29.5087 12.9209Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.7145 25.4924H2.28592C1.65474 25.4924 1.14307 26.0041 1.14307 26.6353V30.0639C1.14307 30.695 1.65474 31.2067 2.28592 31.2067H29.7145C30.3457 31.2067 30.8573 30.695 30.8573 30.0639V26.6353C30.8573 26.0041 30.3457 25.4924 29.7145 25.4924Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.57178 12.9209V25.4923"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.2861 12.9209V25.4923"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 12.9209V25.4923"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.7144 12.9209V25.4923"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.4287 12.9209V25.4923"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_67_486">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0 0.349365)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
})
export class SvgFaction {}
