import { Component, signal, computed, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
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
export class Home implements AfterViewInit {
  // --- PROYECTOS ---
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

  // --- STATS ---
  stats = [
    { number: '+4', label: 'Años Formación' },
    { number: '+3', label: 'Certificaciones' },
    { number: '100%', label: 'Compromiso' }
  ];

  // --- EXPERTISE ---
  expertise = [
    {
      title: 'Desarrollo Full Stack',
      icon: 'bi bi-laptop',
      desc: 'Construcción de sistemas web robustos y escalables.',
      techs: ['Java', 'Spring Boot', 'Angular', 'Linux']
    },
    {
      title: 'Data & Analytics',
      icon: 'bi bi-pie-chart-fill',
      desc: 'Análisis de datos e inteligencia de negocios.',
      techs: ['Power BI', 'SQL', 'Excel Avanzado', 'Python']
    },
    {
      title: 'Gestión de Procesos',
      icon: 'bi bi-diagram-3-fill',
      desc: 'Modelado y optimización de flujos de trabajo.',
      techs: ['Bizagi', 'MS Project', 'Visio', 'Oracle']
    }
  ];

  // --- SERVICIOS ---
  services = [
    {
      title: 'Desarrollo Web a Medida',
      icon: 'bi bi-globe',
      desc: 'Sitios web profesionales, Landing Pages y sistemas administrativos (CRUD) adaptados a tu negocio.',
      features: ['Diseño Responsivo', 'Integración de Pagos', 'Panel Administrable'],
      tools: [
        { name: 'Angular', icon: 'bi bi-window-fullscreen' },
        { name: 'Spring Boot', icon: 'bi bi-server' },
        { name: 'Docker', icon: 'bi bi-box-seam' },
        { name: 'Figma', icon: 'bi bi-bezier2' }
      ]
    },
    {
      title: 'Servicios para Discord',
      icon: 'bi bi-discord',
      desc: 'Potencia tu comunidad con configuraciones profesionales y bots programados a medida.',
      features: ['Bots en Java/JS', 'Sistemas de Tickets', 'Configuración de Roles/Permisos'],
      tools: [
        { name: 'Java', icon: 'bi bi-cup-hot' },
        { name: 'Node.js', icon: 'bi bi-filetype-js' },
        { name: 'MongoDB', icon: 'bi bi-database' },
        { name: 'API REST', icon: 'bi bi-cloud-arrow-down' }
      ]
    },
    {
      title: 'Soluciones de Datos (BI)',
      icon: 'bi bi-bar-chart-line-fill',
      desc: 'Convierte tus datos en decisiones. Dashboards interactivos y reportes automatizados.',
      features: ['Dashboards Power BI', 'Limpieza de Datos', 'Consultas SQL Optimizadas'],
      tools: [
        { name: 'Power BI', icon: 'bi bi-bar-chart-fill' },
        { name: 'Python', icon: 'bi bi-filetype-py' },
        { name: 'SQL', icon: 'bi bi-table' },
        { name: 'Excel', icon: 'bi bi-grid-3x3' }
      ]
    }
  ];

  // --- ANIMACIONES ---
  @ViewChildren('revealItem') revealItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    this.revealItems.forEach((item) => {
      observer.observe(item.nativeElement);
    });
  }
}