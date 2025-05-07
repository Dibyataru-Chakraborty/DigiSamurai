"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconDeviceDesktopCode , IconMail, IconInfoSquareRounded, IconLibraryPhoto, IconBookmark } from "@tabler/icons-react";
import digisamurai from "@/assets/logo/DigiSamurai.png";

const navItems = [
  {
    name: "HOME",
    link: "/",
    icon: <IconHome />,
  },
  {
    name: "SERVICES",
    link: "/services",
    icon: <IconDeviceDesktopCode/>,
  },
  {
    name: "ACADEMICS",
    link: "/academics",
    icon: <IconDeviceDesktopCode/>,
  },
  {
    name: "ABOUT US",
    link: "/about",
    icon: <IconInfoSquareRounded/>,
  },
  {
    name: "MEMORIES",
    link: "/memories",
    icon: <IconLibraryPhoto/>,
  },
  {
    name: "CONTACT US",
    link: "/contact",
    icon: <IconMail />,
  },
  { name: "Book Demo", 
    link: "/contact", 
    icon: <IconBookmark /> 
  }
];

export default function NavBar() {
  return (
    <nav>
      <FloatingNav navItems={navItems} logo={digisamurai}/>
    </nav>
  );
}
