import { Component, signal } from '@angular/core';
import { LucideChevronDown } from '@lucide/angular';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { FAQ_ITEMS } from '../../core/data/faq.data';

@Component({
  selector: 'app-faq',
  imports: [SectionHeading, LucideChevronDown],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  protected readonly items = FAQ_ITEMS;
  protected readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
