import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

interface Answer {
  text: string;
  id: string;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

interface QuestionResponse {
  question: string;
  answersSelected: string[];
}

@Component({
  selector: 'app-whitelist',
  imports: [ReactiveFormsModule],
  templateUrl: './whitelist.html',
  styleUrl: './whitelist.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Whitelist {
  private readonly fb = inject(NonNullableFormBuilder);
  isLoading = signal(false);

  questions: Question[] = [
    {
      id: 1,
      question: '¿Qué es lo que priorizas en el roleplay?',
      answers: [
        { text: 'Ganar dinero rápido.', id: 'q1a1' },
        { text: 'Matar a otros jugadores por diversión.', id: 'q1a2' },
        { text: 'Actuar como tu personaje y seguir el juego.', id: 'q1a3' },
        { text: 'Acumular los mejores vehículos.', id: 'q1a4' },
      ],
    },
    {
      id: 2,
      question:
        'Si ves a alguien rompiendo las reglas del servidor, ¿qué haces normalmente?',
      answers: [
        { text: 'Ignorarlo y seguir con lo tuyo.', id: 'q2a1' },
        { text: 'Confrontarlo directamente en el juego.', id: 'q2a2' },
        { text: 'Reportarlo a la administración o moderadores.', id: 'q2a3' },
        { text: 'Unirte a ellos y romper las reglas también.', id: 'q2a4' },
      ],
    },
    {
      id: 3,
      question:
        '¿Cuál/cualés de estas acciones sería considerada como una infracción?',
      answers: [
        {
          text: 'Negociar un precio por un objeto en el mercado negro.',
          id: 'q3a1',
        },
        {
          text: 'Aceptar que tu personaje puede ser herido o incapacitado en un tiroteo.',
          id: 'q3a2',
        },
        {
          text: 'Usar información obtenida fuera del juego (Discord, Twitch) para tu beneficio dentro del juego.',
          id: 'q3a3',
        },
        { text: 'Trabajar como mecánico para ganar dinero.', id: 'q3a4' },
      ],
    },
    {
      id: 4,
      question: 'Si tu personaje es arrestado por la policía...',
      answers: [
        {
          text: 'Te desconectas para evitar las consecuencias.',
          id: 'q4a1',
        },
        {
          text: 'Aceptas el arresto y seguis jugando.',
          id: 'q4a2',
        },
        { text: 'Insultas a los policías y buscas venganza.', id: 'q4a3' },
        {
          text: 'Intentas escapar a toda costa, sin importar los medios.',
          id: 'q4a4',
        },
      ],
    },
  ];

  readonly questionsForm = this.fb.group({
    question1: this.fb.array(
      this.questions[0].answers.map(() => this.fb.control(false)),
      { validators: [this.atLeastOneSelectedValidator] },
    ),
    question2: this.fb.array(
      this.questions[1].answers.map(() => this.fb.control(false)),
      { validators: [this.atLeastOneSelectedValidator] },
    ),
    question3: this.fb.array(
      this.questions[2].answers.map(() => this.fb.control(false)),
      { validators: [this.atLeastOneSelectedValidator] },
    ),
    question4: this.fb.array(
      this.questions[3].answers.map(() => this.fb.control(false)),
      { validators: [this.atLeastOneSelectedValidator] },
    ),
  });

  atLeastOneSelectedValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const formArray = control as FormArray;
    const hasAtLeastOne = formArray.controls.some(
      (ctrl: AbstractControl) => ctrl.value === true,
    );
    return hasAtLeastOne ? null : { atLeastOneRequired: true };
  }

  getQuestionControl(questionIndex: number): FormArray {
    const questionKey = `question${questionIndex + 1}`;
    return this.questionsForm.get(questionKey) as FormArray;
  }

  hasQuestionErrors(questionIndex: number): boolean {
    const questionControl = this.getQuestionControl(questionIndex);
    return !!(
      questionControl &&
      questionControl.invalid &&
      questionControl.touched
    );
  }

  onAnswerChange(
    questionIndex: number,
    answerIndex: number,
    event: Event,
  ): void {
    const checkbox = event.target as HTMLInputElement;
    const questionControl = this.getQuestionControl(questionIndex);
    const answerControl = questionControl.at(answerIndex) as FormControl;

    answerControl.setValue(checkbox.checked);
    questionControl.markAsTouched();
  }

  isFormValid(): boolean {
    return this.questionsForm.valid;
  }

  getAnswerValue(questionIndex: number, answerIndex: number): boolean {
    const questionControl = this.getQuestionControl(questionIndex);
    return questionControl.at(answerIndex).value;
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      Object.keys(this.questionsForm.controls).forEach((key) => {
        const control = this.questionsForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.isLoading.set(true);

    const responses: QuestionResponse[] = this.questions.map(
      (question, questionIndex) => {
        const questionControl = this.getQuestionControl(questionIndex);
        const selectedAnswers: string[] = [];

        question.answers.forEach((answer, answerIndex) => {
          const answerControl = questionControl.at(answerIndex) as FormControl;
          if (answerControl.value === true) {
            selectedAnswers.push(answer.text);
          }
        });

        return {
          question: question.question,
          answersSelected: selectedAnswers,
        };
      },
    );

    setTimeout(() => {
      console.log('Respuestas del cuestionario:', responses);
      this.isLoading.set(false);
      this.questionsForm.reset();
    }, 1000);
  }

  currentQuestionIndex = signal(0);

  goToPreviousQuestion(): void {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update((i) => i - 1);
    }
  }

  goToNextQuestion(): void {
    if (this.currentQuestionIndex() < this.questions.length - 1) {
      this.currentQuestionIndex.update((i) => i + 1);
    }
  }
}
