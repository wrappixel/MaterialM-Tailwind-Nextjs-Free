"use client";
import React, { useState, useEffect } from "react";
import { Badge, Button, Navbar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Profile from "./Profile";
import FullLogo from "../../shared/logo/FullLogo";
import { Drawer } from "flowbite-react";
import MobileSidebar from "../sidebar/MobileSidebar";
import Link from "next/link";
import Notification from "./notification";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // mobile-sidebar
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <header
        className={`sticky top-[62px] z-[5] ${
          isSticky
            ? "bg-lightgray dark:bg-dark shadow-md fixed w-full"
            : "bg-transparent"
        }`}
      >
        <Navbar
          fluid
          className={`rounded-none bg-transparent dark:bg-transparent py-4 sm:px-30 px-4`}
        >
          {/* Mobile Toggle Icon */}

          <div className="flex gap-3 items-center justify-between w-full ">
            <div className="flex gap-2 items-center">
              <span
                onClick={() => setIsOpen(true)}
                className="h-10 w-10 flex text-black dark:text-white text-opacity-65 xl:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer"
              >
                <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
              </span>
              <Notification/>
            </div>

            <div className="flex gap-4 items-center">

              <Button className="bg-transparent hover:bg-primary text-primary hover:text-white border border-primary hover:border-transparent hidden">Test Button1</Button>
              <Button className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary hidden">Test Button2</Button>
              <Button className="bg-primary hover:bg-primaryemphasis text-white hidden">Test Button3</Button>
              <Button as={Link} href="https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376" target="_blank" size={'sm'} color={"primary"}>
                Check Pro Template 
              </Button>
              <Profile />
            </div>
          </div>
        </Navbar>
      </header>

      {/* Mobile Sidebar */}
      <Drawer open={isOpen} onClose={handleClose} className="w-130">
        <Drawer.Items>
          <MobileSidebar />
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Header;
