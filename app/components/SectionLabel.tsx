export default function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3 text-xs sm:text-sm">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
        {number}
      </span>
      <span className="rounded-full border border-gray-300 px-4 py-1.5 font-medium">
        {children}
      </span>
    </div>
  );
}
