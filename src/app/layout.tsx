import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import AuthProvider from "@/provider/AuthProvider";
import { Toaster } from "sonner";



export const highMount = localFont({
  src: '/fonts/HighMount.ttf',
})

export const qurova = localFont({
  src: '/fonts/Qurova-Regular.otf',
})

const ppMori = localFont({
  src: [
    {
      path: "/fonts/PPMori-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "/fonts/PPMori-SemiBold.otf",
      weight: "600",
      style: "normal"
    },
  ]
})

export const metadata: Metadata = {
  title: "Abudr Rahman",
  description: "This is Abdur Rahman's personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ppMori.className} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
        <div className="h-screen"></div>
        <Toaster richColors position="top-center"/>
      </body>
    </html>
  );
}
