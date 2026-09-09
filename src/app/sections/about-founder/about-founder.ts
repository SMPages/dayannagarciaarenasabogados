import { Component } from '@angular/core';
import { LucideGraduationCap, LucideGavel, LucideGlobe } from '@lucide/angular';
import { SectionHeading } from '../../shared/section-heading/section-heading';

interface Credential {
  icon: 'graduation' | 'gavel' | 'globe';
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-founder',
  imports: [SectionHeading, LucideGraduationCap, LucideGavel, LucideGlobe],
  templateUrl: './about-founder.html',
  styleUrl: './about-founder.css',
})
export class AboutFounder {
  protected readonly credentials: Credential[] = [
    {
      icon: 'graduation',
      title: 'Magíster en Derecho Penal Internacional',
      description: 'Doble titulación en España y Colombia, con formación en estándares internacionales de derechos y garantías procesales.',
    },
    {
      icon: 'gavel',
      title: 'Litigante de trayectoria',
      description: 'Sólida experiencia en litigio estratégico y en la defensa técnica de asuntos de alta complejidad.',
    },
    {
      icon: 'globe',
      title: 'Visión jurídica internacional',
      description: 'Criterio riguroso para articular el derecho interno con los estándares del Derecho Penal Internacional.',
    },
  ];
}
