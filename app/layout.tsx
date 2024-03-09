import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner"
import { ModalProvider } from "@/providers/modal-provider";
import { Suspense } from "react";
import Loading from "@/components/auth/loading";

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
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
