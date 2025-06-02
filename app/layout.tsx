import "../globals.css";
import { ReactNode } from "react";
import { poppins } from "@/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Use a standard 32x32 favicon for best results */}
        <link
          rel="icon"
          href="/logos/griffity.png"
          type="image/png"
          sizes="9x32"
        />
        {/* Optionally add other sizes for better browser support */}
        <link
          rel="icon"
          href="/logos/griffity.png"
          type="image/png"
          sizes="9x16"
        />
      </head>
      <body
        className={`bg-body ${poppins.className} text-white transition-all ease-in-out duration-700`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
