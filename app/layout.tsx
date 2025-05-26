import "../globals.css";
import { ReactNode } from "react";
import { poppins } from "@/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`bg-body ${poppins.className} text-white transition-all ease-in-out duration-700`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
