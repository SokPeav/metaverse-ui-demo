"use client";

import styles from "../styles";

import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { NewFeatures, ExploreCard, StartSteps, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";
import { motion } from "framer-motion";
const WhatsNew = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: "false", amount: 0.5 }}
			className={`${styles.innerWidth} mx-auto flex flex-col  lg:flex-row gap-8 `}
		>
			<motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="flex-[0.75] flex justify-center flex-col ">
				<TypingText title="| What's New" />
				<TitleText title={<>What's new with metaversus</>}></TitleText>
				<div className="mt-[48px] flex /* flex-wrap */  justify-between gap-[24px] ">
					{newFeatures.map((feature, index) => (
						<NewFeatures res key={feature.title} {...feature} />
					))}
				</div>
			</motion.div>
			<motion.div variants={planetVariants("right")} className={`flex-1 flex-row ${styles.flexCenter}`}>
				<img src="/whats-new.png" alt="What New" className="w-[90%] h-[90%] object-contain" />
			</motion.div>
		</motion.div>
	</section>
);

export default WhatsNew;
