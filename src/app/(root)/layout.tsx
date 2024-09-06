import type { Metadata } from "next";
import { Header } from "../../../shared/components/shared/header";

export const metadata: Metadata = {
  title: "Aleks5455 Pizza!",
  description: "So tasty",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
      <main className="min-h-screen">
        <Header />
        {children}
        {modal}
      </main>
  );
}
