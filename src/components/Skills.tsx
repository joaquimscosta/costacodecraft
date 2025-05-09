import skills from '../data/skills.json';

interface Skill {
  name: string;
  active: boolean;
  color: string | undefined;
}
interface SkillProps {
  skill: Skill;
}
export default function Skills() {
  const listOfSkills = skills
    .filter((skill) => {
      return skill.active;
    })
    .map((skill) => <Skill key={skill.name} skill={skill} />);
  return (
    <section>
      <h2 className='text-3xl font-light'>Skills</h2>
      <p className='flex flex-wrap justify-start gap-1'>{listOfSkills}</p>
    </section>
  );
}

function Skill({ skill }: SkillProps) {
  return (
    <span
      className='badge badge-soft badge-lg lg:badge-xl leading-4 font-semibold antialiased'
      key={skill.name}
      style={{ backgroundColor: skill.color }}
    >
      {skill.name}
    </span>
  );
}
