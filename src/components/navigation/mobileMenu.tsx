import Link from "next/link";
import { useState } from "react";
import { AiOutlineAlignRight, AiOutlineArrowRight } from "react-icons/ai";
import SocialMedia from "./socialMedia";
export default function MobileMenu() {
  const [show, setShow] = useState(false);
  return (
    <nav className="z-10 overflow-hidden">
      <AiOutlineAlignRight
        className="cursor-pointer text-2xl"
        onClick={() => setShow(!show)}
      />
      <ul
        onClick={() => setShow(false)}
        className={`${
          show ? "translate-x-0" : "translate-x-full"
        } fixed top-0 left-0 right-0 h-screen w-screen  space-y-4 bg-slate-50 p-4 text-2xl transition-all dark:bg-gray-900 md:hidden`}
      >
        <li className="flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-600">
          <Link href="/">Home</Link>
          <AiOutlineArrowRight
            className="cursor-pointer text-right text-2xl"
            onClick={() => setShow(false)}
          />
        </li>
        <li className="hover:bg-slate-100 dark:hover:bg-slate-600">
          <Link className="block" href="/about">
            About
          </Link>
        </li>
        <li className="hover:bg-slate-100 dark:hover:bg-slate-600">
          <Link className="block" href="/technologies">
            TechStack
          </Link>
        </li>
        <li className="hover:bg-slate-100 dark:hover:bg-slate-600">
          <Link className="block" href="/projects">
            Projects
          </Link>
        </li>
        <li className="hover:bg-slate-100 dark:hover:bg-slate-600">
          <Link className="block" href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <SocialMedia />
        </li>
      </ul>
    </nav>
  );
}
