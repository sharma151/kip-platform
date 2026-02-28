import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ExamQuestion = {
  q: string;
  options: string[];
  answer: number;
};

export type ExamFrontmatter = {
  title: string;
  description: string;
  questions: ExamQuestion[];
};

const examsContentDir = path.join(process.cwd(), "content", "exams");

export function loadExamFrontmatter(slug: string): ExamFrontmatter {
  const filePath = path.join(examsContentDir, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return {
    title: data.title ?? "",
    description: data.description ?? "",
    questions: (data.questions ?? []) as ExamQuestion[],
  };
}

