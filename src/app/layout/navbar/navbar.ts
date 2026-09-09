import { Component, HostListener, signal } from '@angular/core';
import { LucideMenu, LucideX, LucideGavel } from '@lucide/angular';
import { SITE, buildWhatsAppLink } from '../../core/config/site.config';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  imports: [LucideMenu, LucideX, LucideGavel],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly site = SITE;
  protected readonly whatsappLink = buildWhatsAppLink();

  protected readonly scrolled = signal(false);
  protected readonly mobileMenuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Áreas de Práctica', fragment: 'areas-de-practica' },
    { label: 'Nuestro Enfoque', fragment: 'nuestro-enfoque' },
    { label: 'Perfil Profesional', fragment: 'perfil-profesional' },
    { label: 'Preguntas Frecuentes', fragment: 'preguntas-frecuentes' },
    { label: 'Contacto', fragment: 'contacto' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
