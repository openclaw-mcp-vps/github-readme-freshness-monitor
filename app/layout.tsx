import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "README Freshness Monitor – Alert When Docs Go Stale",
  description: "Monitors GitHub repos for changes that make README files outdated and sends alerts when documentation needs updates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="59766192-6c84-424c-a326-6822c9a0cb7f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
