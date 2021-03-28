import { ReactNode } from "react";

type Project = {
  id: string;
  title: string;
  url: URL;
  body: ReactNode;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Gostalt",
    url: new URL("https://github.com/gostalt"),
    body: <>A (unmaintained!) web app framework for Go</>,
  },
  {
    id: "2",
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
