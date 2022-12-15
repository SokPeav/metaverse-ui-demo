"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import styles from "../styles";
import { fadeIn,planetVariants, staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
const GetStarted = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: "false", amount: 0.5 }}
			className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8 `}
		>
			<motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>

        <img
        src="/get-started.png"
        alt="get Start"
        className="w-[90%] h-[90%] object-contain"
        />
        <motion.div>
          
        </motion.div>
      </motion.div>
		</motion.div>
	</section>
);

export default GetStarted;
