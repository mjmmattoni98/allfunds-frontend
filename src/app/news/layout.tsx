import NavbarComponent from "@/components/component/Navbar";
import { SidebarMenu } from "@/components/component/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Las últimas noticias para ti",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <NavbarComponent />
      <div className="flex">
        <div className="hidden sm:block">
          <SidebarMenu />
        </div>
        <main className="w-full p-4">{children}</main>
      </div>
    </div>
  );
}

export default RootLayout;
