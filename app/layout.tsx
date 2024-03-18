import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import ModalProvider from "@/providers/modal-provider";
import Toast from "@/components/Toast/Toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/providers/tanstack-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Станции Алиса",
  description: "Станции Алиса, описание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <TanStackProvider>
            <ModalProvider />
            <Toast />
            <div className="min-h-[100vh] flex flex-col">
              <Header />
              <main className="flex-auto ">{children}</main>
              <Footer />
            </div>
          </TanStackProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
