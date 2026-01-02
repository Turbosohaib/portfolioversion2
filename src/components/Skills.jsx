import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Skills</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-neutral-100">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
