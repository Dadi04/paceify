import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline";
};

const Button = ({ variant = "primary", className = "", ...props }: ButtonProps) => {
    const base = "px-6 py-2 rounded-xl font-medium transition-colors duration-200";

    const variants = {
        primary: "bg-orange-500 text-black hover:bg-orange-600",
        outline: "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className} cursor-pointer`}
            {...props}
        />
    );
};

export default Button;