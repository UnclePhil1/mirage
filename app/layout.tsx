import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner"
import { ModalProvider } from "@/providers/modal-provider";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirage",
  description: "Whiteboard platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
