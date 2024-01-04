"use client";
// Importing necessary modules
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

// Motion variants for container and item animations
const containerVariants = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.8,
			staggerChildren: 0.5,
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

// Functional component Features
const Features = () => {
	return (
		// Main container with motion animation
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			variants={containerVariants}
			className="w-full h-screen flex pb-10"
		>
			{/* First feature section */}
			<motion.div
				variants={itemVariants}
				className="w-1/3 h-full bg-[#151623] flex flex-col justify-between py-10 px-14"
			>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.3 }}
					variants={containerVariants}
					className="text"
				>
					{/* Sub-section with motion animation */}
					<motion.h2
						variants={itemVariants}
						className="text-white  text-4xl font-bold"
					>
						Flexible
					</motion.h2>
					<motion.h2
						variants={itemVariants}
						className="text-white font-bold text-5xl"
					>
						Services
					</motion.h2>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={containerVariants}
					className="bottomText space-y-3"
				>
					{/* Sub-section with motion animation */}
					<motion.p
						variants={itemVariants}
						className="text-white font-semibold"
					>
						Smart solutions for all your charter requirements
					</motion.p>
					<Button className="rounded-3xl border border-white">
						All Solutions
					</Button>
				</motion.div>
			</motion.div>

			{/* Second feature section with motion animation */}
			<motion.div
				variants={itemVariants}
				className="w-1/3 h-full relative"
			>
				<div className="absolute inset-0">
					<Image src={"/bg3.jpg"} alt="hello" fill />
				</div>
				<div className="relative z-10 h-full w-full px-14">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.9 }}
						variants={containerVariants}
						className="down w-full h-1/3 flex justify-center flex-col"
					>
						{/* Sub-section with motion animation */}
						<motion.h2
							variants={itemVariants}
							className="text-white text-5xl font-bold"
						>
							On-Demand
						</motion.h2>
						<motion.p
							variants={itemVariants}
							className="font-mono text-white font-extrabold text-lg"
						>
							Book your Aircraft. Customize all of your Journey
						</motion.p>
					</motion.div>
					<div className="boxUp w-full h-2/3 "></div>
				</div>
			</motion.div>

			{/* Third feature section with motion animation */}
			<motion.div
				variants={itemVariants}
				className="w-1/3 h-full bg-[#bc7155]"
			></motion.div>
		</motion.div>
	);
};

// Exporting the Features component
export default Features;
