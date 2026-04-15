import type { SelectHTMLAttributes } from "react";

type Option = {
    label: string;
    value: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    necessary: boolean;
    text: string;
    options: Option[];
};

const Select = ({ className = "", necessary, text, options, ...props }: SelectProps) => {
    const base = "w-50 text-center bg-black text-orange-500 border border-orange-500 rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer";

    return (
        <span className="flex gap-5 items-center">
            {text && 
                <span>{text}</span>
            }
            <span>
                <select
                    className={`${className} ${base}`}
                    {...props}
                    defaultValue=""
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {necessary && (
                    <span className="text-red-500 ml-1">*</span>
                )}
            </span>
        </span>
    );
};

export default Select;