export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  isPro?: boolean
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  isPro?: boolean
}

import { uniqueId } from "lodash";


const SidebarContent: MenuItem[] = [
  {
    isPro: true,
    heading: "Dashboards",
    children: [
      {
        name: "Dashboard",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        url: "/",
        isPro: false
      },
      {
        name: "eCommerce",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/",
        isPro: true
      },
      {
        name: "Analytics",
        icon: "solar:chart-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/dashboards/analytics",
        isPro: true
      },
      {
        name: "CRM",
        icon: "solar:layers-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/dashboards/crm",
        isPro: true
      },
      {
        name: "Front Pages",
        id: uniqueId(),
        isPro: true,
        icon: "solar:home-angle-linear",
        children: [
          {
            name: "Homepage",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/frontend-pages/homepage",
            isPro: true
          },
          {
            name: "About Us",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/frontend-pages/aboutus",
            isPro: true
          },
          {
            name: "Blog",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/frontend-pages/blog",
            isPro: true
          },
          {
            name: "Blog Details",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/frontend-pages/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
            isPro: true
          },
          {
            name: "Contact Us",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/frontend-pages/contact",
            isPro: true
          },
          {
            name: "Portfolio",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/frontend-pages/portfolio",
            isPro: true
          },
          {
            name: "Pricing",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/frontend-pages/pricing",
            isPro: true
          },
        ],
      },
    ],
  },
    {
    heading: "Utilities",
    isPro: false,
    children: [
      {
        name: "Typography",
        icon: "solar:text-circle-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/ui/typography",
        isPro: false      
},
      {
        name: "Table",
        icon: "solar:bedside-table-3-linear",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/ui/table",
        isPro: false      
},
      {
        name: "Form",
        icon: "solar:password-minimalistic-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/ui/form",
        isPro: false      
},
      {
        name: "Shadow",
        icon: "solar:airbuds-case-charge-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/ui/shadow",
        isPro: false      
},
    ],
  },
  {
    isPro: true,
    heading: "Apps",
    children: [
      {
        id: uniqueId(),
        name: "Contacts",
        icon: "solar:phone-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/apps/contacts",
        isPro: true
      },
      {
        name: "Ecommerce",
        id: uniqueId(),
        isPro: true,
        icon: "solar:cart-3-line-duotone",
        children: [
          {
            id: uniqueId(),
            name: "Shop",
            url: "https://material-m-nextjs-main.vercel.app/apps/ecommerce/shop",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "https://material-m-nextjs-main.vercel.app/apps/ecommerce/detail/1",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "List",
            url: "https://material-m-nextjs-main.vercel.app/apps/ecommerce/list",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Checkout",
            url: "https://material-m-nextjs-main.vercel.app/apps/ecommerce/checkout",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Add Product",
            url: "https://material-m-nextjs-main.vercel.app/apps/ecommerce/addproduct",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Edit Product",
            url: "https://material-m-nextjs-main.vercel.app/apps/ecommerce/editproduct",
            isPro: true
          },
        ],
      },
      {
        name: "Blogs",
        id: uniqueId(),
        isPro: true,
        icon: "solar:widget-add-line-duotone",
        children: [
          {
            id: uniqueId(),
            name: "Blog Post",
            url: "https://material-m-nextjs-main.vercel.app/apps/blog/post",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Blog Detail",
            url: "https://material-m-nextjs-main.vercel.app/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
            isPro: true
          },
        ],
      },
      {
        name: "User Profile",
        id: uniqueId(),
        isPro: true,
        icon: "solar:shield-user-outline",
        children: [
          {
            id: uniqueId(),
            name: "Profile",
            url: "https://material-m-nextjs-main.vercel.app/apps/user-profile/profile",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Followers",
            url: "https://material-m-nextjs-main.vercel.app/apps/user-profile/followers",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Friends",
            url: "https://material-m-nextjs-main.vercel.app/apps/user-profile/friends",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Gallery",
            url: "https://material-m-nextjs-main.vercel.app/apps/user-profile/gallery",
            isPro: true
          },
        ],
      },

      {
        name: "Invoice",
        id: uniqueId(),
        isPro: true,
        icon: "solar:bill-check-outline",
        children: [
          {
            id: uniqueId(),
            name: "List",
            url: "https://material-m-nextjs-main.vercel.app/apps/invoice/list",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "https://material-m-nextjs-main.vercel.app/apps/invoice/detail/PineappleInc",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Create",
            url: "https://material-m-nextjs-main.vercel.app/apps/invoice/create",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Edit",
            url: "https://material-m-nextjs-main.vercel.app/apps/invoice/edit/PineappleInc",
            isPro: true
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Chats",
        icon: "solar:chat-round-line-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/apps/chats",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Notes",
        icon: "solar:document-text-outline",
        url: "https://material-m-nextjs-main.vercel.app/apps/notes",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Calendar",
        icon: "solar:calendar-mark-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/apps/calendar",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Email",
        icon: "solar:letter-linear",
        url: "https://material-m-nextjs-main.vercel.app/apps/email",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Tickets",
        icon: "solar:ticker-star-outline",
        url: "https://material-m-nextjs-main.vercel.app/apps/tickets",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Kanban",
        icon: "solar:notebook-linear",
        url: "https://material-m-nextjs-main.vercel.app/apps/kanban",
        isPro: true
      },
    ],
  },
  {
    isPro: true,
    heading: "Pages",
    children: [
      {
        name: "Pages",
        id: uniqueId(),
        isPro: true,
        icon: "solar:cloud-file-linear",
        children:[
      {
        name: "Account Setting",
        icon: "solar:settings-minimalistic-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/theme-pages/account-settings",
        isPro: true
      },
      {
        name: "FAQ",
        icon: "solar:question-circle-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/theme-pages/faq",
        isPro: true
      },
      {
        name: "Pricing",
        icon: "solar:dollar-minimalistic-linear",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/theme-pages/pricing",
        isPro: true
      },
      {
        name: "Landingpage",
        icon: "solar:bill-list-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/landingpage",
        isPro: true
      },
      {
        name: "Roll Base Access",
        icon: "solar:accessibility-broken",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/theme-pages/casl",
        isPro: true
      },
    ]
  },
    ],
  },
  {
    isPro: true,
    heading: "Widgets",
    children: [
      {
        id: uniqueId(),
        name: "Cards",
        icon: "solar:cardholder-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/widgets/cards",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Banners",
        icon: "solar:align-vertical-spacing-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/widgets/banners",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Charts",
        icon: "solar:chart-square-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/widgets/charts",
        isPro: true
      },
    ],
  },
  {
    isPro: true,
    heading: "UI",
    children: [
      {
        name: "Ui Elements",
        id: uniqueId(),
        isPro: true,
        icon: "solar:widget-6-outline",
        children: [
          {
            id: uniqueId(),
            name: "Accordian",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/accrodian",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Badge",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/badge",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Button",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/buttons",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Dropdowns",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/dropdown",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Modals",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/modals",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Tab",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/tab",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Tooltip",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/tooltip",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Alert",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/alert",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Progressbar",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/progressbar",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Pagination",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/pagination",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Breadcrumbs",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/breadcrumb",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Drawer",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/drawer",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Lists",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/listgroup",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Carousel",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/carousel",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Spinner",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/spinner",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Avatar",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/avatar",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Banner",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/banner",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Button Group",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/button-group",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Card",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/card",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Datepicker",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/datepicker",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Footer",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/footer",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "KBD",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/kbd",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Mega Menu",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/megamenu",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Navbar",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/navbar",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Popover",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/popover",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Rating",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/rating",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Sidebar",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/sidebar",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Tables",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/tables",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Timeline",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/timeline",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Toast",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/toast",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Typography",
            url: "https://material-m-nextjs-main.vercel.app/ui-components/typography",
            isPro: true
          },
        ],
      },
    ],
  },

  {
    isPro: true,
    heading: "Headless Ui",
    children: [
      {
        name: "Ui Elements",
        id: uniqueId(),
        isPro: true,
        icon: "solar:text-underline-cross-broken",
        children: [
          {
            name: "Dropdown",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/headless-ui/dropdown",
            isPro: true
          },
          {
            name: "Disclosure",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/headless-ui/disclosure",
            isPro: true
          },
          {
            name: "Dialog",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/headless-ui/dialog",
            isPro: true
          },
          {
            name: "Popover",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/headless-ui/popover",
            isPro: true
          },
          {
            name: "Tabs",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/headless-ui/tabs",
            isPro: true
          },
          {
            name: "Transition",
            id: uniqueId(),
            url: "https://material-m-nextjs-main.vercel.app/headless-ui/transition",
            isPro: true
          },
        ],
      },
      {
        name: "Form Elements",
        id: uniqueId(),
        isPro: true,
        icon: "solar:align-vertical-spacing-line-duotone",
        children: [
          {
            id: uniqueId(),
            name: "Buttons",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/buttons",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/checkbox",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Combobox",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/combobox",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Fieldset",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/fieldset",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Input",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/input",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Listbox",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/listbox",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Radio Group",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/radiogroup",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/select",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Switch",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/switch",
            isPro: true
          },
          {
            id: uniqueId(),
            name: "Textarea",
            url: "https://material-m-nextjs-main.vercel.app/headless-form/textarea",
            isPro: true
          },
        ],
      },
    ],
  },



  {
    isPro: true,
    heading: "Tables",
    children: [
      {
        name: "Basic Tables",
        icon: "solar:tablet-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/tables/basic",
        isPro: true
      },
      {
        name: "Striped Rows Table",
        icon: "solar:tablet-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/tables/striped-row",
        isPro: true
      },
      {
        name: "Hover Table",
        icon: "solar:tablet-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/tables/hover-table",
        isPro: true
      },
      {
        name: "Checkbox Table",
        icon: "solar:tablet-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/tables/checkbox-table",
        isPro: true
      },
    ],
  },
  {
    isPro: true,
    heading: "React Tables",

    children: [
      {
        name: "React Tables",
        id: uniqueId(),
        isPro: true,
        icon: "solar:round-transfer-vertical-broken",
        children:[
      {
        id: uniqueId(),
        name: "Basic",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/basic",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Dense",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/dense",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Sorting",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/sorting",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Filtering",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/filtering",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Pagination",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/pagination",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Row Selection",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/row-selection",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Column Visibility",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/columnvisibility",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Editable",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/editable",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Sticky",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/sticky",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Drag & Drop",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/drag-drop",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Empty",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/empty",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Expanding",
        icon: 'solar:round-transfer-vertical-broken',
        url: "https://material-m-nextjs-main.vercel.app/react-tables/expanding",
        isPro: true
      },
    ]
  },
    ],
  },
  {
    isPro: true,
    heading: "Charts",
    children: [
      {
        name: "Line Chart",
        icon: "solar:chart-square-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/charts/line",
        isPro: true
      },
      {
        name: "Area Chart",
        icon: "solar:graph-new-broken",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/charts/area",
        isPro: true
      },
      {
        name: "Gradient Chart",
        icon: "solar:round-graph-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/charts/gradient",
        isPro: true
      },
      {
        name: "Candlestick",
        icon: "solar:chandelier-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/charts/candlestick",
        isPro: true
      },
      {
        name: "Column",
        icon: "solar:chart-2-bold-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/charts/column",
        isPro: true
      },
      {
        name: "Doughnut & Pie",
        icon: "solar:pie-chart-2-linear",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/charts/doughnut",
        isPro: true
      },
      {
        name: "Radialbar & Radar",
        icon: "solar:graph-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/charts/radialbar",
        isPro: true
      },
    ],
  },
  {
    isPro: true,
    heading: "Forms",
    children: [
      {
        id: uniqueId(),
        name: "Forms Elements",
        icon: "solar:text-selection-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/forms/form-elements",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Forms Layouts",
        icon: "solar:document-text-outline",
        url: "https://material-m-nextjs-main.vercel.app/forms/form-layouts",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Forms Horizontal",
        icon: "solar:slider-horizontal-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/forms/form-horizontal",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Forms Vertical",
        icon: "solar:slider-vertical-line-duotone",
        url: "https://material-m-nextjs-main.vercel.app/forms/form-vertical",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Forms Custom",
        icon: "solar:document-text-outline",
        url: "https://material-m-nextjs-main.vercel.app/forms/form-custom",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Form Validation",
        icon: "solar:bill-check-linear",
        url: "https://material-m-nextjs-main.vercel.app/forms/form-validation",
        isPro: true
      },
    ],
  },
  {
    isPro: true,
    heading: "Icons",
    children: [
      {
        id: uniqueId(),
        name: "Solar Icons",
        icon: "solar:sticker-smile-circle-outline",
        url: "https://material-m-nextjs-main.vercel.app/icons/solar",
        isPro: true
      },
      {
        id: uniqueId(),
        name: "Tabler Icons",
        icon: "solar:sticker-smile-circle-outline",
        url: "https://material-m-nextjs-main.vercel.app/icons/tabler",
        isPro: true
      },
    ],
  },
  {
    isPro: true,
    heading: "Auth",
    children: [

      {
        name: "Login",
        icon: "solar:login-2-linear",
        id: uniqueId(),
        url: "/auth/login",
        isPro: false
      },
      {
        name: "Register",
        icon: "solar:shield-user-outline",
        id: uniqueId(),
        url: "/auth/register",
        isPro: false
      },
      {
        name: "Auth Pages",
        id: uniqueId(),
        isPro: true,
        icon: "solar:user-plus-rounded-line-duotone",
        children:[
      {
        name: "Error",
        icon: "solar:bug-minimalistic-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/error",
        isPro: true
      },
      {
        name: "Side Login",
        icon: "solar:login-3-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/auth1/login",
        isPro: true
      },
      {
        name: "Boxed Login",
        icon: "solar:login-3-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/auth2/login",
        isPro: true
      },
      {
        name: "Side Register",
        icon: "solar:user-plus-rounded-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/auth1/register",
        isPro: true
      },
      {
        name: "Boxed Register",
        icon: "solar:user-plus-rounded-line-duotone",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/auth2/register",
        isPro: true
      },
      {
        name: "Side Forgot Pwd",
        icon: "solar:password-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/auth1/forgot-password",
        isPro: true
      },
      {
        name: "Boxed Forgot Pwd",
        icon: "solar:password-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/auth2/forgot-password",
        isPro: true
      },
      {
        name: "Side Two Steps",
        icon: "solar:password-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/auth1/two-steps",
        isPro: true
      },
      {
        name: "Boxed Two Steps",
        icon: "solar:password-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/auth2/two-steps",
        isPro: true
      },
      {
        name: "Maintenance",
        icon: "solar:settings-outline",
        id: uniqueId(),
        url: "https://material-m-nextjs-main.vercel.app/auth/maintenance",
        isPro: true
      },
    ]
  },
    ],
  },
  {

    heading: "Extra",
    isPro: false,
    children: [
      {
        name: "Icons",
        icon: "solar:smile-circle-outline",
        id: uniqueId(),
        url: "/icons/solar",
        isPro: false
      },
      {
        name: "Sample Page",
        icon: "solar:notes-minimalistic-outline",
        id: uniqueId(),
        url: "/sample-page",
        isPro: false
      },
    ],
  },
];

export default SidebarContent;
