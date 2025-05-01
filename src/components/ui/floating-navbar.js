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
          `bg-white flex flex-wrap items-center justify-between fixed top-5 inset-x-4 sm:inset-x-8 lg:inset-x-16 px-3 py-2 z-[5000]
          max-w-screen border border-transparent backdrop-blur-sm
          rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
          transition-colors duration-300 font-[Jura]`,
          className
        )}
      >
        {/* Logo */}
        {logo && (
          <div className="flex items-center justify-start space-x-1 mr-auto ml-2 sm:ml-4 lg:ml-8 xl:ml-16">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={60}
              className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto"
            />
          </div>
        )}

        {/* Navigation Items */}
        <div className="flex flex-wrap justify-end max-w-full space-x-2 sm:space-x-4 lg:space-x-8 ml-auto mr-2 sm:mr-4 lg:mr-8 xl:mr-16">
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
    navItem.link === "/"
      ? pathname === "/"
      : pathname.startsWith(navItem.link);

  return (
    <Link
      href={navItem.link}
      className={cn(
        "relative inline-flex justify-center items-center group rounded-full transition-colors duration-200 font-[Jura] px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base",
        isActive ? "text-red-600 font-semibold" : "hover:text-primary",
        isLast &&
          "bg-red-200 text-red-800 font-semibold"
      )}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Icon for mobile */}
      <span className="block sm:hidden z-[5100]">{navItem.icon}</span>
      {/* Text for larger screens */}
      <span className="hidden sm:block z-[5100] whitespace-nowrap">
        {navItem.name}
      </span>
    </Link>
  );
};
