import SingleExperience from "./SingleExperience";
import { FaLongArrowAltDown } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'


const experiences = [
  {
    job: "B.Tech",
    company: "GlA University",
    date: "2022-2026",
  },
  {
    job: "Intermediate",
    company: "SVM, Vrindavan",
    date: "2021-2022",
  },
  {
    job: "High School",
    company: "SVM, Vrindavan",
    date: "2019-2020",
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-col items-center justify-between border-2 rounded-4xl text-center lg:w-[30%] w-[19rem]">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("down", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;