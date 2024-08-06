"use client";
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Icon } from "@iconify/react";
import { Dropdown } from "flowbite-react";
import { HiOutlineDotsVertical  } from "react-icons/hi";

const TotalIncome = () => {
  const Action = [
    {
      icon: "solar:add-circle-outline",
      listtitle: "Add",
    },
    {
      icon: "solar:pen-new-square-broken",
      listtitle: "Edit",
    },
    {
      icon: "solar:trash-bin-minimalistic-outline",
      listtitle: "Delete",
    },
  ];

  const ChartData: any = {
    series: [
      {
        name: "monthly earnings",
        color: "var(--color-secondary)",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    chart: {
      id: "total-income",
      type: "area",
      height: 70,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [20, 180],
      },
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  return (
    <>
      <div className="bg-lightsecondary rounded-lg p-6 relative w-full break-words">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-14 h-10 rounded-full flex items-center justify-center  bg-secondary text-white">
              <Icon icon="solar:wallet-2-line-duotone" height={24} />
            </span>
            <h5 className="text-base opacity-70">Total Income</h5>
          </div>
          <div>
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="h-9 w-9 flex justify-center items-center rounded-full  cursor-pointer">
                  <HiOutlineDotsVertical size={22} />
                </span>
              )}
            >
              {Action.map((items, index) => (
                <Dropdown.Item key={index} className="flex gap-3">
                  <Icon icon={`${items.icon}`} height={18} />
                  <span>{items.listtitle}</span>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[24px] items-end mt-10">
          <div className="xl:col-span-6 col-span-7">
            <h2 className="text-3xl mb-3">$6,280</h2>
            <span className="font-semibold border rounded-full border-black/5 dark:border-white/10 py-0.5 px-[10px] leading-[normal] text-xs text-dark dark:text-darklink">
              <span className="opacity-70">+18% last month</span>
            </span>
          </div>
          <div className="xl:col-span-6  col-span-5 ">
            <div className="rounded-bars md:ps-7">
              <Chart
                options={ChartData}
                series={ChartData.series}
                type="area"
                height='70px'
                width='100%'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalIncome;
