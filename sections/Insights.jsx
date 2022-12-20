"use client";

import styles from "../styles";

import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { NewFeatures, ExploreCard, StartSteps, TitleText, TypingText, InsightCard } from "../components";
import { insights, newFeatures } from "../constants";
import { motion } from "framer-motion";
const Insights = () => (
	<section className={`${styles.paddings} relative flex-1 z-10`}>
		<motion.div
			variants={fadeIn("left", "tween", 0.2, 1)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: "false", amount: 0.5 }}
			className={`${styles.innerWidth} mx-auto flex flex-col  `}
		>
			<TypingText title="| Insight" textStyles="text-center" />

			<TitleText title={<> Insight about metaverse</>} textStyles="text-center"></TitleText>

			<div className="mt-[50px] flex flex-col gap-[30px]">
				{insights.map((insight, index) => (
					<InsightCard key={`item ${index}`} {...insight} index={index + 1} />
				))}
			</div>
		</motion.div>
	</section>
);
export default Insights;
