import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Golden Machinery | Rice, Pulse, Wheat Refinery Machines",
  description: "Innovative, Qualitative, Superior. Golden Machinery is a leading manufacturer of high-quality rice, pulse, and wheat refinery machines based in Raipur.",
  keywords: "Golden Machinery, Rice Refinery, Pulse Refinery, Wheat Refinery, Pre-Cleaner, Cyclone, Silky, Length Grader"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
