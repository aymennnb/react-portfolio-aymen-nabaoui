import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
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
import { useTranslation } from "react-i18next";
import { FaWordpress } from "react-icons/fa";
import FigmaIcon from "./icons/FigmaIcon";
import FramerIcon from "./icons/FramerIcon";
import PythonIcon from "./icons/PythonIcon ";
import { SiJira } from "react-icons/si";
import Nodejs from "./icons/Nodejs";
import AngularIcon from "./icons/AngularIcon"
import ReduxIcon from "./icons/ReduxIcon"

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
    const { t } = useTranslation();
  return (
    <div className="border-b  border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">{t('technologies.title')}</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            title="MongoDB"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            title="React.js"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            title="Tailwind CSS"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill  className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            title="Laravel"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            title="Mysql"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-[#4479A1]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            title="Angular"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <AngularIcon className="text-7xl" />
            </motion.div>
            <motion.div
            variants={iconVariants(2.3)}
            initial="initial"
            animate="animate" 
            title="Python"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <PythonIcon/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            title="GitHub"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-neutral-50"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            title="Wordpress" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaWordpress  className="text-7xl text-[#21759b]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            title="HTML5"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-[#E34F26]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" 
            title="CSS3"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoCss3 className="text-7xl text-[#1572B6]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            title="JavaScript"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-[#F7DF1E]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            title="PHP"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className="text-7xl text-[#777BB4]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            title="Jira"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJira className="text-7xl text-[#0052CC]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            title="Redux.js"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <ReduxIcon className="text-7xl" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            title="Bootstrap"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-[#7952B3]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            title="Sonarqube"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSonarqube className="text-7xl text-[#4E9BCD]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            title="Node.js"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <Nodejs className="text-7xl" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            title="Docker"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrDocker className="text-7xl text-[#2496ED]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            title="GitLab"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitlab className="text-7xl text-[#FC6D26]" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            title="Figma"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FigmaIcon />        
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            title="Framer motion"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FramerIcon/>     
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologie;