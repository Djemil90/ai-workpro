import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "AI WorkPro Switzerland",
  description: "Offerten und Rechnungen mit AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
