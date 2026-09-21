import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/data/social-links-data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly links = SOCIAL_LINKS;
}
