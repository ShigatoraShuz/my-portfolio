export interface Skill {
  name: string;
  level: number; // 1-100
  icon: string; // lucide-react icon name
  category: string;
}

export const skills: Skill[] = [
  { name: 'React', level: 95, icon: 'react', category: 'Frontend' },
  { name: 'TypeScript', level: 90, icon: 'file', category: 'Languages' },
  { name: 'Tailwind CSS', level: 85, icon: 'windsock', category: 'Styling' },
  { name: 'Node.js', level: 80, icon: 'node', category: 'Backend' },
  { name: 'Framer Motion', level: 75, icon: 'animation', category: 'Animations' },
  { name: 'Git', level: 90, icon: 'git-branch', category: 'Tools' },
];

