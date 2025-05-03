import {ColumnDef} from "@tanstack/react-table";
import { IoEyeSharp } from "react-icons/io5";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {MoreVertical} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";

export const columns: ColumnDef<Restaurant>[] = [
    {
        accessorKey:"name",
        header:() => <p className="text-gray-400 text-lg">Client Details</p>,
        cell: ({row}) => (
            <p className="ml-4 font-semibold text-xl">{row.getValue("name")}</p>
        )
    },
    {
        accessorKey:"sales",
        header:() => <p className="text-gray-400 text-lg">Sales</p>,
        cell: ({row}) =>{
            const amount = row.getValue("sales") as number;
            return (
                <p className="font-semibold text-xl">{amount.toLocaleString()} Frw</p>
            )
        }
    },
    {
        accessorKey:"report",
        header:() => <p className="text-gray-400 text-lg">Detailed Report</p>,
        cell: () => (
            <div className="p-2">
                <IoEyeSharp className="size-10 cursor-pointer text-orange-400"/>
            </div>
        )
    },
    {
        accessorKey:"category",
        header:() => <p className="text-gray-400 text-lg">Category</p>,
        cell: ({row}) => {
            const category = row.getValue("category") as string;
            return (
                <Badge className="bg-gray-400 p-1 text-lg min-w-[6rem] rounded-2xl">{category}</Badge>
            )
        }
    },
    {
        id:"more",
        cell: (() =>(
            <div className="flex items-center justify-end gap-2 cursor-pointer">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="flex items-center justify-start">
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ))
    }
]