import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'

const SingleExperience = ({ experience }) => {
    return (
        <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-[240px] h-auto w-full rounded-2xl  p-4 gap-2 flex flex-col"
        >
        <p className="text-gray-400">{experience.date}</p>
        <p className="font-bold text-cyan text-2xl">{experience.job}</p>
        <p className="text-orange-400 text-md">{experience.company}</p>
        </motion.div>
    );
};

export default SingleExperience;