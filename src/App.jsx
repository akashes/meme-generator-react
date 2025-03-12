import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {

  const[allMeme,setAllMeme] = useState([])

  const[meme,setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: ''
  })

  const fetchMemeImage=async(e)=>{
    e && e.preventDefault()
    const response = await fetch('https://api.imgflip.com/get_memes')
    const data = await response.json()
    setAllMeme(data.data.memes)
    // console.log(data.data.memes[    Math.floor(Math.random() * data.data.memes.length)    ].url)
    // setMeme(prev=>({
    //   ...prev,
    //   randomImage:data.data.memes[    Math.floor(Math.random() * data.data.memes.length)    ].url
    // }))
    setMeme(({
      ...meme,
      randomImage:data.data.memes[    Math.floor(Math.random() * data.data.memes.length)    ].url
    }))
  }

  useEffect(()=>{

    fetchMemeImage()
  },[])

  const getRandomMeme=(e)=>{
    e.preventDefault()
    setMeme(prev=>({
      ...prev,
      randomImage:allMeme[    Math.floor(Math.random() * allMeme.length)    ].url
    }))

  }

  return (
    <>
    <Header/>
    <div className='w-full mx-4'>
      <form action="" className='  px-16 py-4 gap-4 my-16 '>
      <div className='flex justify-center gap-4'>
      <div className='sm:min-w-[300px]   md:min-w-[400px]  lg:min-w-[500px]  '>
      <label htmlFor="topText" >
          Top Text
        </label> 
        <br />
          <input
          onChange={(e)=>setMeme({...meme,topText:e.target.value})}
          value={meme.topText}
          type="text" placeholder='One doest not simply' id='topText' />
      </div>

<div className='sm:min-w-[300px]  md:min-w-[400px]  lg:min-w-[500px] ' >
<label htmlFor="bottomText">
  Bottom Text
  <br />
        </label>
          <input
                    onChange={(e)=>setMeme({...meme,bottomText:e.target.value})}
                    value={meme.bottomText}

          type="text" placeholder='walk into Mordor' id='bottomText'/>
</div>
      </div>
<button
onClick={getRandomMeme}
// onClick={(e)=>fetchMemeImage(e)}
className=' w-full md:w-sm lg:w-1/2 mt-4 mx-auto block bg-pink-500 hover:bg-pink-700 text-white font-bold py-2  rounded' >GET A NEW MEME IMAGE</button>
      </form>
    </div>
    <div className="meme">
      <img className='meme-img' src={meme.randomImage} alt="" />
      <span className='top text-lg sm:text-xl md:text-2xl lg:text-5xl'>{meme.topText}</span>
      <span className='bottom text-lg sm:text-xl md:text-2xl lg:text-5xl'>{meme.bottomText}</span>
    </div>
    </>
  )
}

export default App
