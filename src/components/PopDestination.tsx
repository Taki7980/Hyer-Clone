"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../public/con1.jpg";
import img2 from "../../public/con2.jpg";
import img3 from "../../public/con3.jpg";

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
const images = [img1, img2, img3];

const PopDestination = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentIndex === images.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
		}, 10000);

		return () => clearInterval(intervalId);
	}, [currentIndex]);

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.3 }}
			variants={containerVariants}
			className="h-screen w-full px-10"
		>
			<div className="innerBox h-full w-full flex items-center justify-center">
				<motion.div
					variants={itemVariants}
					className="w-1/2 h-2/3 relative"
				>
					<div className="absolute inset-0">
						<Image
							src={images[currentIndex]}
							className="duration-500 rounded-br-[8rem]"
							alt="hello"
							fill
						/>
					</div>
				</motion.div>
				<div className="box2 h-2/3 w-1/2 mx-4 flex flex-col justify-between ">
					<div className="box1 w-full h-1/2 px-5 flex gap-4">
						<motion.div
							variants={itemVariants}
							className="w-1/2 flex justify-between flex-col h-full mb-4"
						>
							<div className="border-t-2 py-5 text-2xl">
								<span className="font-bold">Barcelona</span>
								(GRO)
							</div>
							<div className="w-full rounded-xl border-b-2 pb-2     ">
								<span className="text-xl px-1 py-4">spain</span>
							</div>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="w-1/2 flex justify-between flex-col h-full mb-4"
						>
							<div className="border-t-2 py-5 text-2xl">
								<span className="font-bold">Ibiza</span>
								(IBZ)
							</div>
							<div className="w-full rounded-xl border-b-2 pb-2     ">
								<span className="text-xl px-1 py-4">spain</span>
							</div>
						</motion.div>
					</div>
					<div className="box1 w-full h-1/2 px-5 flex gap-4">
						<motion.div
							variants={itemVariants}
							className="w-1/2 flex justify-between flex-col h-full mb-4"
						>
							<div className=" py-5 text-2xl">
								<span className="font-bold">Cannes</span>
								(CEQ)
							</div>
							<div className="w-full rounded-xl border-b-2 pb-2   ">
								<span className="text-xl px-1 py-4">
									France
								</span>
							</div>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="w-1/2 flex justify-between flex-col h-full mb-4"
						>
							<div className=" py-5 text-2xl">
								<span className="font-bold">Paris</span>
								(LBG)
							</div>
							<div className="w-full rounded-xl border-b-2 pb-2     ">
								<span className="text-xl px-1 py-4">
									France
								</span>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default PopDestination;
