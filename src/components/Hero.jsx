import { motion } from "motion/react"
import PhotoProfile from "/assets/PhotoAym.png"
import { useTranslation } from "react-i18next";

const container = (delay) => ({
  hidden:{
    x:-100,
    opacity:0
  },
  visible:{
    x:0,opacity:1,
    transition:{duration:0.5,delay:delay}
  }
});

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)} 
                    initial="hidden" 
                    animate="visible" 
                    className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">{t('hero.name')}</motion.h1>
                    <motion.span 
                    variants={container(0.3)} 
                    initial="hidden" 
                    animate="visible" 
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">{t('hero.position')}</motion.span>
                    <motion.p 
                    variants={container(0.6)} 
                    initial="hidden" 
                    animate="visible" 
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">{t('hero.description')}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-0">
              <div className="flex justify-center">
                <motion.img 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  src={PhotoProfile}
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm h-auto rounded-2xl shadow-lg object-cover" 
                  alt="Nabaoui Aymen" 
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero