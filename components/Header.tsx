import { config } from "config";
import Link from "next/link";

type HeaderProps = {
  title: string;
  description?: string;
  socials?: boolean;
};

export function Header({ title, description, socials }: HeaderProps) {
  return (
    <header className="text-gray-700 dark:text-white py-16">
      {title !== config.siteTitle && (
        <div className="text-sm mb-8">
          <Link href="/">
            <a className="hover:text-purple-600 dark:hover:text-purple-200 transition-colors duration-100">
              ← Home
            </a>
          </Link>
        </div>
      )}
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      {description && <h2 className="text-xl mb-2">{description}</h2>}
      {socials && (
        <nav>
          <li className="list-none">
            <a
              className="hover:text-purple-600 transition-colors duration-100"
              href="https://twitter.com/_tmus"
            >
              Twitter →
            </a>
          </li>
        </nav>
      )}
    </header>
  );
}
