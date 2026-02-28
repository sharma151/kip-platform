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
    title: "PYQ",
    subMenu: [],
  },
  {
    title: "CURRENT AFFAIRS",
    subMenu: [
      { title: "DAILY CURRENT AFFAIRS", href: "/current-affairs/daily" },
      { title: "MONTHLY CURRENT AFFAIRS", href: "/current-affairs/monthly" },
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
      { title: "STUDY MATERIAL", href: "/resources/study-material" },
      { title: "CURRENT AFFAIRS", href: "/resources/current-affairs" },
      { title: "TEST SERIES", href: "/resources/test-series" },
      { title: "VIDEOS", href: "/resources/videos" },
    ],
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];
