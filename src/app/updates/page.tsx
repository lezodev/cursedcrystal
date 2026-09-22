import type { Metadata } from "next";
import { updates } from "@/data/updates";

export const metadata: Metadata = {
  title: "Updates",
  description: "Riwayat update dan patch notes Cursed Crystal.",
};

export default function UpdatesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Updates</h1>
      <p className="mt-2 text-text-muted">Riwayat pembaruan Cursed Crystal.</p>

      <div className="mt-10 space-y-10">
        {updates.map((update) => (
          <article key={update.version} className="border-l-2 border-accent pl-6">
            <p className="text-xs uppercase tracking-wide text-text-faint">
              Update {update.version} · {update.date}
            </p>
            <h2 className="mt-1 font-display text-xl font-semibold text-text">{update.title}</h2>
            <p className="mt-2 text-sm text-text-muted">{update.summary}</p>

            <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-text-faint">
              New
            </h3>
            <ul className="mt-2 space-y-1.5">
              {update.changes.map((change) => (
                <li key={change} className="flex gap-2 text-sm text-text">
                  <span className="text-accent" aria-hidden="true">•</span>
                  {change}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
