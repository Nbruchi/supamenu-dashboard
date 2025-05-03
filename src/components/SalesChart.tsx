import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartTooltip,
    ChartTooltipContent,
    ChartContainer,
    ChartLegend,
} from "@/components/ui/chart";
import { chartConfig, salesChartData } from "@/constants";

export function SalesChart() {
    return (
        <Card className="rounded-none rounded-tl-xl rounded-bl-xl">
            <CardHeader>
                <CardTitle className="text-xl">Today's trends</CardTitle>
                <CardDescription>
                    as of {new Date().toLocaleString()}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={salesChartData}
                        height={225}
                        margin={{
                            top: 10,
                            right: 15,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `'${value}`}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            domain={[0, 60]}
                            tickFormatter={(value) => `${value}`}
                            orientation="right"
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#f97316" /* text-orange-400 */
                            strokeWidth={4}
                            dot={false}
                            activeDot={{ r: 6 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="projectedSales"
                            stroke="#9ca3af" /* text-gray-400 */
                            strokeWidth={3}
                            dot={false}
                        />
                        <ChartLegend />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
