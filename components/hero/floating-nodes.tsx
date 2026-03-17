"use client"

const nodes = [
  { label: "Ingress", className: "left-[6%] top-[30%]" },
  { label: "Services", className: "right-[8%] top-[26%]" },
  { label: "Workers", className: "left-[12%] top-[68%]" },
  { label: "Registry", className: "right-[14%] top-[64%]" },
  { label: "Secrets", className: "left-[24%] top-[10%]" },
  { label: "Metrics", className: "right-[24%] top-[10%]" },
]

export function FloatingNodes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
      {nodes.map((node, index) => (
        <div key={node.label} className={`absolute ${node.className}`}>
          <span
            className="glass-panel node-pulse block rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
            style={{ animationDelay: `${index * 0.45}s` }}
          >
            {node.label}
          </span>
        </div>
      ))}
    </div>
  )
}
