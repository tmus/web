import Link from "next/link";
import { SiTypescript } from "react-icons/si";

type PlaygroundLinkProps = {
  // TODO: Eventually switch on this when other links are created.
  icon: "typescript";
  link: URL;
  callout: string;
};

export function PlaygroundLink({ icon, link, callout }: PlaygroundLinkProps) {
  return (
    <Link href={link.href}>
      <a>
        <aside className="cursor-pointer rounded-xl bg-gray-100 transition-all duration-100 shadow-lg hover:shadow-2xl hover:bg-blue-200 p-8 my-16 dark:bg-gray-800 dark:hover:bg-blue-900">
          <div className="text-4xl pb-8">
            <SiTypescript />
          </div>
          {callout}
        </aside>
      </a>
    </Link>
  );
}
