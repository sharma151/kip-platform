import Head from "next/head";
import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";

import { CourseCard } from "@/components/Courses/CourseCard";
import { ExploreOfferings } from "@/components/Offerings/ExploreOfferings";
import { courses } from "@/utils/courses";

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Courses — KIP</title>
        <meta
          name="description"
          content="Browse the full catalog of KIP courses, including communication, security, and productivity tracks."
        />
      </Head>
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm dark:bg-indigo-500/15 dark:text-indigo-200">
            <Layers3 className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Courses</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-300">
              Practical learning paths designed to create visible impact at work.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
            
          ))}
        </div>
      </motion.section>

      <ExploreOfferings />
    </>
  );
}

