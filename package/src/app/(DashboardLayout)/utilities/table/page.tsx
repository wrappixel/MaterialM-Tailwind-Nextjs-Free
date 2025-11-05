"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import product1 from "../../../../../public/images/products/s1.jpg";
import product2 from "../../../../../public/images/products/s2.jpg";
import product3 from "../../../../../public/images/products/s3.jpg";
import product4 from "../../../../../public/images/products/s4.jpg";
import product5 from "../../../../../public/images/products/s5.jpg";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";

const PopularProducts = () => {
  const ProductTableData = [
    {
      img: product1,
      name: "iPhone 13 pro max-Pacific Blue-128GB storage",
      payment: "$180",
      paymentstatus: "Partially paid",
      process: 45,
      processcolor: "bg-warning",
      statuscolor: "secondary",
      statustext: "Confirmed",
      progessvariant: "warning",
      bedgevariant: "lightSuccess"
    },
    {
      img: product2,
      name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
      payment: "$120",
      paymentstatus: "Full paid",
      process: 100,
      processcolor: "bg-success",
      statuscolor: "success",
      statustext: "Confirmed",
      progessvariant: "progress",
      bedgevariant: "lightSuccess"
    },
    {
      img: product3,
      name: "PlayStation 5 DualSense Wireless Controller",
      payment: "$120",
      paymentstatus: "Cancelled",
      process: 100,
      processcolor: "bg-error",
      statuscolor: "error",
      statustext: "Cancelled",
      progessvariant: "error",
      bedgevariant: "lightError"
    },
    {
      img: product5,
      name: "Amazon Basics Mesh, Mid-Back, Swivel Office",
      payment: "$120",
      paymentstatus: "Partially paid",
      process: 45,
      processcolor: "bg-warning",
      statuscolor: "secondary",
      statustext: "Confirmed",
      progessvariant: "warning",
      bedgevariant: "lightSuccess"
    },
    {
      img: product4,
      name: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart",
      payment: "$120",
      paymentstatus: "Full paid",
      process: 100,
      processcolor: "bg-success",
      statuscolor: "success",
      statustext: "Confirmed",
      progessvariant: "progress",
      bedgevariant: "lightSuccess"
    },
  ];

  const tableActionData = [
    { icon: "solar:add-circle-outline", listtitle: "Add" },
    { icon: "solar:pen-new-square-broken", listtitle: "Edit" },
    { icon: "solar:trash-bin-minimalistic-outline", listtitle: "Delete" },
  ];

  const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Table",
    },
  ];

  return (
    <>
      <BreadcrumbComp title="Table" items={BCrumb} />
      <div className="rounded-3xl dark:shadow-dark-md shadow-md bg-background p-6 relative w-full break-words">
        <h5 className="card-title">Table</h5>
        <div className="mt-3 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-6">Products</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {ProductTableData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap ps-6">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.img}
                        alt="icon"
                        className="h-[60px] w-[60px] rounded-md"
                      />
                      <div className="truncat line-clamp-2 sm:text-wrap max-w-56">
                        <h6 className="text-sm">{item.name}</h6>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <h5 className="text-base text-wrap">
                      {item.payment}
                      <span className="text-dark dark:text-darklink opacity-70">
                        <span className="mx-1">/</span>499
                      </span>
                    </h5>
                    <div className="text-sm font-medium text-dark dark:text-darklink opacity-70 mb-2 text-wrap">
                      {item.paymentstatus}
                    </div>

                    <Progress
                      variant={item?.progessvariant as any}
                      value={item.process}
                      className={`${item.processcolor}`}
                    />
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={item?.bedgevariant as BadgeProps["variant"]}
                    >
                      {item.statustext}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                          <HiOutlineDotsVertical size={22} />
                        </span>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        {tableActionData.map((action, idx) => (
                          <DropdownMenuItem
                            key={idx}
                            className="flex gap-3 items-center cursor-pointer"
                          >
                            <Icon icon={action.icon} height={18} />
                            <span>{action.listtitle}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
