import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex-col w-screen h-screen">
      <div id='nameInfo' className='bg-zinc-300 flex-col w-screen h-1/3 justify-center'>
        <div id='name' className='flex-auto text-7xl w-full h-1/2 text-center content-end'>
          NAME
        </div>
        <div id='info' className='flex-auto w-full h-1/2 justify-center content-center text-center'>
          add scrollable transform here, w motion
        </div>
      </div>
      <div id='projectDetail' className='bg-zinc-400 flex w-screen h-2/3 justify-center'>
      </div>
    </div>
  )
}

export default App
