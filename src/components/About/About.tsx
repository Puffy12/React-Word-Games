import React from 'react'
import Footer from '../SideBar/footer'

function about() {
  return (
    <>
    <div className='mb-28 max-w-[50rem] text-center'>
    <h1
        className=" mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        >

        <span className="font-bold">Hello, I&apos;m Michael.</span> I&apos;m a{" "}
        <span className="font-bold">Software-Engineer Student</span> with{" "} experience in
        <span className="font-bold"> Web Development</span>. I also enjoy
        building <span className="italic">sites & apps</span>. Mainly using {" "}
        <span className="underline">React (Next.js)</span>.

        
    </h1>
    <a href={'/'} >    
        <button 
            className="mt-10 justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
            Home
        </button>
    </a>
    </div>
    <Footer/>
    </>
  )
}

export default about