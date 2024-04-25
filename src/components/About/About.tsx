import Footer from '../SideBar/footer'
import Sidebar from '../SideBar/sidebar'

function about() {
  return (
<div className='flex flex-col min-h-screen bg-gray-600 text-gray-300'>
  <Sidebar />
  <div className='flex flex-col items-center justify-center flex-grow'>
    <h1 className="capitalize font-bold mt-4 px-4 text-3xl sm:text-4xl leading-[1.5]">
      About Me
    </h1>
    <div className='max-w-[35rem] text-center'>
      <h2 className="mt-4 px-4 text-2xl font-medium sm:text-4xl leading-[1.5] ">
        <div>
        <span className="font-bold">Hello, I'm Michael Mehrdadi.</span> I'm am{" "}currently finishing up my
        <span className="font-bold"> Bachelors degrees at CSUS.</span> I have{" "} experience in{" "}
        <span className="font-bold">Web Development</span>. I also enjoy building{" "}
        <span className="italic">sites & apps</span>. Mainly using {" "}
        <span className="underline text-blue-400">React</span>.
      </div>
      </h2>
      <a href={'/'} className='mb-10'>
        <button className="mt-10 justify-center gap-2 h-[3rem] w-[8rem] bg-blue-400 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-blue-500 active:scale-105">
          Home
        </button>
      </a>
    </div>
    <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></div>
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">About the App</h2>
      <p className="mb-3">
        <span className="font-medium">Welcome to Vite Word Games,</span> your destination for an immersive and entertaining word gaming experience!{" "}
        <span className="font-medium">Our web application, powered by </span>
        <span className="font-medium">
          Vite, Vercel, React, and TypeScript, 
        </span>
        offers a diverse selection of captivating word games designed to challenge and entertain.{" "}
        Whether you're a seasoned word wizard or just looking for a fun way to pass the time, Vite Word Games has something for everyone.{" "}
        <span className="font-medium"> Join us as we continue to innovate and expand our collection of games, providing endless opportunities for wordplay and enjoyment. Get ready to dive in and let the games begin!</span>.
      </p>

      <p className="mb-8 ">
        <span className="italic">When I&apos;m not coding</span>, I enjoy traveling, going to the gym, and going on runs. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently learning {" "}
        <span className="font-medium">japanese and have been for 5 years</span>. I&apos;m also learning about Machine Learning/ AI.
      </p>
    </section>
    <div className="bg-blue-600 my-24 h-1 w-1/2 rounded-full  sm:block "></div>

  </div>

  <Footer />
</div>
  )
}

export default about