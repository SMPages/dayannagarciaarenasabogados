import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.css',
})
export class SectionHeading {
  kicker = input<string>('');
  title = input.required<string>();
  subtitle = input<string>('');
  align = input<'left' | 'center'>('center');
  light = input<boolean>(false);
}
