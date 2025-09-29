import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { blockUser } from "../../utils/api/userModule";

const ChatMenu = ({ group }) => {
  const blockuser = blockUser();

  const blockUserHandler = () => {
    blockuser.mutateAsync(group?.otherUser?._id);
  };
  return (
    <div className="w-52 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md">
          <span>
            <img
              src="/images/chat/dots.svg"
              className="rounded-full h-full w-full"
              alt="Profile"
            />
          </span>
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 mt-2 origin-top-right rounded-xl border border-white/5 bg-neutral-bg-02 p-4 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col gap-3 justify-start"
        >
          <MenuItem>
            <button className="menu-button">Call</button>
          </MenuItem>{" "}
          <MenuItem>
            <button className="menu-button">Video Call</button>
          </MenuItem>
          <MenuItem>
            <button className="menu-button">Mute</button>
          </MenuItem>{" "}
          <MenuItem>
            <button className="menu-button">Report</button>
          </MenuItem>
          <MenuItem>
            <button className="menu-button" onClick={blockUserHandler}>
              Block user
            </button>
          </MenuItem>
          <MenuItem>
            <button className="font-satoshi-medium text-red-500 border border-red-500 p-2 rounded-lg">
              Delete chat
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default ChatMenu;
