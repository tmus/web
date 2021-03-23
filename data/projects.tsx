import { ReactNode } from "react";

type Project = {
  title: string;
  url: URL;
  body: ReactNode;
};

export const projects: Project[] = [
  {
    title: "Gostalt",
    url: new URL("https://github.com/gostalt"),
    body: <>A (unmaintained!) web app framework for Go</>,
  },
  {
    title: "Warband Builder",
    url: new URL("https://warbands.netlify.app"),
    body: (
      <>
        A webapp for building and tracking{" "}
        <span className="text-gray-600 dark:text-gray-300 font-bold">
          Burrows and Badgers
        </span>{" "}
        warbands
      </>
    ),
  },
];
