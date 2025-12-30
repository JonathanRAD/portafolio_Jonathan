import { Project } from "../models/project.interface";

export const PROJECTS: Project[] = [
  {
    id: 'clinica-general',
    title: 'Sistema de Gestión Clínica',
    description: 'SaaS completo para administración médica con gestión de citas, historias clínicas y facturación.',
    technologies: ['Java 17', 'Spring Boot 3', 'Angular', 'PostgreSQL', 'JWT'],
    imageUrl: 'clinicageneral.jpeg', // ¡Recuerda subir esta foto!
    category: 'fullstack',
    githubUrl: 'https://github.com/JonathanRAD/Backend-ClinicaGeneral' // Basado en tu usuario
  },
  {
    id: 'dental-api',
    title: 'API Segura Sector Salud',
    description: 'Backend robusto con arquitectura de microservicios, seguridad OAuth2 y Google Login.',
    technologies: ['Spring Security', 'Docker', 'OAuth2', 'Lombok'],
    imageUrl: 'clinicadental.jpeg',
    category: 'backend',
    githubUrl: 'https://github.com/csduentapremium2727-png/Clinica-dental-backend'
  },
  {
    id: 'ecommerce-trust',
    title: 'Plataforma E-commerce',
    description: 'Frontend moderno para gestión de pedidos, recargas y reseñas de clientes.',
    technologies: ['Angular', 'Bootstrap 5', 'SCSS', 'RxJS'],
    imageUrl: 'ecommerce.jpeg',
    category: 'frontend',
    githubUrl: 'https://github.com/webprogrammr/Plataformasconfianza-frontend'
  }
];