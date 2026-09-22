import type { ReactNode } from "react";

export function DataTable({ children }: { children: ReactNode }) {
  return (
    <div className="scrollbar-thin overflow-x-auto rounded-md border border-border">
      <table className="w-full min-w-[640px] border-collapse text-sm">{children}</table>
    </div>
  );
}

export function DataTableHead({ children }: { children: ReactNode }) {
  return (
    <thead className="border-b border-border bg-surface text-left text-xs uppercase tracking-wide text-text-faint">
      <tr>{children}</tr>
    </thead>
  );
}

export function DataTableBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-border">{children}</tbody>;
}

export function Th({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return <th className={`px-4 py-3 font-medium ${className}`}>{children}</th>;
}

export function Td({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`px-4 py-3 text-text ${className}`}>{children}</td>;
}
