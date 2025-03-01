"use client";
import React from "react";
import { ChildItem } from "../Sidebaritems";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const pathname = usePathname();
  return (
    <>
      <Sidebar.Item
        href={item.url}
        as={Link}
        target={item.isPro ? "_blank" : "_self"}
        className={`${item.url == pathname
          ? "!text-primary bg-lightprimary "
          : "text-link bg-transparent group/link "
          } `}
      >
        <div className="flex justify-between items-center">
        <span className="flex gap-3 align-center items-center truncate">
          {item.icon ? (
            <Icon icon={item.icon} className={`${item.color}`} height={18} />
          ) : (
            <span
              className={`${item.url == pathname
                ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary !bg-primary h-[6px] w-[6px]"
                : "h-[6px] w-[6px] bg-darklink dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
                } `}
            ></span>
          )}
          <span className="max-w-[110px] overflow-hidden truncate hide-menu flex-1">{item.name}</span>
        </span>
        {item.isPro? <span className="py-1 px-2.5 text-[10px] bg-lightsecondary text-secondary rounded-full">Pro</span> :null}
        </div>
      </Sidebar.Item>
    </>
  );
};

export default NavItems;
