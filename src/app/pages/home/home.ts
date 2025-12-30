import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { PROJECTS } from '../../core/data/projects.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  // --- Lógica de Proyectos (La que ya tenías) ---
  projects = signal(PROJECTS);
  currentFilter = signal<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  filteredProjects = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'all') return this.projects();
    return this.projects().filter(p => p.category === filter);
  });

  setFilter(filter: 'all' | 'frontend' | 'backend' | 'fullstack') {
    this.currentFilter.set(filter);
  }

  // --- Nueva Lógica: Tech Stack ---
  // Puedes buscar iconos en Bootstrap Icons o usar imágenes SVG
  skills = [
    { name: 'Angular', icon: 'bi bi-filetype-html', color: '#dd0031' },
    { name: 'Spring Boot', icon: 'bi bi-server', color: '#6db33f' },
    { name: 'Java', icon: 'bi bi-cup-hot', color: '#5382a1' },
    { name: 'Docker', icon: 'bi bi-box-seam', color: '#2496ed' },
    { name: 'PostgreSQL', icon: 'bi bi-database', color: '#336791' },
    { name: 'Git', icon: 'bi bi-git', color: '#f05032' }
  ];
}