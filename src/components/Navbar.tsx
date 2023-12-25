"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegRegistered } from "react-icons/fa";
import { ModeToggle } from "./resuseable/DarkBtn";
import { SheetOp } from "./resuseable/Sheet";
import { Button } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  return (
    <div className="flex flex-col px-10 justify-between items-center max-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h-fit w-full flex self-center items-center"
      >
        <motion.div
          variants={itemVariants}
          className="bigTextBox hidden items-center md:block h-fit w-0 md:w-[60%] lg:flex gap-7"
        >
          <h1 className="font-bold text-[18rem] relative top-[-45px] bg-gradient-to-t from-gray-900 to-blue-500 bg-clip-text text-transparent">
            Hyer
          </h1>
          <FaRegRegistered className="mb-[200px] h-10 w-10" />
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="bigTextBox h-fit w-full md:w-[40%] flex flex-col"
        >
          <motion.div
            variants={itemVariants}
            className="innerBox items-center mb-5 pb-[40px] flex h-full w-full rounded-lg justify-end md:justify-between"
          >
            <div className="hidden md:block lg:flex justify-evenly space-x-3">
              {[
                { href: "/sign-in", label: "Solutions" },
                { href: "/sign-in", label: "about us" },
                { href: "/sign-in", label: "contact" },
              ].map((link, index) => (
                <Button key={index} size={"lg"} variant="link" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </div>
            <div className="w-auto gap-3 space-y-2 md:space-y-0 flex flex-col md:flex-row items-center justify-evenly">
              <ModeToggle />
              <SheetOp />
            </div>
          </motion.div>
          <div className="flex gap-2 flex-row md:flex-col w-full text-5xl py-3 px-8">
            <p className="bg-gradient-to-t from-gray-500 to-blue-500 bg-clip-text text-transparent">
              Personalised
            </p>
            <p className="">Aviation</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-28 w-full flex items-center justify-between pb-5"
      >
        <motion.div variants={itemVariants} className="text-lg font-light">
          More Flexibility, Freedom and Choice!
        </motion.div>
        <motion.div variants={itemVariants} className="box2 flex gap-4">
          <Button variant={"default"}>Book an Aircraft</Button>
          <Button variant={"default"}>Book a shared Flight</Button>
        </motion.div>
      </motion.div>

      <div className="w-full border-b-2"></div>
    </div>
  );
};

export default Navbar;
