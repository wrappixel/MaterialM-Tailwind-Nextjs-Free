"use client";

import Image, { StaticImageData } from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Icon } from "@iconify/react";
import SimpleBar from "simplebar-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import product1 from "../../../../public/images/products/s1.jpg";
import product2 from "../../../../public/images/products/s2.jpg";
import product3 from "../../../../public/images/products/s3.jpg";
import product4 from "../../../../public/images/products/s4.jpg";
import product5 from "../../../../public/images/products/s5.jpg";

const PopularProducts = () => {
  type BadgeVariant = "lightSecondary" | "lightSuccess" | "destructive" | "lightError" | "default" | "outline" | "warning" | null | undefined;

  type ProductItem = {
    img: StaticImageData | string;
    name: string;
    payment: string;
    paymentstatus: string;
    process: number;
    processcolor: string;
    statuscolor: string;
    statustext: string;
    variant?: BadgeVariant;
    progressVariant?: string;
  };

  const ProductTableData: ProductItem[] = [
    {
      img: product1,
      name: "iPhone 13 pro max-Pacific Blue-128GB storage",
      payment: "$180",
      paymentstatus: "Partially paid",
      process: 45,
      processcolor: "bg-yellow-400",
      statuscolor: "secondary",
      statustext: "Confirmed",
      variant: "lightSuccess",
      progressVariant: "warning",
    },
    {
      img: product2,
      name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
      payment: "$120",
      paymentstatus: "Full paid",
      process: 100,
      processcolor: "bg-green-500",
      statuscolor: "success",
      statustext: "Confirmed",
      variant: "lightSuccess",
      progressVariant: "success",
    },
    {
      img: product3,
      name: "PlayStation 5 DualSense Wireless Controller",
      payment: "$120",
      paymentstatus: "Cancelled",
      process: 100,
      processcolor: "bg-red-500",
      statuscolor: "destructive",
      statustext: "Cancelled",
      variant: "lightError",
      progressVariant: "error",
    },
    {
      img: product5,
      name: "Amazon Basics Mesh, Mid-Back, Swivel Office",
      payment: "$120",
      paymentstatus: "Partially paid",
      process: 45,
      processcolor: "bg-yellow-400",
      statuscolor: "secondary",
      statustext: "Confirmed",
      variant: "lightSuccess",
      progressVariant: "warning",
    },
    {
      img: product4,
      name: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart",
      payment: "$120",
      paymentstatus: "Full paid",
      process: 100,
      processcolor: "bg-green-500",
      statuscolor: "success",
      statustext: "Confirmed",
      variant: "lightSuccess",
      progressVariant: "success",
    },
  ];

  const tableActionData = [
    { icon: "solar:add-circle-outline", listtitle: "Add" },
    { icon: "solar:pen-new-square-broken", listtitle: "Edit" },
    { icon: "solar:trash-bin-minimalistic-outline", listtitle: "Delete" },
  ];

  return (
    <div className="rounded-3xl dark:shadow-dark-md shadow-md bg-background py-6 px-0 relative w-full break-words">
      <div className="px-6">
        <h5 className="card-title">Popular Products</h5>
        <p className="card-subtitle">Total 9k Visitors</p>
      </div>

      <SimpleBar className="max-h-[450px]">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-6">Products</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
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
                        height={60}
                        width={60}
                      />
                      <div className="truncate line-clamp-2 max-w-56">
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
                    <div className="me-5">
                      <Progress variant={item.progressVariant as any} value={item.process} />
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge variant={item?.variant as BadgeProps["variant"]}>{item.statustext}</Badge>
                  </TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                          <HiOutlineDotsVertical size={22} />
                        </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {tableActionData.map((items, index) => (
                          <DropdownMenuItem key={index} className="flex gap-3">
                            <Icon icon={items.icon} height={18} />
                            <span>{items.listtitle}</span>
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
      </SimpleBar>
    </div>
  );
};

export default PopularProducts;
