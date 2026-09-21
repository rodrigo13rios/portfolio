import { Component } from '@angular/core';

interface Highlight {
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly highlights: Highlight[] = [
    { label: 'Formación', value: 'Tecnicatura en Programación' },
    { label: 'Especialización', value: 'Java + Spring Boot' },
    { label: 'Enfoque', value: 'Seguridad con Spring Security' },
  ];
}
