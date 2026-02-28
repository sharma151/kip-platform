import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

function SubMenuItem({ item, depth }: { item: NavItem; depth: number }) {
  const hasChildren = !!(item.subMenu && item.subMenu.length > 0);
  const isRootLevel = depth === 0;

  const labelClassName = cn(
    "block text-sm",
    isRootLevel
      ? "font-semibold text-slate-900 dark:text-slate-50"
      : "font-normal text-slate-700 dark:text-slate-200",
  );

  const LabelWrapper: React.ElementType = item.href ? Link : "span";
  const labelProps = item.href
    ? { href: item.href, className: labelClassName }
    : { className: labelClassName };

  return (
    <div className="rounded-[6px] px-3 py-1.5 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900">
      {React.createElement(LabelWrapper as any, labelProps, item.title)}

      {hasChildren && (
        <div className="mt-1 space-y-1">
          {item.subMenu!.map((child, index) => (
            <div key={buildKey(child, index)} className="pl-2">
              <SubMenuItem item={child} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SubMenuList({ items }: { items: NavItem[] }) {
  return (
    <ul className="min-w-55 whitespace-nowrap rounded-md border border-slate-200/70 bg-white/95 p-1 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/95">
      {items.map((item, index) => (
        <li key={buildKey(item, index)} className="list-none">
          <SubMenuItem item={item} depth={0} />
        </li>
      ))}
    </ul>
  );
}

export function DynamicNavigation({ navData }: DynamicNavigationProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {navData.map((item, index) => {
          const hasSubMenu = item.subMenu && item.subMenu.length > 0;
          const key = buildKey(item, index);

          if (hasSubMenu) {
            return (
          <NavigationMenuItem key={key}>
            <div className="relative">
              <NavigationMenuTrigger
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-2 text-[11px] font-semibold tracking-[0.18em]",
                )}
              >
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full z-50 mt-1 p-0">
                <SubMenuList items={item.subMenu!} />
              </NavigationMenuContent>
            </div>
          </NavigationMenuItem>
            );
          }

          if (item.href) {
            const isActive = pathname === item.href;

            return (
              <NavigationMenuItem key={key}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "px-2 text-[11px] font-medium tracking-[0.18em]",
                      isActive
                        ? "text-slate-900 dark:text-slate-50"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50",
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }

          return null;
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

