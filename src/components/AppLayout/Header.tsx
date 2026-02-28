import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { BookOpen, Globe2, Moon, SunMedium } from "lucide-react";

// import { useAuth } from "@/components/Auth/AuthProvider";
// import { Button } from "@/components/UI/button";
// import { Switch } from "@/components/UI/switch";
import { setLanguage, type SupportedLanguage } from "@/translations/i18n";
import { useThemeStore } from "@/store/themeStore";
import { DynamicNavigation } from "@/components/AppLayout/DynamicNavigation";
import { navigationConfig } from "@/config/navigation";

function NavLink({ href, label }: { href: string; label: string }) {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      className={[
        "text-sm font-medium transition-colors",
        isActive ? "text-slate-900 dark:text-slate-50" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const { t, i18n } = useTranslation();
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  // const { user, logout } = useAuth();

  const currentLang = (i18n.language === "hi" ? "hi" : "en") satisfies SupportedLanguage;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-emerald-400 text-white shadow-md dark:from-indigo-400 dark:via-indigo-500 dark:to-emerald-300">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
              KIP
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">{t("appName")}</span>
          </span>
        </Link>

        <nav className="hidden items-center md:flex">
          <DynamicNavigation navData={navigationConfig} />
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 px-2 py-1 text-xs text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
              <Globe2 className="mr-1 h-3.5 w-3.5" />
              <select
                aria-label={t("common.language")}
                value={currentLang}
                onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                className="bg-transparent text-xs outline-none"
              >
                <option value="en">EN</option>
                <option value="hi">HI</option>
              </select>
            </div>

            <button
              type="button"
              aria-label={t("common.theme")}
              onClick={() => toggleTheme()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              {theme === "dark" ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
            </button>
          </div>

          {/* {user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="hidden items-center gap-1 rounded-full border border-transparent px-3 py-1 text-sm text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50/60 hover:text-indigo-700 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:bg-slate-900/80 dark:hover:text-emerald-300 sm:inline-flex"
              >
                <UserCircle2 className="h-4 w-4" />
                {t("common.dashboard")}
              </Link>
              <Button variant="outline" onClick={logout}>
                {t("common.logout")}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link href="/auth/login">{t("common.login")}</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">{t("common.register")}</Link>
              </Button>
            </div>
          )} */}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 pb-3 md:hidden">
        <nav className="flex flex-wrap items-center gap-4">
          <NavLink href="/" label={t("nav.home")} />
          <NavLink href="/courses" label={t("nav.courses")} />
          <NavLink href="/resources" label={t("nav.resources")} />
          <NavLink href="/about" label={t("nav.about")} />
          <NavLink href="/contact" label={t("nav.contact")} />
        </nav>
        <div className="flex items-center gap-2">
          <select
            aria-label={t("common.language")}
            value={currentLang}
            onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
            className="h-8 rounded-full border border-slate-200 bg-white px-2 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>
          <button
            type="button"
            aria-label={t("common.theme")}
            onClick={() => toggleTheme()}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}

