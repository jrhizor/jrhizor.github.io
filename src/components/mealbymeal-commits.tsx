"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"

const commitsCsv = `
2023-06-01,4
2023-06-05,1
2023-06-07,3
2023-06-16,1
2023-06-17,3
2023-06-20,7
2023-06-21,16
2023-06-22,7
2023-06-27,10
2023-07-06,3
2023-07-13,14
2023-07-14,8
2023-07-26,10
2023-07-28,10
2023-08-03,12
2023-08-04,1
2023-08-08,3
2023-08-14,2
2023-08-16,5
2023-08-18,13
2023-08-19,5
2023-08-21,4
2023-08-22,3
2023-08-23,4
2023-08-24,5
2023-08-25,4
2023-08-28,11
2023-08-29,1
2023-08-30,4
2023-08-31,2
2023-09-04,6
2023-09-05,2
2023-09-08,4
2023-09-11,3
2023-09-13,3
2023-09-19,10
2023-09-22,7
2023-09-24,5
2023-09-25,17
2023-09-27,6
2023-09-28,1
2023-09-29,5
2023-09-30,4
2023-10-02,12
2023-10-03,6
2023-10-06,24
2023-10-07,3
2023-10-09,7
2023-10-11,2
2023-10-16,1
2023-10-17,3
2023-10-18,1
2023-10-19,3
2023-10-23,16
2023-10-24,10
2023-10-26,11
2023-10-27,2
2023-10-29,3
2023-10-30,15
2023-10-31,5
2023-11-01,3
2023-11-02,9
2023-11-03,1
2023-11-04,1
2023-11-06,16
2023-11-07,5
2023-11-09,1
2023-11-13,3
2023-11-14,1
2023-11-16,1
2023-11-29,3
2023-12-04,5
2023-12-08,3
2023-12-15,3
2023-12-20,1
2024-02-24,1
2024-02-28,1
2024-02-29,4
2024-03-12,5
2024-03-15,1
2024-03-18,3
2024-03-20,3
2024-03-25,12
2024-03-27,5
2024-04-17,1
2024-04-18,10
2024-05-06,1
2024-05-09,3
2024-05-11,1
2024-05-12,1
2024-05-22,1
2024-06-10,1
2024-06-13,1
2024-06-14,1
2024-06-24,1
2024-06-27,5
2024-07-03,11
2024-07-04,4
2024-07-15,2
2024-07-18,1
2024-07-19,10
2024-07-25,6
2024-07-30,1
2024-07-31,1
2024-08-01,1
2024-08-07,1
2024-08-19,3
2024-08-24,1
2024-09-02,2
2024-09-04,2
2024-09-07,2
2024-09-23,1
2024-09-24,1
2024-10-17,3
2024-10-23,1
2024-10-29,3
2024-10-30,5
2024-11-11,1
2024-11-21,3
2024-12-05,1
2024-12-28,1
2025-02-25,2
2025-04-17,2
2025-04-18,6
2025-04-23,1
`.trim();

// Parse CSV data and transform it into chart format
function parseCommitsData() {
  const lines = commitsCsv.split('\n').filter(line => line.trim());
  const data = lines.map(line => {
    const [dateStr, commitsStr] = line.split(',');
    if (!dateStr || !commitsStr) {
      throw new Error(`Invalid CSV line: ${line}`);
    }
    const date = new Date(dateStr);
    return {
      date: dateStr,
      commits: parseInt(commitsStr, 10),
      monthYear: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };
  });
  
  // Group by month and sum commits
  const monthlyData = data.reduce((acc, item) => {
    const key = item.monthYear;
    if (!acc[key]) {
      acc[key] = { monthYear: key, commits: 0, date: item.date };
    }
    acc[key]!.commits += item.commits;
    return acc;
  }, {} as Record<string, { monthYear: string; commits: number; date: string }>);
  
  // Convert to array and sort by date
  return Object.values(monthlyData).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

const chartData = parseCommitsData();

const chartConfig = {
  commits: {
    label: "Commits",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function MealByMealCommits() {
  const totalCommits = chartData.reduce((sum, item) => sum + item.commits, 0);
  const avgCommitsPerMonth = Math.round(totalCommits / chartData.length);
  const timeRange = `${chartData[0]?.monthYear} - ${chartData[chartData.length - 1]?.monthYear}`;

  return (
    <Card className="w-full">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="monthYear"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.split(' ')[0]} // Show only month abbreviation
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="commits"
              type="natural"
              fill="var(--color-commits)"
              fillOpacity={0.4}
              stroke="var(--color-commits)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
            {totalCommits} total commits (Average {avgCommitsPerMonth} commits per month)
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}