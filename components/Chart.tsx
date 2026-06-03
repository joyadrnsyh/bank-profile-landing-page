"use client";

import {
    ResponsiveContainer,
    XAxis,
    Tooltip,
    Area,
    AreaChart,
} from "recharts";

const data = [
    { month: "Jan", value: 800000 },
    { month: "Feb", value: 1050000 },
    { month: "Mar", value: 1200000 },
    { month: "Apr", value: 1350000 },
    { month: "May", value: 1450000 },
    { month: "Jun", value: 1876580 },
];

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    }).format(value);
};

export default function RevenueChart() {
    return (
        <div className="flex h-full w-full min-h-[300px] md:min-h-[350px] flex-col rounded-[32px] bg-white p-5 sm:p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            {/* Header Chart */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-slate-500">Total Revenue</p>
                    <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        $1,876,580
                    </h2>
                    <p className="mt-1 text-sm font-medium text-emerald-500 bg-emerald-50 w-fit px-2 py-0.5 rounded-full">
                        +12.5% dari bulan lalu
                    </p>
                </div>

                <div className="relative">
                    <select className="appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-10 text-sm font-medium text-slate-700 outline-none transition-all hover:bg-slate-100 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20">
                        <option>6 Months</option>
                        <option>12 Months</option>
                        <option>This Year</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="flex-1 w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="fillColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0891b2" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#0891b2" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#64748b", fontSize: 13 }}
                            dy={10}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                borderRadius: "16px",
                                border: "none",
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                                padding: "12px 16px",
                            }}
                            itemStyle={{
                                color: "#0f172a",
                                fontWeight: 600,
                                fontSize: "15px",
                            }}
                            labelStyle={{
                                color: "#64748b",
                                fontSize: "13px",
                                marginBottom: "4px",
                            }}
                            formatter={(value) => [formatCurrency(Number(value)), "Revenue"]}
                            cursor={{ stroke: "#0891b2", strokeWidth: 1, strokeDasharray: "4 4" }}
                        />

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#0891b2"
                            strokeWidth={4}
                            fill="url(#fillColor)"
                            activeDot={{ r: 6, fill: "#0891b2", stroke: "#fff", strokeWidth: 3 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}