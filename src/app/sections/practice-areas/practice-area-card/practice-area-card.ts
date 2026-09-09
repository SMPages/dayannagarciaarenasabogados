import { Component, input } from '@angular/core';
import {
  LucideScale,
  LucideMap,
  LucideShieldCheck,
  LucideBriefcase,
  LucideFileText,
  LucideBuilding2,
  LucideArrowRight,
} from '@lucide/angular';
import { PracticeArea } from '../../../core/models/practice-area.model';
import { buildWhatsAppLink } from '../../../core/config/site.config';

@Component({
  selector: 'app-practice-area-card',
  imports: [
    LucideScale,
    LucideMap,
    LucideShieldCheck,
    LucideBriefcase,
    LucideFileText,
    LucideBuilding2,
    LucideArrowRight,
  ],
  templateUrl: './practice-area-card.html',
  styleUrl: './practice-area-card.css',
})
export class PracticeAreaCard {
  area = input.required<PracticeArea>();

  protected get consultLink(): string {
    const area = this.area();
    return buildWhatsAppLink(
      `Hola, quisiera consultar un asunto de ${area.title} con Dayanna García Arenas Abogados.`
    );
  }
}
