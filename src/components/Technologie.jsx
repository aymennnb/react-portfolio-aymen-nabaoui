import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaJira } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiSonarqube } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { FaGitlab } from "react-icons/fa6";
import { FaJenkins } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { easeIn, motion } from "motion/react";

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

function Technologie() {
  return (
    <div className="border-b  border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div y
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill  className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-[#4479A1]"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-neutral-50"/>
            </motion.div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-[#E34F26]" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoCss3 className="text-7xl text-[#1572B6]" />
            </div> */}
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-[#F7DF1E]" />
            </div> */}
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className="text-7xl text-[#777BB4]" />
            </motion.div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-[#3776AB]" />
            </div> */}
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-[#7952B3]" />
            </motion.div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJira className="text-7xl text-[#0052CC]" />
            </div> */}
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFigma className="text-7xl text-[#A259FF]" />
            </div> */}
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSonarqube className="text-7xl text-[#4E9BCD]" />
            </div> */}
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrDocker className="text-7xl text-[#2496ED]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitlab className="text-7xl text-[#FC6D26]" />
            </motion.div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJenkins className="text-7xl text-[#D24939]" />
            </div> */}
        </motion.div>
    </div>
  )
}

export default Technologie;