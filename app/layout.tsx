import type { Metadata } from "next";
import { JetBrains_Mono, Russo_One } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const manrope = JetBrains_Mono({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
});

const unbounded = Russo_One({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  weight: "400",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "rockscience-underground.pozizia.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;

  return {
    title: "RockScience — блочная инженерия под поверхностью",
    description: "Добыча, укрепление и облагораживание шахт и пещер. Полный цикл работ с подземными пространствами.",
    openGraph: {
      title: "RockScience — инженерия под поверхностью",
      description: "Добыча, укрепление и развитие подземных пространств.",
      images: [{ url: image, width: 1672, height: 941, alt: "RockScience — инженерия под поверхностью" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "RockScience — инженерия под поверхностью",
      description: "Добыча, укрепление и развитие подземных пространств.",
      images: [image],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${unbounded.variable}`}>{children}</body>
    </html>
  );
}
