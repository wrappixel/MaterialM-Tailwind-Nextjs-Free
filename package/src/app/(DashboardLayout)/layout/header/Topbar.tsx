"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, DropdownItem } from "flowbite-react";


const Topbar = () => {
    const dropdownItems = [
        {
            id: 1,
            img: "/images/svgs/next-cat-icon.svg",
            title: "Nextjs Version",
            href: "https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376#demos"
        },
        {
            id: 2,
            img: "/images/svgs/angular-cat-icon.svg",
            title: "Angular Version",
            href: "https://www.wrappixel.com/templates/materialm-material-angular-dashboard-template/?ref=376#demos"
        },
        {
            id: 3,
            img: "/images/svgs/vue-cat-icon.svg",
            title: "Vuejs Version",
            href: "https://www.wrappixel.com/templates/materialm-vuejs-vuetify-admin-template/?ref=376#demos"
        },
        {
            id: 4,
            img: "/images/svgs/nuxt-cat-icon.svg",
            title: "Nuxtjs Version",
            href: "https://www.wrappixel.com/templates/materialm-vuetify-nuxt-js-admin-template/?ref=376#demos"
        },
        {
            id: 5,
            img: "/images/svgs/react-cat-icon.svg",
            title: "React Version",
            href: "https://www.wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376#demos"
        },

        {
            id: 6,
            img: "/images/svgs/bt-cat-icon.svg",
            title: "Bootstrap Version",
            href: "https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=376#demos"
        },

    ]
    return (
        <div className="py-[15px] px-6 z-40 sticky top-0 bg-[linear-gradient(90deg,_#0f0533_0%,_#1b0a5c_100%)]">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="md:flex hidden items-center gap-5">
                    <Link href="https://www.wrappixel.com">
                        <Image src={"/images/logos/logo-wrappixel.svg"} alt="data" width={147} height={28}/>
                    </Link>
                    <div className="xl:flex items-center gap-4 pl-5 border-l border-opacity-20 border-white hidden">
                        <Link target="_black" href="https://www.wrappixel.com/templates/category/nextjs-templates/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#714bff]">
                            <Icon icon="solar:window-frame-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#714bff]">Templates</h4>
                        </Link>
                        <Link target="_black" href="https://support.wrappixel.com/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#714bff]">
                            <Icon icon="solar:question-circle-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#714bff]">Help</h4>
                        </Link>
                        <Link target="_black" href="https://www.wrappixel.com/hire-us/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#714bff]">
                            <Icon icon="solar:case-round-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#714bff]">Hire Us</h4>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                    <h4 className="text-sm font-normal text-white uppercase font-semibold bg-[linear-gradient(90deg,_#FFFFFF_0%,_#8D70F8_100%)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]">Checkout Pro Version</h4>
                    <div className="flex flex-col sm:flex-row items-center gap-[10px]">
                        <div className="flex items-center gap-[10px]">
                            <div className="live-preview-drop !rounded-sm border border-[#ffffff66] border-1 hover:bg-[#8d70f8]">
                                <Dropdown label={
                                    <p className="text-base text-white font-normal">Live Preview</p>
                                } color="" size="sm" className="py-3 px-4 text-white" >
                                    {
                                        dropdownItems.map((item) => {
                                            return (
                                                <DropdownItem key={item.id} className="flex items-center gap-3 text-base text-[#000c29] py-3 px-[18px] group rounded-sm hover:bg-[#000c290d] hover:text-[#000c29]" as={Link} href={item.href} target='_blank' icon={() =>
                                                    <img src={item.img} width={18} alt="logo" />}>
                                                    <span className="group-hover:text-[#000c29]" >{item.title}</span>
                                                </DropdownItem>
                                            )
                                        })
                                    }
                                </Dropdown>
                            </div>
                            <Link target="_black" href="https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376" className="flex items-center px-4 py-[11px] rounded-sm gap-2 text-white bg-[#8d70f8] hover:bg-[#714bff]">
                                <Icon icon="solar:crown-linear" width={18} />
                                <h4 className="text-base font-normal leading-none text-white">Get Pro</h4>
                            </Link>
                        </div>
                        <Link target="_black" href="https://www.wrappixel.com/all-access-pass/" className="flex items-center px-4 py-[11px] rounded-sm gap-2 text-black bg-[#b3f143] hover:bg-[#90de03]">
                            <Icon icon="solar:bolt-linear" width={18} />
                            <h4 className="text-link text-base font-normal leading-none">All Access Pass</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar