import Link from "next/link";
import React from "react";

const FooterBase = () => {
  return (
    <div className=" FooterBase px-10 w-full h-auto flex pt-6 pb-[40px] sm:flex-row flex-col gap-[8px] justify-between items-center mx-auto bg-neutral-bg-04">
      <div className=" h-[20px] flex gap-[32px]">
        <Link
          href=""
          className="text-neutral-secondary font-satoshi text-[14px] font-medium leading-[20px]"
        >
          Privacy
        </Link>
        <Link
          href=""
          className="text-neutral-secondary font-satoshi text-[14px] font-medium leading-[20px]"
        >
          Terms of Service
        </Link>
        <Link
          href=""
          className="text-neutral-secondary font-satoshi text-[14px] font-medium leading-[20px]"
        >
          Cookies Policy
        </Link>
      </div>
      <div>
        <p className="text-neutral-secondary font-satoshi text-[16px] font-medium leading-[24px]">
          © 2023 Kainu All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterBase;
