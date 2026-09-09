import { Component } from '@angular/core';
import { LucideMessageCircle, LucideGraduationCap, LucideGlobe, LucideLock } from '@lucide/angular';
import { buildWhatsAppLink } from '../../core/config/site.config';

@Component({
  selector: 'app-hero',
  imports: [LucideMessageCircle, LucideGraduationCap, LucideGlobe, LucideLock],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly whatsappLink = buildWhatsAppLink(
    'Hola, quisiera agendar una consulta confidencial con Dayanna García Arenas Abogados.'
  );
}
