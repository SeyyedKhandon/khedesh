import {
  MdOutlineBusiness,
  MdOutlineLocationOn,
  MdOutlineOpenInNew,
} from "react-icons/md";

import { Experience } from "@/data";
import Link from "next/link";

export function Experience({ experience }: { experience: Experience }) {
  return (
    <div className="mt-2 flex flex-col flex-wrap gap-2 border-b border-gray-500">
      <div className="flex flex-wrap justify-between">
        <p className="text-lg">{experience.position}</p>
        <p className="ml-auto min-w-fit rounded-full bg-green-100 p-1 px-3 text-xs text-gray-500 dark:bg-green-200 dark:text-gray-800">
          {experience.type}
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center gap-2 md:col-span-3">
          <MdOutlineBusiness />
          <p className="flex items-center gap-1">
            {experience.company}
            {experience.site && (
              <Link href={experience.site} target="_blank">
                <MdOutlineOpenInNew className="hover:text-indigo-500" />
              </Link>
            )}
          </p>
        </div>
        <p className="ml-auto text-sm text-gray-400  dark:text-gray-300">
          {experience.duration}
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <p className="flex items-center gap-2 text-sm text-gray-500   dark:text-gray-300">
          <MdOutlineLocationOn /> {experience.location}
        </p>
        {experience.more && (
          <p className="text-gray-400   dark:text-gray-300">
            {experience.more}
          </p>
        )}
      </div>
    </div>
  );
}
