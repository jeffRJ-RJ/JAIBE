import React from "react";
import { ArrowUpRight } from "lucide-react";

type StreetCardYellowProps = {
  href?: string;
  external?: boolean;
  title: string;
  value: string;
  icon: React.ReactNode;

  badge?: string;          // ex: "ORIGINAL"
  showTape?: boolean;      // default true
  rightIcon?: React.ReactNode; // default ArrowUpRight
  className?: string;

  onClick?: React.MouseEventHandler<HTMLElement>;
};

export function StreetCardYellow({
  href,
  external,
  title,
  value,
  icon,
  badge,
  showTape = true,
  rightIcon,
  className = "",
  onClick,
}: StreetCardYellowProps) {
  const Comp: any = href ? "a" : "div";

  return (
    <Comp
      href={href}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={[
        "relative group border-2 border-border bg-primary/10 p-4",
        "shadow-[8px_8px_0_0_hsl(var(--foreground)/0.9)]",
        "transition-all hover:-translate-y-[2px]",
        "hover:border-primary/70 hover:bg-primary/14",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
        href ? "cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      {/* tape */}
      {showTape && (
        <div className="absolute -top-3 left-6 w-20 h-6 bg-primary/40 border-2 border-primary/70 rotate-[-6deg] opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* badge */}
      {badge && (
        <div className="absolute -top-3 -right-3 rotate-[8deg] border-2 border-primary/80 bg-primary/25 px-3 py-1 shadow-[5px_5px_0_0_hsl(var(--foreground)/0.9)]">
          <p className="font-display text-[10px] tracking-[0.35em] text-foreground/95">
            {badge}
          </p>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-secondary border-2 border-primary/50 flex items-center justify-center">
          {icon}
        </div>

        <div className="leading-tight">
          <p className="font-display text-[11px] text-muted-foreground tracking-[0.25em]">
            {title}
          </p>
          <p className="font-body text-sm text-foreground/95">{value}</p>
        </div>

        <span className="ml-auto">
          {rightIcon ?? (
            <ArrowUpRight
              size={16}
              className="text-foreground/30 group-hover:text-primary transition-colors"
            />
          )}
        </span>
      </div>
    </Comp>
  );
}
