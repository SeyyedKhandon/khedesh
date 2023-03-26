import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const text = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (text.current) text.current.classList.remove("-translate-x-[100rem]");
    if (image.current) image.current.classList.remove("translate-x-[100rem]");
  }, []);
  return (
    <section className="mx-10 mt-20 flex h-screen flex-col items-center gap-5 text-3xl font-semibold">
      <h1
        ref={text}
        className="-translate-x-[100rem] transition-transform duration-1000"
      >
        Hi‚👋
        <br />
        My Name is
        <br />
        <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-2xl font-bold text-transparent dark:from-blue-300 dark:to-pink-100">
          SeyyedMahdi Hassanpour
        </span>
        <br />I build things for Web.
      </h1>
      <div
        ref={image}
        className="inline-block translate-x-[100rem] rounded-full   bg-gradient-to-t from-blue-500 to-pink-500 p-2 transition-transform duration-1000"
      >
        <Image
          className="rounded-full  grayscale"
          src="/profile-image.jpg"
          alt="Profile Image of SeyyedMahdi Hassanpour"
          width="300"
          height="300"
        />
      </div>
    </section>
  );
}
