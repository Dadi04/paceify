import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    necessary: boolean;
    text?: string;
    variant?: "text" | "file" | "number" | "date";
};

const Input = ({ className = "", necessary, text, variant = "text", ...props }: InputProps) => {
    const base = "outline-0 p-1 border-b border-neutral-200"

    const variants = {
        text: "w-150",
        file: "w-70 file:cursor-pointer file:border-0 file:me-4 file:px-4",
        number: "w-20 text-center",
        date: "w-40 text-center scheme-dark cursor-text",
    };

    return (
        <span className="flex gap-5 items-center">
            {text && 
                <span>{text}</span>
            }
            <span>
                <input 
                    className={`${base} ${className} ${variants[variant]}`}
                    {...props} 
                
                />
                {necessary &&
                    <span className="text-red-500">*</span>
                }
            </span>
        </span>
    );
};

export default Input;