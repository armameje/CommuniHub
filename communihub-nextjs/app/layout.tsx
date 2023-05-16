import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./(components)/navbar";
import Provider from "./(components)/Provider";
import Footer from "./(components)/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Communihub",
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
