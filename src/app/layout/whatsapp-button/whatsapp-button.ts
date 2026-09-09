import { Component } from '@angular/core';
import { buildWhatsAppLink } from '../../core/config/site.config';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
})
export class WhatsappButton {
  protected readonly whatsappLink = buildWhatsAppLink();
}
