import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-5 px-8 text-3xl font-semibold">
      <h1 className="animate-fade-in-left">
        Hi‚👋
        <br />
        My Name is
        <br />
        <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-2xl font-bold text-transparent dark:from-blue-300 dark:to-pink-100">
          SeyyedMahdi Hassanpour
        </span>
        <br />I build things for Web.
      </h1>
      <div className="inline-block animate-fade-in-right rounded-full bg-gradient-to-t from-blue-500 to-pink-500 p-2">
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
