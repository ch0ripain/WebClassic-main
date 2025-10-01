import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { SvgUser } from '../../../shared/ui/svgs/svg-user';
import { SvgMail } from '../../../shared/ui/svgs/svg-mail';
import { SvgSecurityLock } from '../../../shared/ui/svgs/svg-security-lock';
import { SvgEyeClose } from '../../../shared/ui/svgs/svg-eye-close';
import { SvgEyeOpen } from '../../../shared/ui/svgs/svg-eye-open';
import { SvgSend } from '../../../shared/ui/svgs/svg-send';
import { RouterLink } from '@angular/router';

import {
  ReactiveFormsModule,
  Validators,
  NonNullableFormBuilder,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { SvgSpin } from '../../../shared/ui/svgs/svg-spin';

@Component({
  selector: 'app-sign-up',
  imports: [
    ReactiveFormsModule,
    NgxSonnerToaster,
    RouterLink,
    SvgUser,
    SvgMail,
    SvgSecurityLock,
    SvgEyeClose,
    SvgEyeOpen,
    SvgSend,
    SvgSpin,
  ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUp {
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  isLoading = signal(false);
  private readonly fb = inject(NonNullableFormBuilder);
  readonly userForm = this.fb.group(
    {
      username: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(24),
        ],
      }),
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: this.fb.control('', {
        validators: [Validators.required],
      }),
    },
    {
      validators: [this.passwordMatchValidator],
    },
  );

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) {
      return null;
    }
    return password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }

  passwordsMatch(): boolean {
    const password = this.userForm.get('password')?.value;
    const confirmPassword = this.userForm.get('confirmPassword')?.value;
    if (!password || !confirmPassword) {
      return true;
    }
    return password === confirmPassword;
  }

  confirmPasswordHasErrors(): boolean {
    const confirmPasswordControl = this.userForm.get('confirmPassword');
    const formErrors = this.userForm.errors;
    return !!(
      confirmPasswordControl &&
      (confirmPasswordControl.invalid || formErrors?.['passwordMismatch']) &&
      (confirmPasswordControl.touched || confirmPasswordControl.dirty)
    );
  }

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
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
