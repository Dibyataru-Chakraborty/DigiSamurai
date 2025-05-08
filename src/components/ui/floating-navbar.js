"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// FloatingNav component
export const FloatingNav = ({ navItems, className, logo }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      let positionY = scrollYProgress.get();

      setVisible(positionY > 0 && positionY < 0.3 ? true : direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          `hidden lg:flex bg-gray-100 flex-wrap items-center justify-between fixed top-5 inset-x-4 sm:inset-x-8 lg:inset-x-16 px-3 py-2 z-[5000]
          max-w-screen border border-transparent backdrop-blur-sm
          rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
          transition-colors duration-300 font-[Jura]`,
          className
        )}
      >
        {/* Logo */}
        {logo && (
          <div className="flex justify-center xl:justify-start w-full xl:w-auto space-x-1 mr-auto ml-2 sm:ml-4 lg:ml-8 xl:ml-16">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={60}
              className="w-[80px] sm:w-[100px] xl:w-[120px] h-auto"
            />
          </div>
        )}

        {/* Navigation Items */}
        <div className="flex flex-wrap justify-center xl:justify-end w-full xl:w-auto space-x-2 sm:space-x-4 xl:space-x-8 xl:ml-auto mr-2 sm:mr-4 lg:mr-8 xl:mr-16">
          {navItems.map((navItem, index) => (
            <NavItem
              key={index}
              navItem={navItem}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              idx={index}
              total={navItems.length}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// NavItem component
const NavItem = ({ navItem, setHoveredIndex, idx, total }) => {
  const pathname = usePathname();

  const isLast = idx === total - 1;
  const isActive =
    navItem.link === "/" ? pathname === "/" : pathname.startsWith(navItem.link);

  return (
    <Link
      href={navItem.link}
      className={cn(
        "relative inline-flex justify-center items-center group rounded-full transition-colors duration-200 font-[Jura] px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base",
        isActive ? "text-red-600 font-semibold" : "hover:text-primary",
        isLast && "bg-red-200 text-red-800 font-semibold"
      )}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Icon for mobile */}
      <span className="block md:hidden z-[5100]">{navItem.icon}</span>
      {/* Text for larger screens */}
      <span className="hidden md:block z-[5100] whitespace-nowrap">
        {navItem.name}
      </span>
    </Link>
  );
};

// Mobile Nav component
export const MobileNav = ({ navItems, logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-gray-200  lg:hidden">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={60}
            className="w-[80px] sm:w-[100px] xl:w-[120px] h-auto"
          />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-600 font-semibold rounded-lg lg:hidden hover:text-primary dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {menuOpen && (
          <div className="w-full mt-4 lg:hidden">
            <ul className="font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className={cn(
                      "block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white",
                      item.isActive
                        ? "text-red-600 font-semibold"
                        : "hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

