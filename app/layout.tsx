import "../globals.css";
import { ReactNode } from "react";
import { poppins } from "@/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-background ${poppins.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
