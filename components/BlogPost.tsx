import { ReactNode } from "react";
import { Layout } from "@components/Layout";

type BlogPostProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function BlogPost({ title, description, children }: BlogPostProps) {
  return (
    <Layout title={title} description={description}>
      <article className="prose dark:prose-dark py-16 text-gray-700 dark:text-white">
        {children}
      </article>
    </Layout>
  );
}
