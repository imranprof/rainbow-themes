"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import navigation from "@/config/navigation.json"
import { MdKeyboardArrowDown } from "react-icons/md";
import { cn } from "@/lib/utils";



const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation.header.map((item) => (
          <NavigationMenuItem key={item.id}>
            <Link href={item.path} legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex gap-[6px] text-text-2 hover:text-text-3")}>
                {item.name} {item.hasChildren && <MdKeyboardArrowDown />}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu