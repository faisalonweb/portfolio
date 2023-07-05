"use client";

import React from "react";
import Links from "./Links";
import { NavLinks } from "../app/constants/item";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, Variants } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/app/utils/motion";
import { useEffect, useRef } from "react";

interface Bol {
  drop: any;
  setDrop: any;
}

export default function DropMenu({ drop, setDrop }: Bol) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed bg-white top-5 right-5 left-5 rounded-3xl shadow-2xl shadow-slate-600 z-50 "
      onClick={() => setDrop(false)}
    >
      <nav className="flex flex-col">
        <ul className="min-h-[40rem] rounded-3xl lg:min-h-[30rem] h-[100%] flex flex-wrap lg:flex-nowrap uppercase text-center text-[1.7rem]">
          {NavLinks.map((item) => (
            <Links name={item.name} path={item.path} last={item.last} />
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
