import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { SvgEyeOpen } from '../../../../shared/ui/svgs/svg-eye-open';
import { SvgEyeClose } from '../../../../shared/ui/svgs/svg-eye-close';
import { SvgSecurityLock } from '../../../../shared/ui/svgs/svg-security-lock';
import { SvgSend } from '../../../../shared/ui/svgs/svg-send';
@Component({
  selector: 'app-update-password',
  imports: [
    NgxSonnerToaster,
    SvgEyeOpen,
    SvgEyeClose,
    SvgSecurityLock,
    SvgSend,
  ],
  templateUrl: './update-password.html',
  styleUrl: './update-password.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePassword {
  showPassword = signal(false);
  showConfirmPassword = signal(false);

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    setTimeout(() => {
      toast.success('¡Contraseña actualizada exitosamente!');
    }, 1000);
    setTimeout(() => {
      toast.info(
        'Recordá usar tu nueva contraseña en futuros inicios de sesión.',
      );
    }, 3000);
    setTimeout(() => {
      toast.error(
        'Error al actualizar la contraseña. Verificá los datos e intentá nuevamente.',
      );
    }, 5000);
    setTimeout(() => {
      toast.info('Si el problema persiste, envíanos un ticket');
    }, 7000);
  }
}
