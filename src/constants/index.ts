import { FaUserPen, FaChartPie, FaUsers } from "react-icons/fa6";
import { CiForkAndKnife } from "react-icons/ci";
import { LuNotebookText } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { TbAirBalloon, TbLayoutDistributeHorizontalFilled } from "react-icons/tb";
import { ChartConfig } from "@/components/ui/chart";

export const chartConfig = {
    sales: {
        label: "Sales",
        color: "hsl(var(--chart-1))",
    },
    projectedSales: {
        label: "Projected Sales",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export const registrationSteps = [
  {
    id:"1",
    icon: FaUserPen,
    title:"Register your account"
  },
  {
    id:"2",
    icon: CiForkAndKnife,
    title:"Create your restaurant profile"
  },
  {
    id:"3",
    icon: LuNotebookText,
    title:"Start receiving orders"
  },
]

export const sidebarItems = [
  {
    id:"1",
    icon: TbLayoutDistributeHorizontalFilled,
    title: "Overview",
    href: "/dashboard",
  },
  {
    id:"2",
    icon: TbAirBalloon,
    title:"Clients",
    href: "/dashboard/clients",
  },
  {
    id:"3",
    icon: FaUsers,
    title:"Orders",
    href: "/dashboard/orders",
  },
  {
    id:"4",
    icon: FaChartPie,
    title:"Menu",
    href: "/dashboard/settings",
  },
  {
    id:"5",
    icon: IoMdSettings,
    title:"Settings",
    href: "/dashboard/settings",
  },
  {
    id:"6",
    icon: MdManageAccounts,
    title:"My Account",
    href: "/dashboard/account",
  },
]

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Say Restaurant",
    sales: 2345678,
    date: "24-05-2019",
    category: "Resto",
  },
  {
    id: "2",
    name: "Choose Kigali",
    sales: 98745,
    date: "24-05-2019",
    category: "Resto",
  },
  {
    id: "3",
    name: "Planet Burget",
    sales: 321456,
    date: "24-05-2019",
    category: "Resto",
  },
  {
    id: "4",
    name: "M Hotel",
    sales: 78503,
    date: "24-05-2019",
    category: "Hotel",
  },
  {
    id: "5",
    name: "Chez Lando",
    sales: 89034,
    date: "24-05-2019",
    category: "Pub",
  },
  {
    id: "6",
    name: "Sundowner",
    sales: 567894,
    date: "23-05-2019",
    category: "Pub",
  },
  {
    id: "7",
    name: "Flavor Fusion",
    sales: 456789,
    date: "24-05-2019",
    category: "Resto",
  },
  {
    id: "8",
    name: "Urban Spice",
    sales: 234567,
    date: "24-05-2019",
    category: "Resto",
  },
  {
    id: "9",
    name: "Golden Plate",
    sales: 345678,
    date: "23-05-2019",
    category: "Resto",
  },
  {
    id: "10",
    name: "Serena Hotel",
    sales: 1234567,
    date: "24-05-2019",
    category: "Hotel",
  },
  {
    id: "11",
    name: "Craft Brew House",
    sales: 187654,
    date: "24-05-2019",
    category: "Pub",
  },
  {
    id: "12",
    name: "Savory Bites",
    sales: 298765,
    date: "23-05-2019",
    category: "Resto",
  },
  {
    id: "13",
    name: "Kigali Heights Cafe",
    sales: 176543,
    date: "24-05-2019",
    category: "Cafe",
  },
  {
    id: "14",
    name: "Marriott Hotel",
    sales: 1876543,
    date: "24-05-2019",
    category: "Hotel",
  },
  {
    id: "15",
    name: "The Hops Tavern",
    sales: 198765,
    date: "23-05-2019",
    category: "Pub",
  },
  {
    id: "16",
    name: "Spice Garden",
    sales: 287654,
    date: "24-05-2019",
    category: "Cafe",
  },
  {
    id: "17",
    name: "Radisson Blue",
    sales: 1765432,
    date: "24-05-2019",
    category: "Hotel",
  },
  {
    id: "18",
    name: "Bourbon Street",
    sales: 265432,
    date: "23-05-2019",
    category: "Pub",
  },
  {
    id: "19",
    name: "Meze Fresh",
    sales: 187654,
    date: "24-05-2019",
    category: "Cafe",
  },
  {
    id: "20",
    name: "Kigali Grill",
    sales: 298765,
    date: "24-05-2019",
    category: "Resto",
  },
  {
    id: "21",
    name: "Park Inn",
    sales: 1456789,
    date: "24-05-2019",
    category: "Hotel",
  },
  {
    id: "22",
    name: "Republik Lounge",
    sales: 276543,
    date: "23-05-2019",
    category: "Cafe",
  },
  {
    id: "23",
    name: "Sakae Sushi",
    sales: 345678,
    date: "24-05-2019",
    category: "Resto",
  },
  {
    id: "24",
    name: "Ubumwe Grande",
    sales: 1234567,
    date: "24-05-2019",
    category: "Hotel",
  },
  {
    id: "25",
    name: "Pili Pili",
    sales: 234567,
    date: "23-05-2019",
    category: "Pub",
  },
  {
    id: "26",
    name: "Java House",
    sales: 187654,
    date: "24-05-2019",
    category: "Cafe",
  },
  {
    id: "27",
    name: "Kigali Hilltop",
    sales: 1345678,
    date: "24-05-2019",
    category: "Hotel",
  },
  {
    id: "28",
    name: "Riders Lounge",
    sales: 265432,
    date: "23-05-2019",
    category: "Pub",
  },
  {
    id: "29",
    name: "Bamboo Rooftop",
    sales: 345678,
    date: "24-05-2019",
    category: "Resto",
  },
  {
    id: "30",
    name: "Kigali Skyview",
    sales: 1234567,
    date: "24-05-2019",
    category: "Hotel",
  },
]

