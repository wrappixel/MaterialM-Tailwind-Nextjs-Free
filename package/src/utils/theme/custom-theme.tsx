const customTheme = {
  button: {
    base: "group relative flex items-stretch justify-center text-center p-0.5 text-center font-medium",
    fullSized: "w-full",
    color: {
      primary: "bg-primary text-white hover:bg-primaryemphasis",
      secondary: "bg-secondary text-white ",
      error: "bg-error text-white ",
      warning: "bg-warning text-white ",
      info: "bg-info text-white hover:bg-primaryemphasis",
      success: "bg-success text-white ",
      muted: "bg-muted text-dark dark:text-white dark:bg-darkmuted ",
      lighterror:
        "bg-lighterror dark:bg-darkerror text-error hover:bg-error hover:text-white",
      lightprimary:
        "bg-lightprimary text-primary hover:bg-primary dark:hover:bg-primary hover:text-white",
      lightsecondary:
        "bg-lightsecondary dark:bg-darksecondary text-secondary hover:bg-secondary dark:hover:bg-secondary hover:text-white",
      lightsuccess:
        "bg-lightsuccess dark:bg-darksuccess text-success hover:bg-success dark:hover:bg-success hover:text-white",
      lightinfo:
        "bg-lightinfo dark:bg-darkinfo text-info hover:bg-info dark:hover:bg-info hover:text-white",
      lightwarning:
        "bg-lightwarning dark:bg-darkwarning text-warning hover:bg-warning dark:hover:bg-warning hover:text-white",
      outlineprimary:
        "border border-primary bg-transparent text-primary hover:bg-primary dark:hover:bg-primary hover:text-white ",
      outlinewhite:
        "border border-white bg-transparent text-white hover:bg-white dark:hover:bg-white hover:text-dark ",
      transparent:
        "bg-transparent hover:bg-lightprimary dark:hover:bg-darkprimary hover:text-primary p-0",
    },
    inner: {
      base: "flex items-center gap-2 transition-all duration-150 justify-center",
    },
  },

  drawer: {
    root: {
      base: "fixed z-40 overflow-y-auto bg-white dark:bg-darkgray p-0 transition-transform",
    },
    header: {
      inner: {
        closeButton:
          "absolute end-2.5 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-lightgray dark:bg-darkmuted text-primary",
        closeIcon: "h-4 w-4",
        titleText:
          "mb-4 inline-flex items-center text-base font-semibold text-darklink",
      },
    },
  },

 

  table: {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full  bg-transparent drop-shadow-md ",
      wrapper: "relative",
    },
    head: {
      base: "group/head text-sm font-medium capitalize text-dark dark:text-white border-b border-ld",
      cell: {
        base: "font-semibold px-4 py-4   dark:bg-transparent",
      },
    },
    body: {
      base: "group/body",
      cell: {
        base: "px-4 py-3 dark:bg-transparent",
      },
    },
    row: {
      base: "group/row bg-transparent ",
      hovered: "bg-hover dark:bg-transparent",
      striped:
        "odd:bg-transparent  even:bg-gray-50 odd:dark:bg-dark even:dark:bg-gray-700",
    },
  },

  badge: {
    root: {
      base: "flex h-fit w-fit items-center font-medium text-xs",
      color: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white ",
        info: "bg-info text-white",
        success: "bg-success text-white",
        warning: "bg-warning text-white ",
        error: "bg-error text-white ",
        lightsuccess: "bg-lightsuccess dark:bg-lightsuccess text-success",
        lightprimary: "bg-lightprimary dark:bg-lightprimary text-primary",
        lightwarning: "bg-lightwarning dark:bg-lightwarning text-warning",
        lightinfo: "bg-lightinfo dark:bg-lightinfo text-info",
        lightsecondary:
          "bg-lightsecondary dark:bg-lightsecondary text-secondary",
        lighterror: "bg-lighterror dark:bg-lighterror text-error",
        white: "bg-white dark:bg-darkmuted text-dark dark:text-white",
        muted: "bg-muted dark:bg-darkmuted text-dark dark:text-white",
      },
    },
    icon: {
      off: "rounded-full px-2.5 py-1",
      on: "rounded-full py-[5px] px-[10px]",
      size: {
        xs: "h-3 w-3",
        sm: "h-3.5 w-3.5",
      },
    },
  },


  checkbox: {
    root: {
      base: "rounded border-2 cursor-pointer ",
      color: {
        default: "text-primary",
        primary: "text-primary",
        secondary: "text-secondary",
        error: "text-error",
      },
    },
  },

  progress: {
    base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
    color: {
      success: "bg-success",
      secondary: "bg-secondary",
      warning: "bg-warning",
      error: "bg-error",
      info: "bg-info",
      primary: "bg-primary",
    },
    size: {
      sm: "h-1",
      md: "h-1.5",
      lg: "h-4",
      xl: "h-6",
    },
  },
  sidebar: {
    root: {
      inner: "bg-white dark:bg-darkgray rounded-none",
    },
    item: {
      base: "flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3  text-[15px] text-start  leading-[normal] font-normal text-link hover:bg-lightprimary hover:text-primary dark:text-white  dark:hover:text-primary",
      content: {
        base: "flex-1 whitespace-nowrap px-0",
      },
      active:
        "bg-lightprimary !text-primary dark:bg-lightprimary !dark:text-primary",
    },

    collapse: {
      button:
        "group flex gap-3 items-center  rounded-lg px-4 py-3 mb-1 text-[15px] text-start truncate leading-[normal] font-normal text-link hover:bg-lightprimary hover:text-primary dark:text-white w-full dark:hover:text-primary",
      icon: {
        base: "h-6 w-6 text-link text-base",
      },
      label: {
        base: "flex justify-start flex-1 max-w-36 overflow-hidden truncate" ,
      },
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-ld pt-4 first:mt-0 first:border-t-0 first:pt-0 sidebar-nav ",
    },
  },

  
};

export default customTheme;
