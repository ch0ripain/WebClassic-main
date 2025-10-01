import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { SvgEyeClose } from '../../../shared/ui/svgs/svg-eye-close';
import { SvgEyeOpen } from '../../../shared/ui/svgs/svg-eye-open';
import { SvgMail } from '../../../shared/ui/svgs/svg-mail';
import { SvgSecurityLock } from '../../../shared/ui/svgs/svg-security-lock';
import { SvgSend } from '../../../shared/ui/svgs/svg-send';
import { SvgSpin } from '../../../shared/ui/svgs/svg-spin';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgxSonnerToaster,
    SvgMail,
    SvgSecurityLock,
    SvgEyeClose,
    SvgEyeOpen,
    SvgSpin,
    SvgSend,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  isLoading = signal(false);
  private readonly fb = inject(NonNullableFormBuilder);
  readonly userForm = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }
  onSubmit() {
    if (this.userForm.invalid) return;

    this.isLoading.set(true);

    setTimeout(() => {
      console.log('Formulario enviado:', this.userForm.value);

      toast.error('Error');
      toast.info('Info');
      toast.success('¡Bienvenido!');
      this.isLoading.set(false);

      this.userForm.reset();

    }, 1000);
  }

}
