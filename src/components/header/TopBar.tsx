import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { TbMessage2 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="mt-[23px] py-[19px] px-[30px]  rounded-xl text-text-2 bg-white [box-shadow:inset_2.25px_-7px_44px_0_#F1F3FF,inset_0_20px_46px_0_#F1F3FF]  text-sm  flex justify-between items-center">
      <div className="text-[14px] font-medium hidden lg:flex gap-[15px]">
        <span className="flex gap-[7px] pe-[15px] border-e border-border-3/15 items-center">
          <CiLocationOn className="w-[16px] h-[20px]" />
          15th Street, USA</span>
        <span className="flex gap-[8px] items-center">
          <TbMessage2 className="" />
          support@gmail.com</span>
      </div>
      <div className="max-w-[200px]">
        <Image
          src={"/assets/imgs/logo/logo-1.png"}
          alt="logo"
          width={400}
          height={64}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="flex items-center gap-5">
        <span className="hidden lg:flex items-center gap-2">
          <TfiWorld />
          <Select defaultValue="en">
            <SelectTrigger className="w-[70px] p-0 border-none shadow-none">
              <SelectValue placeholder="Select language" className="text-[14px] font-medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en" className="text-[14px] font-medium">English</SelectItem>
              <SelectItem value="bn" className="text-[14px] font-medium">Bangla</SelectItem>
            </SelectContent>
          </Select>
        </span>
        <span className="hidden lg:flex justify-center gap-[14px] ps-[19px] border-s border-border-3/15">
          <Link href={"#"}>
            <FaFacebookF className="hover:text-[#5163FF]" />
          </Link>
          <Link href={"#"}>
            <FaXTwitter className="hover:text-[#5163FF]" />
          </Link>
          <Link href={"#"}>
            <FaInstagram className="hover:text-[#5163FF]" />
          </Link>
          <Link href={"#"}>
            <FaLinkedinIn className="hover:text-[#5163FF]" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
