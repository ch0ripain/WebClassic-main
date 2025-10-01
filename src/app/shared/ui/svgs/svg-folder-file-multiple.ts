import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-folder-file-multiple',
  imports: [],
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
        <g clip-path="url(#clip0_43_271)">
          <path
            d="M17.8572 14.2858C17.8572 14.6647 17.7067 15.028 17.4388 15.2959C17.1709 15.5638 16.8075 15.7144 16.4286 15.7144H7.14293C6.76405 15.7144 6.40068 15.5638 6.13277 15.2959C5.86487 15.028 5.71436 14.6647 5.71436 14.2858V2.14293C5.71436 1.76405 5.86487 1.40068 6.13277 1.13277C6.40068 0.864865 6.76405 0.714355 7.14293 0.714355H13.5715L17.8572 5.00007V14.2858Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5716 19.2857H3.57164C3.19276 19.2857 2.82939 19.1352 2.56149 18.8673C2.29358 18.5994 2.14307 18.236 2.14307 17.8571V5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_43_271">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgFolderFileMultiple {}
