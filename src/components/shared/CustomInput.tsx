import {useFormContext} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {cn} from "@/lib/utils.ts";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";

interface CustomInputProps {
    title: string;
    name: string;
    type?: string;
    className?: string;
}

const CustomInput = ({title, name,type,className}:CustomInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const form = useFormContext();

    return (
        <FormField
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem className="w-full">
                    <FormLabel htmlFor={name} className="uppercase text-gray-500 leading-8 font-bold text-xl">
                        {title}
                    </FormLabel>
                    <FormControl>
                        <div className={cn(type === "password" && "relative flex items-center justify-between")}>
                            <Input 
                                id={name} 
                                {...field} 
                                placeholder={title} 
                                className={`px-6 py-8 placeholder:text-xl text-lg ${className}`}
                                type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
                            />
                            {type === "password" &&  <span
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                className="absolute right-4 cursor-pointer"
                            >
                                {isPasswordVisible ? <Eye/> : <EyeOff/>}
                            </span>}
                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

export default CustomInput
