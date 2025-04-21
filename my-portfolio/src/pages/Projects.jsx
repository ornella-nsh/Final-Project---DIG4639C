import FadeInWrapper from "../components/FadeInWrapper";

const projects = [
  {
    title: "Shelfmate",
    description: "A pantry management solution with wellness in mind.",
    image: "/src/assets/project1.png",
    link: "https://github.com/your/project1",
  },

  {
    title: "Marketing & Graphic Design",
    description: "A collection of recent graphic design projects.",
    image: "/src/assets/project2.jpg",
    link: "",
  },
  {
    title: "Amazon Redesign",
    description:
      "Amazon homepage and navigation redesign for a school project, made in Figma.",
    image: "src/assets/project3.png",
    link: "",
  },
  {
    title: "ARound the World",
    description: "Augmented Reality app concept & product pitch.",
    image: "src/assets/project4.png",
    link: "",
  },
];

export default function Projects() {
  return (
    <FadeInWrapper>
      <section>
        <h2>My Work</h2>
        {projects.map((proj) => (
          <div key={proj.title}>
            <h3>{proj.title}</h3>
            <img src={proj.image} alt={proj.title} />
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </section>
    </FadeInWrapper>
  );
}
