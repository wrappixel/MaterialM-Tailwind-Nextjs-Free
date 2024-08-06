"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Badge, Dropdown } from "flowbite-react";
import { HiOutlineDotsVertical  } from "react-icons/hi";
import Link from "next/link";
const EarningReports = () => {
  const dropdownItems = ["Action", "Another action", "Something else"];

  const EarningReportsData = [
    {
      icon: "solar:card-line-duotone",
      title: "Bank Transfer",
      subtitle: "and +1 more",
      color: "bg-lightprimary",
      text:'text-primary',
      statuscolor: "success",
      statustext: "16.3%",
    },
    {
      icon: "solar:wallet-2-line-duotone",
      title: "Net Profit",
      subtitle: "and +4 more",
      color: "bg-lighterror",
      text:'text-error',
      statuscolor: "success",
      statustext: "12.55%",
    },
    {
      icon: "solar:course-up-line-duotone",
      title: "Total Income",
      subtitle: "and +4 more",
      color: "bg-lightsecondary",
      text:'text-secondary',
      statuscolor: "success",
      statustext: "12.55%",
    },
    {
      icon: "solar:waterdrops-line-duotone",
      title: "Total Expenses",
      subtitle: "and +2 more",
      color: "bg-lightwarning",
      text:'text-warning',
      statuscolor: "success",
      statustext: "8.28%",
    },
    {
      icon: "solar:wallet-2-line-duotone",
      title: "Net Profit",
      subtitle: "and +4 more",
      color: "bg-lighterror",
      text:'text-error',
      statuscolor: "error",
      statustext: "10.55%",
    },
  ];
  return (
    <>
      <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
        <div className="flex items-center justify-between">
          <h5 className="card-title">Earning Reports</h5>
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                <HiOutlineDotsVertical size={22} />
              </span>
            )}
          >
            {dropdownItems.map((items, index) => {
              return <Dropdown.Item key={index}>{items}</Dropdown.Item>;
            })}
          </Dropdown>
        </div>

        <div className="flex flex-col mt-2">
          {EarningReportsData.map((item, index) => (
            <div className="flex items-center justify-between py-5 border-b border-ld" key={index}>
              <div className="flex gap-3 items-center">
                <span
                  className={`w-14 h-10 rounded-full flex items-center justify-center  ${item.color} ${item.text}`}
                >
                  <Icon icon={item.icon} height={24} />
                </span>
                <div>
                  <h4 className="text-sm mb-1">{item.title}</h4>
                  <p className="text-darklink text-xs flex items-center gap-1">{item.subtitle} <Icon icon="material-symbols:info-outline-rounded" height={13}></Icon></p>
                </div>
              </div>
              <Badge
                color={`light${item.statuscolor}`}
                icon={() => (
                  <Icon
                    icon="solar:alt-arrow-up-bold"
                    className="me-1"
                    height={12}
                  />
                )}
                className="bg-lightsuccess text-success"
              >
                {item.statustext}
              </Badge>
            </div>
          ))}

          <Link href={'/'} className="text-base text-dark text-center pt-6 font-semibold text-dark hover:text-primary dark:hover:text-primary">
          View more markets</Link>
        </div>
      </div>
    </>
  );
};

export default EarningReports;
