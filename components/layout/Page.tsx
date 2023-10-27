"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const Page = ({ children, ...rest }: PropsWithChildren) => {
    const queryClient = new QueryClient();

    return (
        <html lang="fr">
            <body className={inter.className} {...rest}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </body>
        </html>
    );
};
