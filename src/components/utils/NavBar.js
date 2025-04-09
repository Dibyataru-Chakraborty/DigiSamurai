"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconDeviceDesktopCode , IconMail, IconInfoSquareRounded, IconLibraryPhoto } from "@tabler/icons-react";
import digisamurai from "@/assets/img/DigiSamurai.png";

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
    name: "GALLERY",
    link: "/gallery",
    icon: <IconLibraryPhoto/>,
  },
  {
    name: "CONTACT US",
    link: "/contact",
    icon: <IconMail />,
  },
];

export default function NavBar() {
  return (
    <nav>
      <FloatingNav navItems={navItems} logo={digisamurai}/>
    </nav>
  );
}
