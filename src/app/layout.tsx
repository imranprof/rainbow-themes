import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/utils/_typography.css";
import Header from "@/components/header/Header";
import ScrollSmootherComponent from "@/components/tools/ScrollSmootherComp";


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
      ><div>
          <ScrollSmootherComponent />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <Header />
              {children}
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
