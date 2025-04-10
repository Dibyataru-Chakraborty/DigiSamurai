"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LinkedinIcon from "@/assets/img/LinkedinIcon.png";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center justify-center text-center space-y-8 md:space-y-0 md:space-x-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div key={item.id + idx} className="flex flex-col items-center">
          <Link
            key={item.id + idx}
            href={item.link || "#"}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className=" bg-gray-300 rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-lg object-cover w-full h-auto"/>
            </Card>
          </Link>
          <div className="text-center mt-4" style={{ fontFamily: "Jura" }}>
            <CardTitle className="text-lg font-semibold">
              {item.title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              {item.description}
            </CardDescription>
            <Image
              src={LinkedinIcon}
              alt={item.title}
              width={20}
              height={20}
              className="mx-auto mt-1"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
        {children}
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-950 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-1 text-zinc-500 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
