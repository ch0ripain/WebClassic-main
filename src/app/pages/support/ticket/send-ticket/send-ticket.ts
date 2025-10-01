import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { SvgFolder } from '../../../../shared/ui/svgs/svg-folder';
import { SvgUserFocus } from '../../../../shared/ui/svgs/svg-user-focus';
import { SvgFolderFile } from '../../../../shared/ui/svgs/svg-folder-file';
import { SvgSend } from '../../../../shared/ui/svgs/svg-send';
@Component({
  selector: 'app-send-ticket',
  imports: [
    NgxSonnerToaster,
    SvgFolder,
    SvgUserFocus,
    SvgFolderFile,
    SvgSend,
  ],
  templateUrl: './send-ticket.html',
  styleUrl: './send-ticket.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendTicket {
  handleSubmit(event: Event) {
    event.preventDefault();

    setTimeout(() => {
      toast.error('Error al enviar el ticket. Intentá nuevamente.');
    }, 1000);
    setTimeout(() => {
      toast.info('Podés consultar el estado en "Tus tickets".');
    }, 3000);
    setTimeout(() => {
      toast.success('¡Ticket enviado correctamente! Te responderemos pronto.');
    }, 5000);
  }
}
