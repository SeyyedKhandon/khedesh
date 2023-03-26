import { skills } from "@/data";
import Skill from "@/components/skill";

export default function Skills() {
  return (
    <section className="mx-8 my-8" id="skills">
      <h3 className="mb-4 text-2xl font-bold">Skills</h3>
      <div className="space-y-4 md:grid md:grid-cols-2">
        {skills.map((s) => (
          <Skill key={s.title} skill={s} />
        ))}
      </div>
    </section>
  );
}
