import { ReactNode } from "react";

interface ItemProps {
  title: string;
  href: string;
  children: ReactNode;
}

export function Item({ title, href, children }: ItemProps) {
  return (
    <dl className="pb-8">
      <dt>
        <a
          href={href}
          className="text-xl hover:text-purple-600 dark:hover:text-purple-200 transition-colors duration-100"
        >
          {title} →
        </a>
      </dt>
      <dd>{children}</dd>
    </dl>
  );
}
