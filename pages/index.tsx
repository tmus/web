import Head from "next/head";
import { Header } from "../components/Header";
import { Divider } from "../components/Divider";
import { Section } from "../components/Section";
import { Item } from "../components/Item";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thomas Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-8 md:m-auto md:max-w-screen-sm">
        <Header />

        <Divider />

        <Section title="Current Position">
          <Item
            title="Sky Betting and Gaming"
            href="https://www.skybetcareers.com/"
          >
            — Software Engineer, <small>2019–Present</small>
          </Item>
        </Section>

        <Divider />

        <Section title="Projects">
          <Item title="Gostalt" href="https://github.com/gostalt">
            A (unmaintained!) web app framework for Go
          </Item>

          <Item title="Warband Builder" href="https://warbands.netlify.app">
            A webapp for building and tracking{" "}
            <span className="text-gray-600 font-bold">Burrows and Badgers</span>{" "}
            warbands
          </Item>
        </Section>
      </main>
    </div>
  );
}
