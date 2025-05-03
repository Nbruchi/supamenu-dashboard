import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { chartOverviewData } from "@/constants";
import { SalesChart } from "@/components/SalesChart";

const Dashboard = () => {
    return (
        <article className="bg-gray-100 w-full p-8 flex flex-col items-start">
            <div className="w-full flex justify-start items-center gap-x-20 mb-8">
                {chartOverviewData.slice(0, 3).map((item) => (
                    <Card
                        key={item.id}
                        className="w-1/5 group hover:scale-105 transition-all duration-300 cursor-pointer hover:border hover:border-orange-400"
                    >
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-2xl group-hover:text-black">
                                {item.label}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-semibold">
                                {item.value}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="w-full mt-4 flex rounded-xl bg-white border-2 border-gray-200">
                <div className="flex-1">
                    <SalesChart />
                </div>
                <div className="w-1/6 flex flex-col justify-start items-start">
                    {chartOverviewData.slice(2, 5).map((item) => (
                        <Card
                            key={item.id}
                            className={`rounded-none w-full group hover:scale-105 transition-all duration-300 cursor-pointer hover:border hover:border-orange-400 ${
                                item.id === "3" ? "rounded-tr-xl" : ""
                            }`}
                        >
                            <CardHeader>
                                <CardTitle className="text-gray-500 text-2xl group-hover:text-black">
                                    {item.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-semibold">
                                    {item.value}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                    {chartOverviewData.slice(0, 1).map((item) => (
                        <Card
                            key={item.id}
                            className="rounded-none w-full h-full group hover:scale-105 transition-all duration-300 cursor-pointer hover:border hover:border-orange-400 rounded-br-xl"
                        >
                            <CardHeader>
                                <CardTitle className="text-gray-500 text-2xl group-hover:text-black">
                                    {item.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-semibold">
                                    {item.value}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Dashboard;
