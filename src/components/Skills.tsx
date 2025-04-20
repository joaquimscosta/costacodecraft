import skills from '../data/skills.json';
export default function Skills() {
  const listOfSkills = skills
    .filter((skill) => {
      return skill.active;
    })
    .map((skill) => {
      return (
        <span
          className='text-neutral bg-neutral-content rounded px-1.5 py-2 text-lg leading-4 font-semibold antialiased'
          key={skill.name}
          style={{ backgroundColor: skill.color }}
        >
          {skill.name}
        </span>
      );
    });
  return (
    <section>
      <h2 className='text-3xl font-light'>Skills</h2>
      <p className='flex flex-wrap justify-start gap-1'>{listOfSkills}</p>
    </section>
  );
}
