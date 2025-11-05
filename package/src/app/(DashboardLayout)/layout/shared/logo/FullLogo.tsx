"use client";

import Image from "next/image";
import Link from "next/link";

const FullLogo = () => {
  return (
    <Link href={"/"}>
      {/* Dark Logo */}
      <Image
        src="/images/logos/materialm-dark-logo.svg"
        alt="logo"
        width={152}
        height={36}
        className="block dark:hidden rtl:scale-x-[-1]"
      />
      {/* Light Logo */}
      <Image
        src="/images/logos/materialm-light-logo.svg"
        alt="logo"
        width={152}
        height={36}
        className="hidden dark:block rtl:scale-x-[-1]"
      />
    </Link>
  );
};

export default FullLogo;
