"use client";
import { FaRegRegistered } from "react-icons/fa";
import Link from "next/link";
import { SheetOp } from "./resuseable/Sheet";
import { ModeToggle } from "./resuseable/DarkBtn";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "./ui/button";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="h-[50vh] flex items-center mt-10 py-9 px-5"
    >
      <motion.div
        variants={item}
        className="bigTextBox hidden items-center md:block h-fit w-0 md:w-[60%] lg:flex gap-7"
      >
        <h1 className="font-bold text-[18rem] relative top-[-45px] bg-gradient-to-t from-gray-900 to-blue-500 bg-clip-text text-transparent">
          Hyer
        </h1>
        <FaRegRegistered className="mb-[200px] h-10 w-10" />
      </motion.div>
      <motion.div
        variants={container}
        className="bigTextBox h-fit w-full md:w-[40%] flex flex-col"
      >
        <motion.div
          variants={item}
          className="innerBox items-center mb-5 pb-[40px] flex h-full w-full pr-3 md:pr-10 rounded-lg justify-end md:justify-between"
        >
          <div className="w-[70%] hidden md:block  lg:flex  justify-evenly space-x-3">
            <Button size={"lg"} variant="link" asChild>
              <Link href="/sign-in">Solutions</Link>
            </Button>
            <Button size={"lg"} variant="link" asChild>
              <Link href="/sign-in">about us</Link>
            </Button>
            <Button size={"lg"} variant="link" asChild>
              <Link href="/sign-in">contact</Link>
            </Button>
          </div>
          <div className="w-auto md:w-[30%] space-y-2 md:space-y-0 flex flex-col md:flex-row items-center justify-evenly">
            <ModeToggle />
            <SheetOp />
          </div>
        </motion.div>
        <div className="flex gap-2 flex-row md:flex-col w-full text-5xl py-3 px-2">
          <p className="bg-gradient-to-t from-gray-500 to-blue-500 bg-clip-text text-transparent">
            Personalised
          </p>
          <p className="">Aviation</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
