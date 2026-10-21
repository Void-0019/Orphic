import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
    href: string;
    children: ReactNode;
    variant: "primary" | "secondary";
    className?: string;
};

const variantStyles = {
  primary:
    "gap-2 bg-[#9a7cff] font-medium text-[#0c0c0f] hover:bg-[#b09cff]",

  secondary:
    "gap-3 text-[#c2c0ca] hover:text-white",
};

const LinkButton = (
    {
    href,
    children,
    variant,
    className = "",
    }: LinkButtonProps) => {
        
  return (
    <Link href={href} 
          className={["group inline-flex items-center justify-center rounded-lg",
                      "transition-colors",
                      "focus-visible:outline-2 focus-visible:outline-offset-4",
                      "focus-visible:outline-[#9a7cff]",
                      variantStyles[variant],
                      className,
          ].join(" ")}
    >
      {children}
    </Link>
  )
}

export default LinkButton;
