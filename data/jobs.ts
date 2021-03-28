type Job = {
  id: string;
  company: string;
  url: URL;
  position: string;
  start: Date;
  end?: Date;
};

export const jobs: Job[] = [
  {
    id: "1",
    company: "Sky Betting and Gaming",
    url: new URL("https://www.skybetcareers.com/"),
    position: "Software Engineer",
    start: new Date("2019-11-01"),
  },
];

export function renderDateRange(start: Date, end?: Date): string {
  return `${start.getFullYear()}–${end ? end.getFullYear() : "Present"}`;
}
