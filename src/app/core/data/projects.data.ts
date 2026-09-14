import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'Ryse Games',
    title: 'Ryse Games',
    description:
      'Tienda virtual de videojuegos. Gestiona la compra de juegos desde el lado del cliente, mientras que las desarrolladoras pueden ver estadísticas de ventas y subir sus propios videojuegos.',
    imageUrl: 'https://placehold.co/600x400?text=Ryse+Games',
    techStack: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/SebastianKloster/RyseGames',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'placeholder-2',
    title: 'Proyecto 2 (placeholder)',
    description: 'Completar con la descripción del segundo proyecto.',
    imageUrl: 'https://placehold.co/600x400?text=Proyecto+2',
    techStack: ['Angular', 'Tailwind'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
  },
];
