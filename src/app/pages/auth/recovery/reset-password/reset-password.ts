import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { SvgMail } from '../../../../shared/ui/svgs/svg-mail';
import { SvgSend } from '../../../../shared/ui/svgs/svg-send';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [NgxSonnerToaster, SvgMail, SvgSend],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPassword {
  constructor(private router: Router) { }

  handleSubmit(event: Event) {
    event.preventDefault();

    setTimeout(() => {
      toast.error('Error al enviar el correo. Verificá tu email.');
    }, 1000);
    setTimeout(() => {
      toast.info('Revisá tu bandeja de entrada y correo no deseado.');
    }, 3000);
    setTimeout(() => {
      toast.success('¡Correo enviado! Seguí las instrucciones.');
      setTimeout(() => {
        this.router.navigate(['auth/recovery/update-password']);
      }, 3000);
    }, 5000);
  }
}
