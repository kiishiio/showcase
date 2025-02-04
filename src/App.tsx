import { easeInOut, easeOut, motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import './App.css'
import React, { useEffect, useState } from 'react'
import { fetchRepos, fetchRepoContents, getCachedRepos } from './components/githubFetch'

const name = "kiishiio";

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const springConfig = {
    stiffness: 50,
    damping: 20,
  };

  const nameY = useSpring(useTransform(scrollY, [0, .1], ["0%", "20%"], { ease: easeOut}), springConfig);
  const nameS = useSpring(useTransform(scrollY, [0, .1], [1, 1.3], { ease: easeOut}), springConfig);
  const nameW = useSpring(useTransform(scrollY, [0, .1], [600, 900], { ease: easeOut}), springConfig);
  const nameO = useSpring(useTransform(scrollY, [0, .1], [1, .5], { ease: easeOut}), springConfig);

  const infoY = useSpring(useTransform(scrollY, [0, .1], ["0%", "-40%"], { ease: easeOut}), springConfig);
  const infoS = useSpring(useTransform(scrollY, [0, .1], [1, 0.9], { ease: easeOut}), springConfig);

  return (
    <div className="flex justify-center w-dvw h-[200vh] bg-[#F0F8FF]">
      <div
      className='fixed flex-col w-[90vw] max-w-[800px] h-dvh'>
        <div
        className='flex justify-center w-full h-1/15'>
          <motion.div id=''
          style={{}}
          className='flex justify-center w-[95%] h-full text-[8vh] font-black rounded-xs overflow-x-clip text-zinc-900'>
            {name}
          </motion.div>
        </div>
        <div
        className='flex justify-center w-full h-2/15'>
          <motion.div id=''
          style={{}}
          className='flex justify-between w-[90%] max-w-[700px] h-full'>
            <div id='profile'
            className='hidden sm:flex bg-zinc-200/20 backdrop-blur-lg mx-1 aspect-square rounded-xs'>
              
            </div>
            <div id='stats'
            className='flex bg-zinc-300/20 backdrop-blur-lg mx-1 w-full h-full rounded-xs'>
              
            </div>
          </motion.div>
        </div>
        <div
        className='flex justify-center w-full h-12/15 p-[5%]'>
          <motion.div id=''
          style={{}}
          className='flex bg-slate-200/20 backdrop-blur-lg w-full h-full rounded-xs'>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
