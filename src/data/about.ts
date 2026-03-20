export interface AboutData {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  profileImage: string;
  resumeLink?: string;
}

export const aboutData: AboutData = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  tagline: 'Crafting pixel-perfect experiences with code',
  bio: [
    'Passionate developer with 5+ years experience in React, TypeScript, and modern web tech.',
    'Love building interactive UIs that delight users and scale effortlessly.',
    'Always learning, always shipping.',
  ],
  profileImage: '/api/placeholder/300/300', // Placeholder, replace with real image
  resumeLink: '#',
};

