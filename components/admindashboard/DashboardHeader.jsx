import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function DashboardHeader() {
  return (
    <div className="w-full border-b border-[#23222a] p-4 flex justify-end items-center gap-5 px-8 text-[#838091]">
      <IoMdNotificationsOutline size={25} />
      <FaRegCircleUser size={25} />
    </div>
  );
}
