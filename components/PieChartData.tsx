"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface ExportData {
  Year: number
  ReporterISO3: string
  ReporterName: string
  total_exports: number
  rank: number
  fill: string
}


interface PieChartProps {
  country: string,
  data: ExportData[]
}

const PieChartData: React.FC<PieChartProps> = ({ country, data }) => {

  const chartData: ExportData[] = data

  const chartConfig: ChartConfig = chartData.reduce((acc, data) => {
    acc[data.Year] = {
      label: `${data.Year}`,
      color: data.fill,
    }
    return acc
  }, {} as ChartConfig)

  const formatNumber = (value: number): string => {
    if (value >= 1e12) {
      return `${(value / 1e12).toFixed(1)}T`; // Format in trillions
    } else if (value >= 1e9) {
      return `${(value / 1e9).toFixed(1)}B`; // Format in billions
    } else if (value >= 1e6) {
      return `${(value / 1e6).toFixed(1)}M`; // Format in millions
    }
    return value.toFixed(1); // Show up to one decimal place for smaller values
  };

  const totalExports = React.useMemo(() => {
    const total = chartData.reduce((acc, curr) => acc + curr.total_exports, 0);
    return formatNumber(total);
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Trade Exports - Pie Chart - {country}</CardTitle>
        <CardDescription>Yearly Exports in Billions</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="total_exports"
              nameKey="Year"
              innerRadius={55}
              outerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalExports}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Exports
                        </tspan>
                      </text>
                    )
                  }
                  return null
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Total exports for last 10 years
        </div>
      </CardFooter>
    </Card>
  )
}
export default PieChartData