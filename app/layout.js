import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { JobContextProvider, JobProvider } from "../utils/JobContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <JobProvider>
          <body className={inter.className}>{children}</body>
        </JobProvider>
      </ClerkProvider>
    </html>
  );
}
