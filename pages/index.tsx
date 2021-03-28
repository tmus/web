import { jobs, renderDateRange } from "@data/jobs";

import { Divider } from "@components/Divider";
import { Item } from "@components/Item";
import { Section } from "@components/Section";
import { projects } from "@data/projects";
import { Layout } from "@components/Layout";

export default function Home() {
  return (
    <Layout title="Thomas Smith" description="Software Engineer" socials>
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
            <Item
              key={project.id}
              title={project.title}
              href={project.url.href}
            >
              {project.body}
            </Item>
          );
        })}
      </Section>
    </Layout>
  );
}
