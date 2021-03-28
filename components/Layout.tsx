import { ReactNode } from "react";
import Head from "next/head";

import { Header } from "@components/Header";
import { Divider } from "@components/Divider";

type LayoutProps = {
  title: string;
  description?: string;
  socials?: boolean;
  children: ReactNode;
};

export function Layout({ title, description, children, socials }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={title} description={description} socials={socials} />
      <Divider />
      {children}
    </div>
  );
}
