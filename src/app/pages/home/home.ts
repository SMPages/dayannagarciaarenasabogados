import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
import { WhatsappButton } from '../../layout/whatsapp-button/whatsapp-button';
import { Hero } from '../../sections/hero/hero';
import { HowWeWork } from '../../sections/how-we-work/how-we-work';
import { PracticeAreas } from '../../sections/practice-areas/practice-areas';
import { AboutFounder } from '../../sections/about-founder/about-founder';
import { Faq } from '../../sections/faq/faq';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, WhatsappButton, Hero, HowWeWork, PracticeAreas, AboutFounder, Faq, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
