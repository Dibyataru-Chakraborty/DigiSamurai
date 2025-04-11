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
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Extracted NavItem component for cleaner code

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
          `bg-white flex flex-wrap items-center justify-between fixed top-5 inset-x-4 sm:inset-x-8 lg:inset-x-16 px-4 py-3 z-[5000]
    max-w-screen border border-transparent backdrop-blur-sm
    rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
    transition-colors duration-300 font-[Jura]`,
          className
        )}
      >
        {/* Left Side: Logo */}
        {logo && (
          <div className="flex items-center justify-start space-x-1 mr-auto">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={70}
              className="bg-white rounded-l-lg h-full"
            />
          </div>
        )}

        {/* Right Side: All Navigation Items */}
        <div className="flex space-x-5 ml-auto">
          {navItems.map((navItem, index) => (
            <NavItem
              key={index}
              navItem={navItem}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              idx={index}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const NavItem = ({ navItem, setHoveredIndex, idx }) => {
  const pathname = usePathname();
  const isActive = pathname === navItem.link;

  return (
    <Link
      href={navItem.link}
      className={cn(
        "relative inline-flex justify-center items-center group rounded-full h-full w-full hover:text-red-600 transition-colors duration-200 font-[Jura]",
        isActive ? "text-red-600" : ""
      )}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <span className="block sm:hidden z-[5100]">{navItem.icon}</span>
      <span className="hidden text-md sm:block z-[5100] whitespace-nowrap">
        {navItem.name}
      </span>
    </Link>
  );
};
