import type { Metadata } from "next";
import "./globals.css";
import { Page, PageBody, PageHeader } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export const metadata: Metadata = {
    title: "My movies",
    description: "App cinéma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Page>
            <PageHeader>
                <a href="/" className="block p-5 font-bold text-white w-fit">
                    🎬 Movies library
                </a>
            </PageHeader>
            <PageBody>{children}</PageBody>
        </Page>
    );
}
