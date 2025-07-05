import TopBar from "@/components/header/TopBar"
import NavMenu from "./NavMenu"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"


const Header = () => {
  return (
    <header className="inner-container">
      <TopBar />
      <div className="flex justify-between pb-[13px] mt-[12px] border-b border-border-4/10">
        <span className="flex gap-[15px] items-center">
          <span className="border-e border-border-3/15 pe-[14px]">
            <img src="/assets/imgs/icon/lines.png" alt="lines-icon" className="h-5 w-5" />
          </span>
          <span className="border-e border-border-3/15 pe-[14px]">
            <img src="/assets/imgs/icon/store.png" alt="shop-icon" className="w-5 h-[18px]" />
          </span>
          <span>
            <img src="/assets/imgs/icon/search.png" alt="search-icon" className="w-[18px] h-5" />
          </span>
        </span>
        <NavMenu />
        <Link href={"#"} className={cn(buttonVariants({ variant: "primaryBlue" }), "text-white px-5 py-3 rounded-[10px] text-[14px] leading-[1.25] tracking-[-1%]")} >
          Get a free quote
        </Link>
      </div>
    </header>
  )
}

export default Header