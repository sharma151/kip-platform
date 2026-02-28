import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/UI/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
// import { ExploreOfferings } from "@/components/Offerings/ExploreOfferings";
import { courses } from "@/utils/courses";
import { resources } from "@/utils/resources";

export default function HomePage() {
  const { t } = useTranslation();

  const featuredCourses = courses.slice(0, 3);
  const featuredResources = resources.slice(0, 3);

  return (
    <>
      <Head>
        <title>KIP — Knowledge Improvement Point</title>
        <meta
          name="description"
          content="Knowledge Improvement Point (KIP) is an internal education platform providing practical courses and curated resources."
        />
      </Head>

      <motion.section
        className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Internal learning hub for your team</span>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
            {t("home.headline")}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {t("home.subhead")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/courses" className="inline-flex items-center gap-2">
                {t("nav.courses")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resources">{t("nav.resources")}</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-emerald-400/10 p-6 shadow-lg shadow-indigo-500/5 dark:border-slate-800/80 dark:from-indigo-500/10 dark:via-slate-900 dark:to-emerald-400/10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            KIP SNAPSHOT
          </p>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm backdrop-blur dark:bg-slate-950/70">
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                3
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Core tracks
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm backdrop-blur dark:bg-slate-950/70">
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                10+
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Hours content
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm backdrop-blur dark:bg-slate-950/70">
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                2
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Languages
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* feature courses */}

      <motion.section
        className="mt-12 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            {t("home.featuredCourses")}
          </h2>
          <Link
            href="/courses"
            className="text-sm text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
          >
            {t("nav.courses")}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredCourses.map((course) => (
            <Card key={course.slug}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>
                  {course.level} · {course.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {course.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
      {/* popular Ressources */}
      <motion.section
        className="mt-12 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            {t("home.featuredResources")}
          </h2>
          <Link
            href="/resources"
            className="text-sm text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
          >
            {t("nav.resources")}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredResources.map((res) => (
            <Card key={res.href}>
              <CardHeader>
                <CardTitle>{res.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {res.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
      {/* <ExploreOfferings /> */}
    </>
  );
}
