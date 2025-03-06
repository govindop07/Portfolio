import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'
import { BsCircle } from "react-icons/bs";

const HeroPic = () => {
    return (
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" h-full flex items-center justify-center "
        >
        <img
            src="images/me2.jpg"
            alt="Govind Upadhyay"
            className="w-[80%] md:w-full max-w-[350px] h-auto  rounded-full"
        />

        {/* <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
            <BsCircle className="h-[50%] min-h-[20rem] sm:min-h-[25rem] w-auto text-green-400 blur-md" />
        </div> */}
        </motion.div>
    );
};

export default HeroPic;