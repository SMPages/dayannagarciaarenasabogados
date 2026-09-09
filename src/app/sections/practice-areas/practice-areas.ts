import { Component, computed } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { PracticeAreaCard } from './practice-area-card/practice-area-card';
import { PRACTICE_AREAS } from '../../core/data/practice-areas.data';

@Component({
  selector: 'app-practice-areas',
  imports: [SectionHeading, PracticeAreaCard],
  templateUrl: './practice-areas.html',
  styleUrl: './practice-areas.css',
})
export class PracticeAreas {
  protected readonly coreAreas = computed(() => PRACTICE_AREAS.filter((a) => a.group === 'core'));
  protected readonly complementaryAreas = computed(() =>
    PRACTICE_AREAS.filter((a) => a.group === 'complementaria')
  );
}
