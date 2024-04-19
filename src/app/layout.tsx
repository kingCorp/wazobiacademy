import "./globals.css";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { Suspense } from 'react'
import Image from "next/image";
import Bg from "../../public/bg.svg";


const inter = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "WazobiAcademy",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <ThemeProvider>
            <AuthProvider>
              <div>
                {children}
              </div>
            </AuthProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
