export type Project = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  status: "draft" | "published";
  createdAt: Date;
  updatedAt: Date;
};