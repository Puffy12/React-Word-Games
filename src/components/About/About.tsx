import Footer from '../SideBar/footer'
import Sidebar from '../SideBar/sidebar'
import { BsArrowRight } from "react-icons/bs";


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

    </section>
    <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></div>

    <div className="min-h-screen flex flex-col lg:flex-row items-center p-8 sm:p-16 md:p-24 justify-center">
      {/* Event Showcase  */}
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-white">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              {" "}
              {/* Image */}
              <div>
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full">
                      <div className="relative cursor-pointer hover:brightness-110">
                        
                      </div>
                      
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="p-2 bg-gray lg:flex-1">
              {" "}
              {/* Text */}
              <div>
                <div className="leading-relaxed">
                  <h2 className="leading-tight text-4xl font-bold">
                    Portfolio
                  </h2>
                  <p className="mt-4">
                    A new portfolio updated using the mostup to date and modern design standards and methods.
                  </p>
                  <p className="mt-4">
                    It will cost $16 to be an official student member
                    of IEEE. You can join by clicking the link&nbsp;
                    <a
                      className="group inline-block px-3 py-1 bg-black text-yellow rounded-full border border-black hover:border-gray-950 hover:scale-110 transition duration-300"
                      href="https://michael-mehrdadi-personal-portfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Here
                    </a>
                    . &nbsp; Once a member, be sure to visit our
                    events page for more information on upcoming
                    opportunities.
                  </p>
                  <p>
                    <a
                      href="/events"
                      className="mt-2 group bg-black text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    >
                      Explore Events{" "}
                      <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div className="bg-blue-600 my-24 h-1 w-1/2 rounded-full  sm:block "></div>

  </div>

  <Footer />
</div>
  )
}

export default about