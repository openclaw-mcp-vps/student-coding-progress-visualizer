import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Coding Progress Visualizer",
  description: "Visualize student coding skill progression over time. Analyze git commits, code complexity, and project evolution."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a05e0a8c-131e-415d-b463-36d24f3edc89"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
