import { JSX } from 'react';
import skillsData from '../data/skills.json';
import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ServerStackIcon,
  Cog8ToothIcon,
  CloudIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

interface Skill {
  name: string;
  active: boolean;
  color?: string;
}

export default function Skills() {
  return (
    <section className='mt-12'>
      <h2 className='mb-4 text-2xl font-semibold'>Technical Skills</h2>
      <div className='space-y-6'>
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory
            key={category}
            title={category}
            skills={skills as Skill[]}
          />
        ))}
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  const filteredSkills = skills.filter((skill) => skill.active);

  return (
    <div>
      <h3 className='mb-2 flex items-center text-xl font-medium'>
        {getCategoryIcon(title)} {title}
      </h3>
      <div className='flex flex-wrap gap-2'>
        {filteredSkills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillBadge({ skill }: { skill: Skill }) {
  const bgColor = skill.color || '#e5e7eb';
  const textColor = skill.color ? 'text-white' : 'text-gray-800';

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold shadow-sm ${textColor}`}
      style={{ backgroundColor: bgColor }}
      aria-label={`Skill: ${skill.name}`}
    >
      {skill.name}
    </span>
  );
}

function getCategoryIcon(category: string): JSX.Element | null {
  const iconClass = 'inline-block w-6 h-6 mr-2';

  const icons: Record<string, JSX.Element> = {
    Languages: <CodeBracketIcon className={iconClass} />,
    'Frameworks & Libraries': <WrenchScrewdriverIcon className={iconClass} />,
    Databases: <ServerStackIcon className={iconClass} />,
    'DevOps & Tools': <Cog8ToothIcon className={iconClass} />,
    'Cloud & Infrastructure': <CloudIcon className={iconClass} />,
    'Web Technologies': <GlobeAltIcon className={iconClass} />,
    'Architecture & Practices': <PuzzlePieceIcon className={iconClass} />,
    'Emerging Technologies': <RocketLaunchIcon className={iconClass} />,
  };

  return icons[category] || null;
}
