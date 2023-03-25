import Accomplishments from "@/components/accomplishments/accomplishments";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";
import TimeLine from "@/components/timeLine/timeLine";
import Head from "next/head";

function HeadTag() {
  return (
    <Head>
      <title>Khedesh - Portfolio</title>
      <meta name="description" content="Khedesh - Portfolio - Online Resume" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default function Home() {
  return (
    <>
      <HeadTag />
      <Hero />
      <Projects />
      <Technologies />
      <TimeLine />
      <Accomplishments />
    </>
  );
}
