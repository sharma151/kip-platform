import type { GetStaticProps } from "next";
import Head from "next/head";

import {
  loadExamFrontmatter,
  type ExamFrontmatter,
  type ExamQuestion,
} from "@/lib/examContent";

type ExamPageProps = {
  frontmatter: ExamFrontmatter;
};

function QuestionCard({
  question,
  index,
}: {
  question: ExamQuestion;
  index: number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
      <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-50">
        Q{index + 1}. {question.q}
      </p>
      <div className="space-y-2">
        {question.options.map((opt, i) => {
          const isAnswer = question.answer === i;

          return (
            <div
              key={i}
              className={[
                "flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-sm",
                isAnswer
                  ? "border-emerald-500 bg-emerald-50/80 text-emerald-900 dark:border-emerald-400 dark:bg-emerald-900/30 dark:text-emerald-100"
                  : "border-slate-200 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span>{opt}</span>
              {isAnswer && (
                <span className="ml-3 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  Correct
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TeachingExamsPage({ frontmatter }: ExamPageProps) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | KIP</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      <main className="mx-auto w-full max-w-3xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {frontmatter.title}
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {frontmatter.description}
          </p>
        </header>

        <section className="space-y-4">
          {frontmatter.questions.map((q, idx) => (
            <QuestionCard key={idx} question={q} index={idx} />
          ))}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<ExamPageProps> = async () => {
  const frontmatter = loadExamFrontmatter("teaching");

  return {
    props: {
      frontmatter,
    },
  };
};

