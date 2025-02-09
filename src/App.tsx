import { easeInOut, easeOut, motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import './App.css'
import React, { useEffect, useState } from 'react'
import { fetchCache, fetchCacheUser } from './components/githubFetch'
import Widget from './components/project'

const name = "Bims-sh";
export type Repo = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
}

const App: React.FC = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState<{ name: string; bio: string; avatar_url: string } | null>(null);

  useEffect(() => {
    const t = async () => {
      setRepos(await fetchCache(name));
      setUser(await fetchCacheUser(name)) 
    }
    t();
  }, []);

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
          <motion.div id='name'
          style={{}}
          className='flex justify-center w-[95%] h-full text-[8vh] font-black rounded-xs overflow-x-clip text-zinc-900'>
            {user?.name}
          </motion.div>
        </div>
        <div
        className='flex justify-center w-full h-2/15'>
          <motion.div id='detail'
          style={{}}
          className='flex justify-between w-[90%] max-w-[700px] h-full'>
            <div id='profile'
            className='hidden sm:flex bg-zinc-200/20 backdrop-blur-lg mx-1 aspect-square rounded-xs overflow-clip'>
              <img src={user?.avatar_url}></img>
            </div>
            <div id='stats'
            className='flex bg-zinc-300/20 backdrop-blur-lg mx-1 w-full h-full rounded-xs'>
              
            </div>
          </motion.div>
        </div>
        <div
        className='flex justify-center w-full h-12/15 p-[5%]'>
          <motion.div id='showcase'
          style={{}}
          className='flex-col bg-slate-200/20 backdrop-blur-lg w-full h-[200vh] rounded-xs'>
            {
              repos.map((repo: Repo) => (
                <motion.div className='flex items-center bg-slate-300/10 backdrop-blur-lg w-98/100 h-1/20 rounded-xs m-1'>
                  <Widget key={repo.id} rep={repo} nam={name}/>
                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
