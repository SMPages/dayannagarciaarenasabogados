export type PracticeAreaGroup = 'core' | 'complementaria';

export interface PracticeArea {
  /** Identificador usado en anclas y mensajes de WhatsApp. */
  slug: string;
  group: PracticeAreaGroup;
  icon: string;
  title: string;
  summary: string;
  points: string[];
}
