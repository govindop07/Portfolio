import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'
import { BsCircle } from "react-icons/bs";

const HeroPic = () => {
    return (
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className=" h-full flex items-center justify-center "
        >
        <img
            src="images/me4.jpg"
            alt="Govind Upadhyay"
            className="w-[80%] md:w-full max-w-[350px] h-auto  rounded-full"
        />

        </motion.div>
    );
};

export default HeroPic;