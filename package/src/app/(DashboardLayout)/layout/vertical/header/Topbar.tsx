"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import wrappixel_logo from "/public/images/logos/logo-wrappixel.svg";
import { Dropdown } from "flowbite-react/components/Dropdown";
import Link from "next/link";
import Image from "next/image";


const Topbar = () => {
    const dropdownItems = [
        {
            id: 1,
            title: "Bootstrap Preview",
            href: "https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=376"
        },
        {
            id: 2,
            title: "Angular Preview",
            href: "https://www.wrappixel.com/templates/materialm-material-angular-dashboard-template/?ref=376"
        },
        {
            id: 3,
            title: "Vuejs Preview",
            href: "https://www.wrappixel.com/templates/materialm-vuejs-vuetify-admin-template/?ref=376"
        },
        {
            id: 4,
            title: "Reactjs Preview",
            href: "https://www.wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376"
        },
        {
            id: 5,
            title: "Nextjs Preview",
            href: "https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376"
        },

    ]
  return (
    <div className="py-3 px-4 bg-dark z-40 sticky top-0">
      <div className="flex items-center xl:justify-between lg:justify-center xl:gap-0 lg:gap-4 flex-wrap justify-center">
        <div className="flex items-center gap-12">
            <Image src={wrappixel_logo} alt="data" />
            <div className="lg:flex items-center gap-3 hidden">
                <Link href="https://support.wrappixel.com/" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-2 px-3 rounded-full">
                    <Icon icon="tabler:lifebuoy" className="shrink-0 text-[19px]" />
                    <h4 className="text-sm font-medium leading-none text-white">Support</h4>
                </Link>
                <Link href="https://www.wrappixel.com" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-2 px-3 rounded-full">
                    <Icon icon="tabler:gift" className="shrink-0 text-[19px]" />
                    <h4 className="text-sm font-medium leading-none text-white">Templates</h4>
                </Link>
                <Link href="https://www.wrappixel.com/hire-us/" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-2 px-3 rounded-full">
                    <Icon icon="tabler:briefcase" className="shrink-0 text-[19px]" />
                    <h4 className="text-sm font-medium leading-none text-white">Hire Us</h4>
                </Link>
            </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center lg:mt-0 mt-2">
            <h4 className="text-lg font-medium text-white">Check MaterialM Premium Version</h4>
            <Dropdown label={
                <div className="flex items-center gap-1">
                    <Icon icon="tabler:device-laptop" className="text-lg" />
                     <p className="text-[15px]">Live Preview</p>
                </div>
            } color="outlineprimary" size="sm" className="py-2" >
              {
                dropdownItems.map((item) => {
                    return (
                        <Dropdown.Item key={item.id} className="flex items-center gap-1 text-sm py-2.5 px-4 group" as={Link} href={item.href} icon={() => <Icon icon="tabler:external-link" className="text-lg text-link group-hover:!text-primary" />}><span className="group-hover:text-primary" >{item.title}</span></Dropdown.Item>
                    )
                })
              }
            </Dropdown>
            <Dropdown label={
                <div className="flex items-center gap-1">
                    <Icon icon="tabler:shopping-cart" className="text-lg" />
                     <p className="text-[15px]">Buy Now</p>
                </div>
            } color="ghostprimary" size="sm" >
              {
                dropdownItems.map((item) => {
                    return (
                        <Dropdown.Item key={item.id} className="flex items-center gap-1 text-sm py-2.5 px-4 group" as={Link} href={item.href} icon={() => <Icon icon="tabler:external-link" className="text-lg text-link group-hover:text-primary" />}><span className="group-hover:text-primary" >{item.title}</span></Dropdown.Item>
                    )
                })
              }
            </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Topbar