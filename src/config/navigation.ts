export type NavItem = {
  title: string;
  titleKey?: string;
  href?: string;
  description?: string;
  subMenu?: NavItem[];
};

export const navigationConfig: NavItem[] = [
  {
    title: "HOME",
    titleKey: "nav.home",
    href: "/",
  },
  {
    title: "EXAM",
    titleKey: "nav.exam",
    subMenu: [
      { title: "SSC EXAMS", titleKey: "nav.exam_ssc", href: "/exams/ssc" },
      { title: "TEACHING EXAMS", titleKey: "nav.exam_teaching", href: "/exams/teaching" },
      { title: "RAILWAYS EXAMS", titleKey: "nav.exam_railways", href: "/exams/railways" },
      { title: "STATE GOVT. EXAMS", titleKey: "nav.exam_stateGovt", href: "/exams/state-govt" },
      { title: "OTHER GOVT. EXAMS", titleKey: "nav.exam_otherGovt", href: "/exams/other-govt" },
    ],
  },
  {
    title: "CURRENT AFFAIRS",
    titleKey: "nav.currentAffairs",
    subMenu: [
      { title: "MONTHLY CURRENT AFFAIRS", titleKey: "nav.currentAffairs_monthly", href: "/current-affairs/monthly" },
      { title: "DAILY CURRENT AFFAIRS", titleKey: "nav.currentAffairs_daily", href: "/current-affairs/daily" },
      { title: "GOVERNMENT SCHEMES", titleKey: "nav.currentAffairs_schemes", href: "/current-affairs/schemes" },
    ],
  },
  {
    title: "QUIZ",
    titleKey: "nav.quiz",
    href: "/quiz",
  },
  {
    title: "RESOURCES",
    titleKey: "nav.resources",
    subMenu: [
      {
        title: "PREVIOUS YEAR QUESTIONS",
        titleKey: "nav.resources_pyp",
        href: "/resources/previous-year-questions",
      },
      { title: "CURRENT AFFAIRS", titleKey: "nav.resources_currentAffairs", href: "/resources/current-affairs" },
      { title: "STUDY MATERIAL", titleKey: "nav.resources_studyMaterial", href: "/resources/study-material" },
      { title: "TEST SERIES", titleKey: "nav.resources_testSeries", href: "/resources/test-series" },
      { title: "VIDEOS", titleKey: "nav.resources_videos", href: "/resources/videos" },
    ],
  },
  {
    title: "CONTACT",
    titleKey: "nav.contact",
    href: "/contact",
  },
];
