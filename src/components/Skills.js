import skills from "../data/skills.json";
function Skills() {
  const listOfSkills = skills
    .filter((skill) => {
      return skill.active;
    })
    .map((skill) => {
      return (
        <span
          className="px-1.5 py-2 text-base text-neutral bg-neutral-content font-semibold leading-4 rounded antialiased"
          key={skill.name}
          style={{ backgroundColor: skill.color }}
        >
          {skill.name}
        </span>
      );
    });
  return (
    <section>
      <h2 className="text-3xl font-light">Skills</h2>
      <p className="flex flex-wrap justify-start gap-1">{listOfSkills}</p>
    </section>
  );
}

export default Skills;
