import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kursus Mengemudi LKP Arjuna Jaya Rajapolah",
  description: "Kursus mengemudi mobil bersama LKP Arjuna Jaya Rajapolah.",
  icons: {
    icon: "/logo-arjuna-jaya.png",
    shortcut: "/logo-arjuna-jaya.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
