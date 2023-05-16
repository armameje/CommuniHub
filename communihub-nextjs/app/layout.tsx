import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./(components)/navbar";
import Provider from "./(components)/Provider";
import Footer from "./(components)/footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Communihub",
  icons: {
    icon: "/Logo-Black.png",
  },
};

interface iProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: iProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider> */}
        <NavBar />
        {children}
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}
