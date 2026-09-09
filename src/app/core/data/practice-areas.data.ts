import { PracticeArea } from '../models/practice-area.model';

/**
 * Áreas de práctica de la firma.
 * `core`: litigio estratégico de alta complejidad (mayor peso visual en la UI).
 * `complementaria`: asesoría corporativa e integral.
 */
export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'penal',
    group: 'core',
    icon: 'scale',
    title: 'Derecho Penal y Litigio Estratégico',
    summary:
      'Defensa técnica de procesados y representación de víctimas, con estándar de Derecho Penal Internacional y garantías constitucionales en cada etapa del proceso.',
    points: [
      'Defensa técnica de procesados y representación integral de víctimas.',
      'Acompañamiento en indagación preliminar, imputación, audiencias concentradas y juicio oral.',
      'Enfoque con estándar de Derecho Penal Internacional y garantías procesales.',
    ],
  },
  {
    slug: 'restitucion-de-tierras',
    group: 'core',
    icon: 'map',
    title: 'Restitución de Tierras',
    summary:
      'Representación judicial y administrativa para víctimas de despojo, y defensa de opositores y poseedores de buena fe exenta de culpa.',
    points: [
      'Representación en procesos judiciales y administrativos de restitución.',
      'Protección de víctimas de despojo y defensa de terceros opositores.',
      'Litigio agrario y saneamiento de predios en conflicto.',
    ],
  },
  {
    slug: 'extincion-de-dominio',
    group: 'core',
    icon: 'shield-check',
    title: 'Extinción de Dominio',
    summary:
      'Defensa patrimonial técnica frente a medidas cautelares, con acreditación probatoria rigurosa del origen lícito de bienes e inversiones.',
    points: [
      'Defensa frente a embargos, secuestros y suspensión del poder dispositivo.',
      'Acreditación probatoria del origen lícito de bienes e inversiones.',
      'Estrategia probatoria ante Fiscalía y juzgados especializados.',
    ],
  },
  {
    slug: 'laboral',
    group: 'complementaria',
    icon: 'briefcase',
    title: 'Derecho Laboral',
    summary:
      'Representación en litigio laboral individual y asesoría preventiva para empleadores y trabajadores.',
    points: [
      'Litigio laboral individual y reclamaciones ante despido.',
      'Asesoría en terminaciones y fueros de estabilidad reforzada.',
      'Prevención de contingencias laborales.',
    ],
  },
  {
    slug: 'civil',
    group: 'complementaria',
    icon: 'file-text',
    title: 'Derecho Civil',
    summary:
      'Asesoría y litigio en contratación, responsabilidad civil, sucesiones y controversias sobre bienes inmuebles.',
    points: [
      'Contratación y disputas contractuales y extracontractuales.',
      'Responsabilidad civil y reclamación de perjuicios.',
      'Sucesiones y controversias sobre bienes inmuebles.',
    ],
  },
  {
    slug: 'comercial',
    group: 'complementaria',
    icon: 'building-2',
    title: 'Derecho Comercial',
    summary:
      'Acompañamiento corporativo y blindaje jurídico para negocios, sociedades y relaciones mercantiles.',
    points: [
      'Acompañamiento corporativo y acuerdos societarios.',
      'Solución de disputas mercantiles.',
      'Blindaje comercial y contractual del negocio.',
    ],
  },
];
