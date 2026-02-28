import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import type { NavItem } from "@/config/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/UI/navigation-menu";
import { cn } from "@/utils/cn";

type DynamicNavigationProps = {
  navData: NavItem[];
};

const buildKey = (item: NavItem, index: number) =>
  `${item.title}-${item.href ?? index}`;

function SubMenuItem({
  item,
  depth,
  currentPath,
  getLabel,
}: {
  item: NavItem;
  depth: number;
  currentPath: string | null;
  getLabel: (item: NavItem) => string;
}) {
  const hasChildren = !!(item.subMenu && item.subMenu.length > 0);
  const isRootLevel = depth === 0;
  const isActiveLink = item.href && item.href === currentPath;
  const label = getLabel(item);

  const labelClassName = cn(
    "block text-sm",
    isRootLevel
      ? "font-semibold text-slate-900 dark:text-slate-50"
      : "font-normal text-slate-700 dark:text-slate-200",
  );

  const LabelWrapper: React.ElementType =
    item.href && !isActiveLink ? Link : "span";
  const labelProps =
    item.href && !isActiveLink
      ? { href: item.href, className: labelClassName }
      : { className: labelClassName };

  return (
    <div className="rounded-[6px] px-3 py-1.5 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900">
      {React.createElement(LabelWrapper as any, labelProps, label)}

      {hasChildren && (
        <div className="mt-1 space-y-1">
          {item.subMenu!.map((child, index) => (
            <div key={buildKey(child, index)} className="pl-2">
              <SubMenuItem
                item={child}
                depth={depth + 1}
                currentPath={currentPath}
                getLabel={getLabel}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SubMenuList({
  items,
  currentPath,
  getLabel,
}: {
  items: NavItem[];
  currentPath: string | null;
  getLabel: (item: NavItem) => string;
}) {
  return (
    <ul className="min-w-55 whitespace-nowrap rounded-md border border-slate-200/70 bg-white/95 p-1 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/95">
      {items.map((item, index) => (
        <li key={buildKey(item, index)} className="list-none">
          <SubMenuItem item={item} depth={0} currentPath={currentPath} getLabel={getLabel} />
        </li>
      ))}
    </ul>
  );
}

export function DynamicNavigation({ navData }: DynamicNavigationProps) {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use static title until mounted to avoid hydration mismatch (server uses default lang, client may restore "hi" from localStorage).
  const getLabel = (item: NavItem) =>
    mounted && item.titleKey ? t(item.titleKey) : item.title;

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {navData.map((item, index) => {
          const hasSubMenu = item.subMenu && item.subMenu.length > 0;
          const key = buildKey(item, index);
          const label = getLabel(item);

          if (hasSubMenu) {
            return (
          <NavigationMenuItem key={key} className="relative">
            <NavigationMenuTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "px-2 text-[11px] font-semibold tracking-[0.18em]",
              )}
            >
              {label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-0">
              <SubMenuList items={item.subMenu!} currentPath={pathname} getLabel={getLabel} />
            </NavigationMenuContent>
          </NavigationMenuItem>
            );
          }

          if (item.href) {
            const isActive = pathname === item.href;

            return (
              <NavigationMenuItem key={key}>
            {isActive ? (
              <span
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-2 text-[11px] font-medium tracking-[0.18em] text-slate-900 dark:text-slate-50",
                )}
              >
                {label}
              </span>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "px-2 text-[11px] font-medium tracking-[0.18em]",
                    "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50",
                  )}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            )}
              </NavigationMenuItem>
            );
          }

          return null;
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

