import IconArrowRight from "@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs";

export default function ActionLink({
  children,
  href = "#contacto",
  dark = false,
  mobileFullWidth = false,
}: {
  children: string;
  href?: string;
  dark?: boolean;
  mobileFullWidth?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-5 ${mobileFullWidth ? "w-full sm:w-fit justify-between" : "w-fit"} rounded-full py-2 pl-6 pr-2 text-sm font-medium text-white transition-colors ${dark ? "bg-ink hover:bg-gray-700" : "bg-primary hover:bg-ember"}`}
    >
      <span className="h-5 overflow-hidden whitespace-nowrap">
        <span className="flex flex-col transition-transform duration-500 ease-roll group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2 motion-reduce:transform-none">
          <span className="h-5">{children}</span>
          <span aria-hidden="true" className="h-5">
            {children}
          </span>
        </span>
      </span>
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ${dark ? "text-ink" : "text-primary"}`}
      >
        <IconArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-500 ease-roll group-hover:-rotate-45 motion-reduce:transform-none"
        />
      </span>
    </a>
  );
}
