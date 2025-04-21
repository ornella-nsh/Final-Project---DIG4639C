const projects = [
  {
    title: "Project 1",
    description: "Brief description...",
    image: "/assets/project1.jpg",
    link: "https://github.com/your/project1",
  },

  {
    title: "Project 2",
    description: "Brief description...",
    image: "/assets/project2.jpg",
    link: "",
  },
  {
    title: "Project 3",
    description: "Brief description...",
    image: "/assets/project2.jpg",
    link: "",
  },
  {
    title: "Project 4",
    description: "Brief description...",
    image: "/assets/project2.jpg",
    link: "",
  },
];

export default function Projects() {
  return (
    <section>
      <h2>My Work</h2>
      {projects.map((proj) => (
        <div key={proj.title}>
          <img src={proj.image} alt={proj.title} />
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <a href={proj.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
}
