import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const hasImage = Boolean(project.image);

  return (
    <div className="mb-10 flex flex-wrap lg:justify-center">
      {hasImage ? (
        <div className="w-full lg:w-1/4">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <img
              src={project.image}
              width={150}
              height={150}
              alt={project.title}
              className="mb-6 rounded"
            />
          </a>
        </div>
      ) : null}
      <div className={`w-full ${hasImage ? "max-w-xl lg:w-3/4" : "max-w-2xl"}`}>
        <h6 className="mb-2 text-lg font-semibold">{project.title}</h6>
        <p className="mb-3 text-neutral-400">{project.summary}</p>
        <ul className="mb-4 list-disc space-y-2 pl-5 text-neutral-400">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
            aria-label={`Live demo for ${project.title}`}
          >
            Live Demo
          </a>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
              aria-label={`GitHub repository for ${project.title}`}
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        <h3 className="mb-8 text-2xl font-semibold">
          Featured Professional Projects
        </h3>
        {PROJECTS.featured.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
        <h3 className="mb-8 mt-12 text-2xl font-semibold">
          Personal Projects
        </h3>
        {PROJECTS.personal.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
