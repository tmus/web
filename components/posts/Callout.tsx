import { ReactNode } from "react";

type CalloutProps = {
  title?: string;
  children: ReactNode;
  background?: [light: string, dark: string];
};

export function Callout({ title, children, background }: CalloutProps) {
  return (
    <aside
      className={`${background?.[0] || "bg-gray-100"} ${
        background?.[1] || "dark:bg-gray-800"
      } rounded-xl p-8`}
    >
      <div className="uppercase text-sm tracking-widest pb-4 text-gray-500 dark:text-gray-300 font-semibold">
        {title}
      </div>
      {children}
    </aside>
  );
}
