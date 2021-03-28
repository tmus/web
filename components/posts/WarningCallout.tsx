import { ReactNode } from "react";
import { Callout } from "./Callout";

type WarningCalloutProps = {
  title?: string;
  children: ReactNode;
};

export function WarningCallout({ title, children }: WarningCalloutProps) {
  return (
    <Callout title={title} background={["bg-yellow-100", "dark:bg-yellow-900"]}>
      {children}
    </Callout>
  );
}
