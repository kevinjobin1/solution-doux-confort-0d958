"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: PropsWithChildren) {
   // <SessionProvider>
    //   <ThemeProvider
    //     attribute="class"
    //     enableSystem={false}
    //     defaultTheme="light"
    //   >
       //   </ThemeProvider>
    // </SessionProvider>
  return (
    <>
        <Toaster />
        {children}
    </>
  );
}
