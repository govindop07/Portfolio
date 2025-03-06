import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'

const ExperienceMain = () => {
    return (
        <div id="experience" className="max-w-[1200px] mx-auto flex flex-col gap-16">

        <motion.div
                variants={fadeIn("down", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                >
                <ExperienceText />
        </motion.div>
        
        <div className="flex xl:flex-row flex-col items-center justify-around gap-10">
            <AllExperiences />

            <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                >
                    <img src="images/experience_gif.gif" alt="my experience" className="rounded-4xl h-60 lg:h-[30rem] w-[30rem] bg-transparent"/>
            </motion.div>

        </div>

        </div>
    );
};

export default ExperienceMain;