import React, { useState, useEffect } from "react";
import {motion} from 'framer-motion';
import { fadeIn } from "../../framerMotion/varients";

const Textchange = () => {
    const [currText, setCurrText] = useState("I am a");
    const [endVal, setEndVal] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const texts = ["Competitive Programmer.", "FrontEnd Developer.", "BackEnd Developer."];
        
        const intervalId = setInterval(() => {
        if (isTyping) {

            setCurrText("I am a " + texts[index].substring(0, endVal));
            setEndVal((prev) => prev + 1); 
        } else {
            setCurrText("I am a " + texts[index].substring(0, endVal));
            setEndVal((prev) => prev - 1); 
        }

        if (endVal >= texts[index].length + 5) {
            setIsTyping(false);
        }

        if (endVal <= 0 && !isTyping) {
            setIsTyping(true);
            setIndex((prev) => (prev + 1) % texts.length); 
        }
        }, 100); 

        return () => clearInterval(intervalId);
    }, [endVal, isTyping, index]); 

    return (
        <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }} 
        className="textChange lg:text-2xl text-md font-semibold uppercase text-green-300">
        {currText}
        </motion.div>
    );
};

export default Textchange;