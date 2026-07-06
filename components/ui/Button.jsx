import Link from "next/link";

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-600/20",
  secondary:
    "bg-white text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50",
  ghost: "text-brand-700 hover:bg-brand-50",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {Icon && <Icon className="h-4 w-4" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </button>
  );
}
