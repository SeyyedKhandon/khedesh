import { Skill as SkillType } from "@/data";

export default function Skill({ skill }: { skill: SkillType }) {
  return (
    <div>
      <h4 className="text-lg font-semibold">{skill.title}</h4>
      <p>{skill.items}</p>
    </div>
  );
}
