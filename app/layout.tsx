import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxury Wedding Planner Website Demo | Aurelia Wedding Atelier",
  description:
    "Premium animated website demo for luxury wedding planners, event designers, and destination wedding brands."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
