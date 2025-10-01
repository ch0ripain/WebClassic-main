import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-small',
  imports: [],
  template: `
    <hr />
    <footer class="flex h-auto w-full justify-center bg-black px-8 py-3">
      <section class="flex w-full items-center justify-start gap-x-3">
        <article>
          <span class="font-gta text-nowrap">GTA CLASSIC</span>
        </article>
        <article class="border-classic-main-light border-l-2">
          <p class="font-poppins text-classic-gray pl-3 text-xs text-pretty">
            GTA Classic RP no está afiliado ni apoyado por Take-Two, Rockstar
            North Interactive o cualquier otro titular de derechos de autor.
            Todas las marcas utilizadas pertenecen a sus respectivos
            propietarios y no están afiliadas ni respaldadas por Take-Two,
            Rockstar North Interactive.
          </p>
        </article>
      </section>
    </footer>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterSmall {}
