"use client";

import styles from "../styles";

import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import { newFeatures } from "../constants";
import { motion } from "framer-motion";
const World = () => (
	<section className={`${styles.paddings} relative flex-1 z-10`}>
		<motion.div variants={staggerContainer} initial="hidden" whileInView={"show"} viewport={{ once: "false", amount: 0.5 }} className={`${styles.innerWidth} mx-auto flex flex-col  `}>
			<TypingText title="| People on the wowlrd" textStyles="text-center" />

			<TitleText title={<> Track Friend and Nigga</>} textStyles="text-center"></TitleText>
			<motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="relative  mt-[68px] flex w-full h-[550px]">
				<img src="/map.png" alt="world map" className="w-full h-full object-contain" />
				<div className="absolute bottom-20 right-40 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
					<img src="/people-01.png" alt="People" className="w-full h-full" />
				</div>
				<div className="absolute left-40 top-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
					<img src="/people-02.png" alt="People" className="w-full h-full" />
				</div>
				<div className="absolute left-[45%] top-1/2 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
					<img src="/people-03.png" alt="People" className="w-full h-full" />
				</div>
			</motion.div>
		</motion.div>
	</section>
);

export default World;
