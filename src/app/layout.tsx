import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/utils/_typography.css";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "Rainbow Themes Home",
  description: "Rainbow Themes Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
