import { Badge, Dropdown } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";



const Notifications = [
    {
        id:1,
        title:"Item1",
    },
    {
        id:2,
        title:"Item2",
    },,
]

const Notification = () => {
    return (
        <div className="relative group/menu">
            <Dropdown label="" className="rounded-sm w-[150px] notification z-50" placement="right-start" dismissOnClick={false} renderTrigger={() => (
                <span
                    className="h-10 w-10 hover:text-primary group-hover/menu:bg-lightprimary group-hover/menu:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer relative"
                    aria-label="Notifications"
                >
                    <Icon icon="solar:bell-linear" height={20} />
                    <Badge className="h-2 w-2 rounded-full absolute end-2 top-1 bg-primary p-0" />
                </span>
            )}
            >
                {
                    Notifications.map((item) => (
                        <Dropdown.Item as={Link} key={item?.id} href="/" className="px-3 py-2 flex items-center bg-hover group/link w-full gap-3 text-dark hover:bg-gray-100">
                            {item?.title}
                       </Dropdown.Item>
                    ))
                }
            </Dropdown>
        </div>
    );
};

export default Notification;
