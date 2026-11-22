import { Component, input, signal } from '@angular/core';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project = input.required<Project>();
  protected readonly currentIndex = signal(0);

  private readonly intervalMs = 1500;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  protected onPointerEnter(event: PointerEvent): void {
    // En pantallas táctiles no hay hover: la primera imagen queda fija
    if (event.pointerType !== 'mouse') return;

    const total = this.project().images.length;
    if (total < 2 || this.intervalId !== null) return;

    this.intervalId = setInterval(() => {
      this.currentIndex.update((i) => (i + 1) % total);
    }, this.intervalMs);
  }

  protected onPointerLeave(): void {
    this.stopCarousel();
    this.currentIndex.set(0);
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  private stopCarousel(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
