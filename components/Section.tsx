import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="text-gray-700 dark:text-white py-16">
      <h3 className="uppercase text-sm tracking-widest font-semibold text-gray-500 pb-4">
        {title}
      </h3>
      {children}
    </section>
  );
}
