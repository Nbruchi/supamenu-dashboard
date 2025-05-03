import {Button} from "@/components/ui/button.tsx";
import {FaPlus} from "react-icons/fa6";
import {DataTable} from "@/components/table/data-table.tsx";
import {columns} from "@/components/table/columns.tsx";
import {restaurants} from "@/constants";
import {Input} from "@/components/ui/input.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {useState} from "react";
import {ClientForm} from "@/components/ClientForm.tsx";

const Clients = () => {
    const [sortBy, setSortBy] = useState<string>("name");
    const [filterValue, setFilterValue] = useState<string>("");

    // Sort the restaurants based on the selected sort option
    const sortedRestaurants = [...restaurants].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "sales") {
            return b.sales - a.sales;
        }
        return 0;
    });

    // Filter the restaurants based on the filter value
    const filteredRestaurants = sortedRestaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <article className="bg-gray-100 w-full p-8 flex flex-col items-center">
           <div className="flex flex-col items-start gap-4 border-b-2 border-gray-400 py-4 px-6 min-w-1/2">
               <h3 className="text-4xl font-bold text-gray-500 leading-loose">New Client</h3>
               <ClientForm
                   trigger={
                       <Button className="bg-transparent border-none outline-none w-full flex items-center justify-between text-2xl text-gray-300 hover:text-gray-500 hover:scale-105 transition-all duration-300 hover:bg-transparent p-6 cursor-pointer">
                           Add a new client
                           <FaPlus className="text-gray-500 bg-gray-100 border-none size-8 p-2 outline-none rounded-xl"/>
                       </Button>
                   }
               />
           </div>
            <div className="bg-white rounded-xl p-4 min-w-[95%] mt-20">
                <div className="flex items-center justify-between px-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-500">All Clients</h3>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Select
                                value={sortBy}
                                onValueChange={setSortBy}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="name">Sort by Name</SelectItem>
                                    <SelectItem value="sales">Sort by Sales</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Input
                            placeholder="Filter by name..."
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}
                            className="max-w-sm"
                        />
                    </div>
                </div>
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={filteredRestaurants} />
                </div>
            </div>
        </article>
    )
}

export default Clients
