import clsx from "clsx";
import { PropsWithChildren } from "react";

export type HeadingProps = {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

export const Heading = ({ size = "md", ...rest }: PropsWithChildren<HeadingProps>) => {
    const sizes = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
    };
    return <h1 className={clsx([size ? sizes[size] : undefined, "py-4"])} {...rest} />;
};
