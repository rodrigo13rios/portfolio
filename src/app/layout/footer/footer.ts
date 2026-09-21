import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/data/social-links-data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
protected readonly links = SOCIAL_LINKS;
  protected readonly currentYear = new Date().getFullYear();

}
