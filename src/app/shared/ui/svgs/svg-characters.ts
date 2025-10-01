import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-characters',
  standalone: true,
  imports: [],
  template: `
    <div class="h-4 w-4 [&>svg>path]:stroke-white [&>svg>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.4285 7.71443C8.02618 7.71443 9.32136 6.41925 9.32136 4.82157C9.32136 3.22389 8.02618 1.92871 6.4285 1.92871C4.83082 1.92871 3.53564 3.22389 3.53564 4.82157C3.53564 6.41925 4.83082 7.71443 6.4285 7.71443Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.2143 17.3576H0.642822V16.0718C0.642822 14.5374 1.25239 13.0658 2.33742 11.9807C3.42245 10.8957 4.89407 10.2861 6.42854 10.2861C7.963 10.2861 9.43462 10.8957 10.5197 11.9807C11.6047 13.0658 12.2143 14.5374 12.2143 16.0718V17.3576Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.5713 1.92871C12.3385 1.92871 13.0743 2.23349 13.6168 2.77601C14.1594 3.31853 14.4641 4.05433 14.4641 4.82157C14.4641 5.5888 14.1594 6.32461 13.6168 6.86713C13.0743 7.40964 12.3385 7.71443 11.5713 7.71443"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.6284 10.5303C14.7236 10.9469 15.6665 11.6863 16.3323 12.6505C16.9981 13.6148 17.3554 14.7585 17.357 15.9303V17.3574H15.4284"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgCharacters {}
