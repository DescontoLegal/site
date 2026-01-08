import WhatsappButton from "./components/WhatsappButton";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cartão Desconto Legal",
  description: "Developed by @rixxerbr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsappButton
          phone="5535984265018"
          message="Olá! Vim pelo site e gostaria de mais informações."
        />
      </body>
    </html>
  );
}
