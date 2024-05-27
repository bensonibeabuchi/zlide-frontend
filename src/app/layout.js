import { Inter } from "next/font/google";
import "./globals.css";
import Provider from '@/redux/provider.jsx';
import { Setup } from "@/components/utils";
import { Footer, Navbar } from "@/components/common";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zlide",
  description: "Generate presentations with the help of AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup/>
            {children}
        </Provider>
        </body>
    </html>
  );
}
