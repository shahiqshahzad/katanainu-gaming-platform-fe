import React from "react";
import { Search } from "./Icons";
const SearchInput = () => {
  return (
    <div className="flex items-center bg-neutral-bg-02 pl-4 gap-2 w-[348px] rounded-[40px] h-10 text-neutral-primary font-satoshi-regular text-sm tracking-[0.25px] leading-5">
      <Search />
      <input
        className="bg-transparent grow h- outline-none font-satoshi-regular pr-4"
        type="search"
        name=""
        id=""
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
