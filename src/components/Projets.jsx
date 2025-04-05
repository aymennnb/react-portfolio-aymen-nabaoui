import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { FaGithub } from "react-icons/fa";

function Projets() {
    const { t } = useTranslation();
    const projects = t("Projects.items", { returnObjects: true });
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">{t("Projects.title")}</motion.h2>
        <div>
            {projects.map((project,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <img src={project.image} className="mb-6 rounded" width={150} height={150} alt={project.title} />
                    </motion.div>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((technologie,index)=>(
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{technologie}</span>
                        ))}
                        <a 
                        href={project.github.url} target="_blank" rel="noopener noreferrer"
                        className="my-4 flex items-center gap-2 text-white hover:text-gray-400 transition-colors duration-200">
                        <FaGithub className="text-xl" />
                        <span className="text-sm md:text-base">{project.github.message}</span>
                        </a>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projets