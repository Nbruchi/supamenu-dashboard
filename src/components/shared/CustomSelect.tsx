import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useFormContext} from "react-hook-form"

interface CustomSelectProps {
    title: string;
    name: string;
    options: string[];
}

const CustomSelect = ({title, name, options}: CustomSelectProps) => {
    const form = useFormContext()

    return (
        <FormField
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem className="w-full">
                    <FormLabel className="text-gray-500 leading-8 font-bold text-xl">{title}</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-full py-8">
                                <SelectValue placeholder={`Select ${title.toLowerCase()}`}/>
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

export default CustomSelect