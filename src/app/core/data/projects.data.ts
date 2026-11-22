import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'Ryse Games',
    title: 'Ryse Games',
    description:
      'Tienda virtual de videojuegos. Gestiona la compra de juegos desde el lado del cliente, mientras que las desarrolladoras pueden ver estadísticas de ventas y subir sus propios videojuegos.',
    images: [
      'images/Portada.png'
    ],
    techStack: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/SebastianKloster/RyseGames',
    liveUrl: '',
    featured: true,
  },
];
