import { Clock } from "lucide-react";
import Link from "next/link";

type ComingSoonProps = {
  title: string;
  description?: string;
  backHref?: string;
};

export function ComingSoon({
  title,
  description,
  backHref = "/",
}: ComingSoonProps) {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm dark:bg-slate-900 dark:text-emerald-300">
        <Clock className="h-8 w-8" />
      </div>
      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
        {title} — Coming Soon
      </h1>
      <p className="mb-6 max-w-xl text-sm text-slate-600 dark:text-slate-300">
        {description ??
          "We are actively working on this section. Please check back soon for new content and features tailored for you."}
      </p>
      <Link
        href={backHref}
        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-700 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:bg-slate-900 dark:hover:text-emerald-300"
      >
        Go back home
      </Link>
    </main>
  );
}

