import { jobs, renderDateRange } from "@data/jobs";

import { Divider } from "@components/Divider";
import Head from "next/head";
import { Header } from "@components/Header";
import { Item } from "@components/Item";
import { Section } from "@components/Section";
import { projects } from "@data/projects";

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
          {jobs.map((job) => {
            return (
              <Item key={job.id} title={job.company} href={job.url.href}>
                — {job.position},{" "}
                <small>{renderDateRange(job.start, job.end)}</small>
              </Item>
            );
          })}
        </Section>

        <Divider />

        <Section title="Projects">
          {projects.map((project) => {
            return (
              <Item key={project.id} title={project.title} href={project.url.href}>
                {project.body}
              </Item>
            );
          })}
        </Section>
      </main>
    </div>
  );
}
