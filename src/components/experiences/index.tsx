import { Experience as ExperienceType } from "@/data";
import { Experience } from "./experience";

export function Experiences({
  experiences,
}: {
  experiences: ExperienceType[];
}) {
  return (
    <ul className="mt-4 flex flex-col gap-4">
      {experiences.map((work) => (
        <li key={JSON.stringify(work)}>
          <Experience experience={work} />
        </li>
      ))}
    </ul>
  );
}
