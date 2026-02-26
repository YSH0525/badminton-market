import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "SMASH - 배드민턴 전문 쇼핑몰",
  description: "전문 코치가 운영하는 배드민턴 전문 쇼핑몰. 라켓, 신발, 셔틀콕, 의류 등 최고의 배드민턴 용품을 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <CartProvider>
          <div className="demo-banner">
            DEMO VERSION - 이 사이트는 데모 버전입니다
          </div>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
