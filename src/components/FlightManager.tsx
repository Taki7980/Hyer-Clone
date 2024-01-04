import Image from "next/image";
import React from "react";

const FlightManager = () => {
	return (
		<div className="h-screen w-full my-10 flex">
			<div className="innerbox1 w-1/2 h-full bg-[#0f0f1c] relative">
				<div className="absolute inset-0">
					<Image src={"/hand.png"} alt="hello" fill />
				</div>
			</div>
			<div className="innerbox1 w-1/2 h-full bg-[#151623] px-8 flex flex-col justify-between py-10">
				<div className="text-white text-6xl font-bold pt-5">Flight Manager</div>
				<div className="text-white font-semibold tracking-tight text-xl">
					All of our flights come with complimentary Flight Manager
					Service. Your dedicated Flight Manager ensures that every
					detail of your flight is taken care of and you get the most
					competitive tailor-made offers. Speak with your Flight
					Manager in English 🇬🇧, Dutch 🇳🇱, German 🇩🇪, Spanish 🇪🇸 or
					Portuguese 🇵🇹.{" "}
				</div>
			</div>
		</div>
	);
};

export default FlightManager;
