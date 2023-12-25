"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { y: 20, opacity: 1, scale: 0 },
  visible: {
    y: 0,
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

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={containerVariants}
      className="h-full w-full mt-10 px-10 pb-20 flex"
    >
      <div className="w-[40%] h-full"></div>

      <div className="w-[60%] h-fit flex flex-col">
        <div className="text-[3.5rem] mb-20 h-full w-full items-center flex justify-start">
          <div className="-space-y-4 px-6 w-fit h-fit flex flex-col">
            {[
              "We believe that in a world",
              "where passengers have",
              "become numbers, a",
              "personal approach is key",
              "to ensure you get the",
              "most out of your flying",
              "experience.",
            ].map((text, index) => (
              <p key={index} className="w-fit">
                {text}
              </p>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          className="flex items-center justify-around h-full w-fit"
        >
          <div className=" space-y-3">
            {[
              {
                title: "Flexible Solutions",
                description:
                  "Stop depending on airlines. Fly on your own terms or join our exclusive shared flights.",
              },
              {
                title: "Smart Quotes",
                description:
                  "Know what you are paying for. No hidden fees. No overpromises. Flights suitable for your needs.",
              },
            ].map((item, index) => (
              <div key={index} className="bix1 w-4/5 py-2 gap-4 h-[140px] mx-4">
                <motion.div
                  variants={itemVariants}
                  className="box h-fit border-t-2 border-gray-600 flex flex-col justify-around"
                >
                  <h3 className="font-semibold text-xl py-5">{item.title}</h3>
                  <p className="font-thin text-sm text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Fully Customizable",
                description:
                  "Control all aspects of your journey. Easily upgrade services with our add-ons.",
              },
              {
                title: "Personalization",
                description:
                  "Receive full support of our Flight Management service. We have you covered, anywhere.",
              },
            ].map((item, index) => (
              <div key={index} className="bix1 w-4/5 py-2 gap-4 h-[140px] mx-4">
                <motion.div
                  variants={itemVariants}
                  className="box h-fit border-t-2  border-gray-600 flex flex-col justify-around"
                >
                  <h3 className="font-semibold text-xl py-5">{item.title}</h3>
                  <p className="font-mono text-sm text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
