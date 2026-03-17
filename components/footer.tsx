export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-white/5 px-6 py-10 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-muted-foreground">
            {"<HS />"}
          </span>
          <span className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
        <p className="text-xs text-muted-foreground/50">
          Designed & built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
