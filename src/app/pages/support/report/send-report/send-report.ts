import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgFolder } from '../../../../shared/ui/svgs/svg-folder';
import { SvgUserFocus } from '../../../../shared/ui/svgs/svg-user-focus';
import { SvgFolderFile } from '../../../../shared/ui/svgs/svg-folder-file';
import { SvgFolderFileMultiple } from '../../../../shared/ui/svgs/svg-folder-file-multiple';
import { SvgSend } from '../../../../shared/ui/svgs/svg-send';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-send-report',
  imports: [
    NgxSonnerToaster,
    SvgFolder,
    SvgUserFocus,
    SvgFolderFile,
    SvgFolderFileMultiple,
    SvgSend,
  ],
  templateUrl: './send-report.html',
  styleUrl: './send-report.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendReport {
  protected readonly toast = toast;

  handleSubmit(event: Event) {
    event.preventDefault();
    setTimeout(() => {
      toast.error('Error al enviar el reporte. Intentá nuevamente.');
    }, 1000);
    setTimeout(() => {
      toast.info('Podés consultar el estado en "Tus reportes".');
    }, 3000);
    setTimeout(() => {
      toast.success('¡Reporte enviado correctamente!');
    }, 5000);
  }
}
