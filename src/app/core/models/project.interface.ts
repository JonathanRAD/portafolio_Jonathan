export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[]; // Ej: ['Angular', 'Spring Boot']
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}