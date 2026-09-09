/**
 * Datos de contacto y utilidades centralizadas de la firma.
 * Único punto de verdad para número de WhatsApp, correo y mensajes predeterminados.
 */
export const SITE = {
  brandName: 'Dayanna García Arenas Abogados',
  shortName: 'DGA Abogados',
  founderName: 'Dra. Dayanna García Arenas',
  whatsappNumber: '573026675081',
  whatsappDisplay: '+57 302 667 5081',
  email: '[email protected]',
  city: 'Bogotá D.C., Colombia',
  defaultMessage: 'Hola, quisiera agendar una consulta con Dayanna García Arenas Abogados.',
} as const;

export function buildWhatsAppLink(message: string = SITE.defaultMessage): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
