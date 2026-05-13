import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kodedristi | Architecting the Future of Code',
    short_name: 'Kodedristi',
    description: 'Enterprise-grade software architecture and digital engineering solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/Logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/Logo.png',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/Logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
