import { PropsWithChildren } from "react";

export type PageHeaderProps = {};

export const PageHeader = ({ children }: PropsWithChildren<PageHeaderProps>) => {
    return <header className="bg-slate-800">{children}</header>;
};
