import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kodedristi.com'; // Adjust to actual production URL

  const routes = [
    '',
    '/services',
    '/hackathon',
    '/portfolio',
    '/team',
    '/contact',
    '/careers',
    '/insights',
    '/testimonials',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
