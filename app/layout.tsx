import Header from "@/components/Header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import PromptInput from "@/components/PromptInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <PromptInput />

        {children}
      </body>
    </html>
  );
}
