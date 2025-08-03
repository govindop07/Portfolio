import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const SingleProject = ({ name, year, align, image, link, git }) => {
  return <div className={`flex w-full flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end`}>
    <div >

        <h2 className="md:text-3xl text-2xl text-orange ">{name}</h2>
        <h2 className={`text-xl font-thin text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}>
        {year}
        </h2>
        <a
        href={link}
        className={`text-lg flex gap-2 items-center text-green-400 hover:text-orange-400 transition-all duration-500 cursor-pointer justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
            >
        Live link <BsFillArrowUpRightCircleFill />
        </a>
        <a
        href={git}
        className={`text-lg flex gap-2 items-center text-green-400 hover:text-orange-400 transition-all duration-500 cursor-pointer justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
            >
        Github link <BsFillArrowUpRightCircleFill />
        </a>
    </div>
        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border">
            <a href={link} className="cursor-pointer">
            <div className="w-full h-full bg-green-300 opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block hidden cursor-pointer"></div>
                <img src={image} alt="website image" className="w-full h-full " />
            </a>
        </div>
    </div>
};

export default SingleProject;