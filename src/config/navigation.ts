export type NavItem = {
  title: string;
  href?: string;
  description?: string;
  subMenu?: NavItem[];
};

export const navigationConfig: NavItem[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "EXAM",
    subMenu: [
      { title: "SSC EXAMS", href: "/exams/ssc" },
      { title: "TEACHING EXAMS", href: "/exams/teaching" },
      { title: "RAILWAYS EXAMS", href: "/exams/railways" },
      { title: "STATE GOVT. EXAMS", href: "/exams/state-govt" },
      { title: "OTHER GOVT. EXAMS", href: "/exams/other-govt" },
    ],
  },
  {
    title: "CURRENT AFFAIRS",
    subMenu: [
      { title: "MONTHLY CURRENT AFFAIRS", href: "/current-affairs/monthly" },
      { title: "DAILY CURRENT AFFAIRS", href: "/current-affairs/daily" },
      { title: "GOVERNMENT SCHEMES", href: "/current-affairs/schemes" },
    ],
  },
  {
    title: "QUIZ",
    href: "/quiz",
  },
  {
    title: "RESOURCES",
    subMenu: [
      {
        title: "PREVIOUS YEAR QUESTIONS",
        href: "/resources/previous-year-questions",
      },
      { title: "CURRENT AFFAIRS", href: "/resources/current-affairs" },
      { title: "STUDY MATERIAL", href: "/resources/study-material" },
      { title: "TEST SERIES", href: "/resources/test-series" },
      { title: "VIDEOS", href: "/resources/videos" },
    ],
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];
