import { PropsWithChildren } from "react";

export type PageBodyProps = {};

export const PageBody = ({ children }: PropsWithChildren<PageBodyProps>) => {
    return <main className="max-w-7xl mx-auto">{children}</main>;
};
