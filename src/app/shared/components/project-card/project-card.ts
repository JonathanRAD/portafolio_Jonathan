import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss']
})
export class ProjectCard {
  // Nueva sintaxis de Inputs en Angular moderno
  project = input.required<Project>();
}