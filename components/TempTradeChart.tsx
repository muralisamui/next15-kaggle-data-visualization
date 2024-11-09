"use client";

import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import TradeData from '../data/tradeData.json';
import { countryMapping } from "@/data/CountryMapping";

type CountryCode = keyof typeof countryMapping;

const countries = [...new Set(TradeData.map((item) => item.ReporterISO3))]
    .map((code) => ({
        code,
        name: countryMapping[code as CountryCode] || code
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

// Formatting function for large numbers
function formatNumber(value: any) {
    if (Math.abs(value) >= 1.0e12) return `$${(value / 1.0e12).toFixed(1)}T`;
    if (Math.abs(value) >= 1.0e9) return `$${(value / 1.0e9).toFixed(1)}B`;
    if (Math.abs(value) >= 1.0e6) return `$${(value / 1.0e6).toFixed(1)}M`;
    if (Math.abs(value) >= 1.0e3) return `$${(value / 1.0e3).toFixed(1)}K`;
    return `$${value}`;
}

const TempTradeChart = () => {
    const [timeRange, setTimeRange] = React.useState("all");
    const [country, setCountry] = React.useState("IND"); // Default to India

    const countryData = TradeData.filter((item) => item.ReporterISO3 === country);

    const maxYear = Math.max(...countryData.map((item) => item.Year));

    const filteredData = countryData.filter((item) => {
        const year = item.Year;
        if (timeRange === "1y") {
            return year === maxYear; // Last year data
        } else if (timeRange === "10y") {
            return year >= maxYear - 9; // Last 10 years
        }
        return true; // All data
    });

    return (
        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>Trade Data - Interactive Area Chart</CardTitle>
                    <CardDescription>Displaying export data based on selected filters</CardDescription>
                </div>

                {/* Country Dropdown */}
                <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="w-[160px] rounded-lg" aria-label="Select a country">
                        <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        {countries.map((country) => (
                            <SelectItem key={country.code} value={country.code} className="rounded-lg">
                                {country.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* Time Range Dropdown */}
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[160px] rounded-lg sm:ml-2" aria-label="Select a time range">
                        <SelectValue placeholder="All Data" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="all" className="rounded-lg">All Data</SelectItem>
                        <SelectItem value="10y" className="rounded-lg">Last 10 Years</SelectItem>
                        <SelectItem value="1y" className="rounded-lg">Last Year</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>

            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={filteredData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        layout="vertical"
                    >
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="total_exports"
                            type="number"
                            domain={["dataMin", "dataMax"]}
                            tickFormatter={formatNumber} // Format exports in K, M, B, T
                        />
                        <YAxis
                            dataKey="Year"
                            type="number"
                            domain={["dataMin", "dataMax"]}
                        //   reversed={true} // Ensure minimum year is at the bottom
                        />
                        <Tooltip
                            formatter={(value) => formatNumber(value)}
                            labelFormatter={(label) => `Year: ${label}`}
                        />
                        <Legend />

                        {/* Area with Gradient Fill */}
                        <Area
                            type="monotone"
                            dataKey="total_exports"
                            stroke="#8884d8"
                            fill="url(#gradient)"
                            dot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default TempTradeChart;