export const salesChartData = [
  { year: "00", sales: 5, projectedSales: 7 },
  { year: "01", sales: 8, projectedSales: 10 },
  { year: "02", sales: 12, projectedSales: 14 },
  { year: "03", sales: 15, projectedSales: 17 },
  { year: "04", sales: 18, projectedSales: 20 },
  { year: "05", sales: 20, projectedSales: 22 },
  { year: "06", sales: 21, projectedSales: 23 },
  { year: "07", sales: 21, projectedSales: 24 },
  { year: "08", sales: 22, projectedSales: 25 },
  { year: "09", sales: 25, projectedSales: 28 },
  { year: "10", sales: 30, projectedSales: 32 },
  { year: "11", sales: 38, projectedSales: 40 },
  { year: "12", sales: 45, projectedSales: 47 },
  { year: "13", sales: 52, projectedSales: 54 },
  { year: "14", sales: 58, projectedSales: 60 },
  { year: "15", sales: 50, projectedSales: 55 },
  { year: "16", sales: 42, projectedSales: 45 },
  { year: "17", sales: 35, projectedSales: 38 },
  { year: "18", sales: 40, projectedSales: 42 },
  { year: "19", sales: 45, projectedSales: 47 },
  { year: "20", sales: 48, projectedSales: 50 },
  { year: "21", sales: 45, projectedSales: 48 },
  { year: "22", sales: 40, projectedSales: 43 },
]

export const chartOverviewData = [
  {
    id:"1",
    label:"Clients",
    value: 60
  },
  {
    id:"2",
    label:"Revenues(FRW)",
    value: 38234000
  },
  {
    id:"3",
    label:"Orders",
    value: 67569
  },
  {
    id:"4",
    label:"Items",
    value: 54567
  },
  {
    id:"5",
    label:"Order/hour",
    value: 4560
  },
]
