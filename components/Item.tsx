import { ReactNode } from "react";
import Link from "next/link";

interface ItemProps {
  title: string;
  href: string;
  children?: ReactNode;
}

export function Item({ title, href, children }: ItemProps) {
  return (
    <dl className="pb-8">
      <dt>
        <Link href={href}>
          <a className="text-xl hover:text-purple-600 dark:hover:text-purple-200 transition-colors duration-100">
            {title} →
          </a>
        </Link>
      </dt>
      {children && <dd>{children}</dd>}
    </dl>
  );
}
