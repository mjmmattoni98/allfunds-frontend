"use client";

import NavbarComponent from "@/components/component/Navbar";
import { SidebarMenu } from "@/components/component/Sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <main>
          <div>
            <NavbarComponent />
            <div className="flex">
              <div className="hidden sm:block">
                <SidebarMenu />
              </div>
              <main className="w-full p-4">{children}</main>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
