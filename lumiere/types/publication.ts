export type Publication = {
  id: string;
  title: string;
  authors: string[];
  year: number;
  type: "article" | "event" | "report" | "summary";
  venue: string | null;
  doi: string | null;
  externalUrl: string | null;
  abstract: string | null;
  createdAt: Date;
  updatedAt: Date;
};