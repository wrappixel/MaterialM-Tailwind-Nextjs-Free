"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const SalesProfit = () => {
  // chart
  const optionscolumnchart: any = {
    chart: {
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      fontSize: "12px",
      offsetX: 0,
      offsetY: 10,
      animations: {
        speed: 500,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["var(--color-primary)", "#adb0bb35"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacity: 0.3,
        stops: [100],
      },
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "#90A4AE50",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 90,
      tickAmount: 3,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  const areaChart = {
    series: [
      {
        type: "area",
        name: "This Year",
        chart: {
          foreColor: "#111c2d99",
          fontSize: 12,
          fontWeight: 500,
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        data: [
          { x: "Aug", y: 25 },
          { x: "Sep", y: 25 },
          { x: "Oct", y: 10 },
          { x: "Nov", y: 10 },
          { x: "Dec", y: 45 },
          { x: "Jan", y: 45 },
          { x: "Feb", y: 75 },
          { x: "Mar", y: 70 },
          { x: "Apr", y: 35 },
        ],
      },
      {
        type: "area",
        name: "Last Year",
        chart: {
          foreColor: "#111c2d99",
        },

        data: [
          { x: "Aug", y: 50 },
          { x: "Sep", y: 50 },
          { x: "Oct", y: 25 },
          { x: "Nov", y: 20 },
          { x: "Dec", y: 20 },
          { x: "Jan", y: 20 },
          { x: "Feb", y: 35 },
          { x: "Mar", y: 35 },
          { x: "Apr", y: 60 },
        ],
      },
    ],
  };

  return (
    <div className="rounded-3xl dark:shadow-dark-md shadow-md bg-background p-6 relative w-full break-words">
      <div className="flex justify-between items-center">
        <h5 className="card-title">Sales Profit</h5>
        <Select defaultValue="this-week">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="april-2024">April 2024</SelectItem>
            <SelectItem value="may-2024">May 2024</SelectItem>
            <SelectItem value="june-2024">June 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="-ms-4 -me-3 mt-2">
        <Chart
          options={optionscolumnchart}
          series={areaChart.series}
          type="area"
          height="315px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default SalesProfit;
