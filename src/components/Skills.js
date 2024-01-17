function Skills() {
  const mySkills = [
    { name: "Java", active: true, color: "#007396" },
    { name: "Kotlin", active: true, color: "" },
    { name: "Python", active: true, color: "rgb(75, 139, 190)" },
    { name: "SQL", active: true, color: "" },
    { name: "Bash", active: true, color: "" },
    { name: "Spring Boot", active: true, color: "#6DB33F" },
    { name: "Spring Cloud", active: true, color: "#6DB33F" },
    { name: "Spring Data JPA", active: false, color: "#6DB33F" },
    { name: "Hibernate", active: true, color: "" },
    { name: "PostgreSQL", active: true, color: "rgb(51, 103, 145)" },
    { name: "Redis", active: true, color: "rgb(216, 44, 32)" },
    { name: "Maven", active: true, color: "" },
    { name: "Gradle", active: true, color: "" },
    { name: "Git", active: true, color: "" },
    { name: "JUnit", active: true, color: "#25A162" },
    { name: "Mockito", active: true, color: "" },
    { name: "Restful API", active: true, color: "" },
    { name: "JavaScript", active: true, color: "#F0DB4F" },
    { name: "HTML", active: true, color: "" },
    { name: "CSS", active: true, color: "" },
    { name: "XML", active: true, color: "" },
    { name: "JSON", active: true, color: "" },
    { name: "Azure", active: true, color: "#0089D6" },
    { name: "Azure DevOps", active: true, color: "#0089D6" },
    { name: "Azure CLI", active: true, color: "#0089D6" },
    { name: "ARM", active: true, color: "#0089D6" },
    { name: "Bicep", active: true, color: "#0089D6" },
    { name: "Terraform", active: true, color: "rgb(123, 66, 188)" },
    { name: "Docker", active: true, color: "rgb(13, 183, 237)" },
    { name: "Kubernetes", active: true, color: "rgb(51, 103, 145)" },
  ];

  const listOfSkills = mySkills
    .filter((skill) => {
      return skill.active;
    })
    .map((skill) => {
      return (
        <span className="skills-item" style={{ backgroundColor: skill.color }}>
          {skill.name}
        </span>
      );
    });
  return (
    <section className="skills">
      <h2>Skills</h2>
      <p className="skills-list">{listOfSkills}</p>
    </section>
  );
}

export default Skills;
