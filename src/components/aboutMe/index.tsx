import { Experiences } from "@/components/experiences";
import { educations, workExperience } from "@/data";

export default function AboutMe() {
  return (
    <section className="px-8">
      <h2 className="mb-4 text-2xl font-bold">About Me</h2>
      <p>
        Creative software developer with 7+ years of experience in design and
        development of 10+ admin panels, libraries and tools as part of
        cross-functional teams. Proficient in developing secure and
        pixel-perfect designs with a focus on details using cutting-edge
        technologies. Improved code structures that reduced code size by 30%
        with a simplicity and reusability mindset.
      </p>
      <h2 className="mt-12 text-2xl font-bold">Work Experiences</h2>
      <Experiences experiences={workExperience} />
      <h2 className="mt-12 text-2xl font-bold">Educations</h2>
      <Experiences experiences={educations} />
    </section>
  );
}
