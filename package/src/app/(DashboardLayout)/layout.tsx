"use client";
import React from "react";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Header from "./layout/vertical/header/Header";
import Topbar from "./layout/vertical/header/Topbar";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar />
      <div className="flex w-full  bg-lightgray min-h-[calc(100vh_-_65px)]">
        <div className="page-wrapper flex w-full">
          {/* Header/sidebar */}
          <Sidebar />
          <div className="page-wrapper-sub flex flex-col w-full ">
            {/* Top Header  */}
            <Header />

            <div
              className={`h-100`}
            >
              {/* Body Content  */}
              <div
                className={`w-full`}
              >
                  <div className="container py-30">
                    {children}
                  </div>
              </div>
              
            </div>
            <div className="bg-lightgray text-center mt-auto">
                <p className="text-base pb-10">
                  Design and Developed by{" "}
                  <Link
                    href="https://wrappixel.com/"
                    target="_blank"
                    className="pl-1 text-primary underline decoration-primary"
                  >
                    wrappixel.com
                  </Link>
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
