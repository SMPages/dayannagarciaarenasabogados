import { Component } from '@angular/core';
import { LucideGavel, LucideMail, LucidePhone, LucideMapPin } from '@lucide/angular';
import { SITE, buildWhatsAppLink } from '../../core/config/site.config';
import { PRACTICE_AREAS } from '../../core/data/practice-areas.data';

@Component({
  selector: 'app-footer',
  imports: [LucideGavel, LucideMail, LucidePhone, LucideMapPin],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly site = SITE;
  protected readonly whatsappLink = buildWhatsAppLink();
  protected readonly practiceAreas = PRACTICE_AREAS;
  protected readonly year = new Date().getFullYear();
}
