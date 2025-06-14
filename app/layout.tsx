import "../globals.css";
import { ReactNode } from "react";
import { poppins } from "@/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Griffity Studios</title>

        {/* Favicons */}
        <link
          rel="icon"
          href="/logos/favicon.svg"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/logos/favicon.svg"
          type="image/png"
          sizes="16x16"
        />

        {/* Open Graph Meta Tags for Link Previews */}
        <meta property="og:title" content="Griffity Studios" />
        <meta
          property="og:description"
          content="At Griffity, we carry the warmth in everything we create. With the strength of the mountains and the soul of the valleys, we believe design is not just about visuals—it’s about people, feelings, and stories that live in every heart."
        />
        <meta
          property="og:image"
          content="https://griffitystudios.com/images/logos/favicon.svg"
        />
        <meta property="og:url" content="https://griffitystudios.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Griffity Studios" />

        <meta
          name="twitter:image"
          content="https://griffitystudios.com/logos/og-cover.jpg"
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
