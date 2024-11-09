import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "../ui/sidebar";
import DasboardHeader from "../ui/dasbord-header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen overflow-y-scroll">
        <DasboardHeader />
        {children}
      </div>
    </div>
  );
}
