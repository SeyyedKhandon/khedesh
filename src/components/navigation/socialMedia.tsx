import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function SocialMedia() {
  return (
    <section className="flex justify-evenly gap-2 text-4xl">
      <Link
        className="hover:text-slate-500 dark:hover:text-slate-600"
        href="https://github.com/seyyedkhandon"
      >
        <AiOutlineGithub />
      </Link>
      <Link
        className="hover:text-slate-500 dark:hover:text-slate-600"
        href="https://linkedin.com/in/seyyedkhandon"
      >
        <AiOutlineLinkedin />
      </Link>
      <Link
        className="hover:text-slate-500 dark:hover:text-slate-600"
        href="https://youtube.com/cafedx_com"
      >
        <AiOutlineYoutube />
      </Link>
    </section>
  );
}
