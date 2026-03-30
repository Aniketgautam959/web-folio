export function SkillTag({ children }) {
  return (
    <span className="inline-block px-2 py-1 bg-zinc-50 dark:bg-zinc-800/50 text-xs rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
      {children}
    </span>
  );
}
