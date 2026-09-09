import { Component } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';

interface Step {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-we-work',
  imports: [SectionHeading],
  templateUrl: './how-we-work.html',
  styleUrl: './how-we-work.css',
})
export class HowWeWork {
  protected readonly steps: Step[] = [
    {
      number: '01',
      title: 'Nos cuentas qué ocurrió',
      description:
        'Escuchamos tu situación con total reserva y detectamos si existe una urgencia judicial o un término procesal corriendo que exija actuar de inmediato.',
    },
    {
      number: '02',
      title: 'Revisamos la documentación',
      description:
        'Analizamos citaciones, radicados, medidas cautelares o contratos disponibles para entender con precisión el estado real de tu asunto.',
    },
    {
      number: '03',
      title: 'Te explicamos las opciones',
      description:
        'Sin rodeos: te decimos con honestidad la viabilidad del caso, los honorarios y el alcance del acompañamiento antes de que tomes cualquier decisión.',
    },
  ];
}
