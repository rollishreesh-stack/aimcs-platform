import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIMCS",
  description:
    "Association for Intelligence in Medicine and Clinical Skills"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
