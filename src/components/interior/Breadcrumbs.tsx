import type {ReactNode} from "react";

import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

export type BreadcrumbItem = {
  label: ReactNode;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  dark?: boolean;
};

export function Breadcrumbs({items, dark = false}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${index}-${String(item.label)}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors hover:underline focus-visible:underline",
                    dark ? "text-text-on-dark/70 hover:text-text-on-dark" : "text-secondary-text hover:text-rail-ink",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast && (dark ? "text-text-on-dark" : "text-rail-ink"))} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast ? <span aria-hidden="true" className={dark ? "text-rail-cyan/70" : "text-ethiorail-deep-green/60"}>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
