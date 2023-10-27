import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Card = ({ className, ...rest }: CardProps) => {
    return <div className={clsx("shadow-md rounded-md", className)} {...rest} />;
};
