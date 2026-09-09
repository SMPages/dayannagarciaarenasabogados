import { Component } from '@angular/core';
import { LucideMail, LucidePhone, LucideMapPin, LucideArrowRight } from '@lucide/angular';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SITE, buildWhatsAppLink } from '../../core/config/site.config';
import { PRACTICE_AREAS } from '../../core/data/practice-areas.data';

@Component({
  selector: 'app-contact',
  imports: [SectionHeading, LucideMail, LucidePhone, LucideMapPin, LucideArrowRight],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly site = SITE;
  protected readonly practiceAreas = PRACTICE_AREAS;
  protected readonly whatsappLink = buildWhatsAppLink();

  protected areaLink(title: string): string {
    return buildWhatsAppLink(
      `Hola, quisiera consultar un asunto de ${title} con Dayanna García Arenas Abogados.`
    );
  }
}
