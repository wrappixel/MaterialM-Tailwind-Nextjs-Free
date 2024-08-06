"use client";
import React from "react";
import { Badge, Dropdown, Progress } from "flowbite-react";
import { HiOutlineDotsVertical  } from "react-icons/hi";
import { Icon } from "@iconify/react";
import { Table } from "flowbite-react";

import product1 from "/public/images/products/s1.jpg";
import product2 from "/public/images/products/s2.jpg";
import product3 from "/public/images/products/s3.jpg";
import product4 from "/public/images/products/s4.jpg";
import product5 from "/public/images/products/s5.jpg";
import Image from "next/image";
import SimpleBar from "simplebar-react";


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
    },
  ];

  /*Table Action*/
  const tableActionData = [
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

  return (
    <>
      <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray py-6 px-0 relative w-full break-words">
        <div className="px-6">
          <h5 className="card-title">Popular Products</h5>
          <p className="card-subtitle">Total 9k Visitors</p>
        </div>
        <SimpleBar className="max-h-[450px]">
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="p-6">Products</Table.HeadCell>
                <Table.HeadCell>Payment</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                {ProductTableData.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap ps-6">
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
                    </Table.Cell>
                    <Table.Cell>
                      <h5 className="text-base text-wrap">
                        {item.payment}
                        <span className="text-dark opacity-70">
                          <span className="mx-1">/</span>499
                        </span>
                      </h5>
                      <div className="text-sm font-medium text-dark opacity-70 mb-2 text-wrap">
                        {item.paymentstatus}
                      </div>
                      <div className="me-5">
                        <Progress
                          progress={item.process}
                          color={`${item.processcolor}`}
                          className={`${item.processcolor}`}
                          size={"sm"}
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge color={`light${item.statuscolor}`} className={`text-${item.statuscolor}`}>
                        {item.statustext}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                            <HiOutlineDotsVertical size={22} />
                          </span>
                        )}
                      >
                        {tableActionData.map((items, index) => (
                          <Dropdown.Item key={index} className="flex gap-3">
                            {" "}
                            <Icon icon={`${items.icon}`} height={18} />
                            <span>{items.listtitle}</span>
                          </Dropdown.Item>
                        ))}
                      </Dropdown>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </SimpleBar>
      </div>
    </>
  );
};

export default PopularProducts;
