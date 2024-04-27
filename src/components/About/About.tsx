import Footer from '../SideBar/footer'
import Sidebar from '../SideBar/sidebar'
import { BsArrowRight } from "react-icons/bs";
import { FaArrowCircleDown } from 'react-icons/fa';
import SubmitBtn from './submit-btn';
//import toast from 'react-hot-toast';
//import { sendEmail } from './sendEmail';

function about() {
  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
    <div className="text-white w-14 h-14 text-5xl cursor-pointer z-10 mb-10" onClick={() => scrollToElement("event")}>
      <FaArrowCircleDown />
    </div>
    <div className="min-h-screen flex flex-col lg:flex-row items-center p-8 sm:p-16 md:p-24 justify-center" id='event'>
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
                      <img
                        src="/portfolio.png"
                        alt="Description of the image"
                        className="w-full rounded-lg h-1/2"
                      />
                      
                      <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-blue-900 -ml-2 -mt-2 rounded-lg"></div>

                      <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-blue-900 -mr-2 -mb-2 rounded-lg"></div>
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
                    My Personal Portfolio
                  </h2>
                  <p className="mt-4">
                    A new portfolio updated using the mostup to date and modern design standards and methods.
                  </p>
                  <p className="mt-4">
                    Here I post all of my projects and and showcase my skills of full stack web Development, you can find even more at&nbsp;
                    <a
                      className="group inline-block px-3 py-1 bg-black text-yellow rounded-full border border-black hover:border-gray-950 hover:scale-110 transition duration-300"
                      href="https://github.com/Puffy12"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      My GitHub
                    </a>
                    . &nbsp; Feel free to check out the best of my work at my porfolio linked down below. 
                  </p>
                  <p>
                    <a
                      href="https://michael-mehrdadi-personal-portfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 group bg-black text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    >
                      Personal Portfolio{" "}
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
  </div>

  <section className="max-w-[50rem] mb-20 sm:mb-32 w-[min(100%,38rem)] text-center mt-28 mx-auto">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Contact me
      </h2>

      <p className="text-gray-700 -mt-6 dark:text-white/80" style={{ textAlign: "center" }}>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:michaelmehrdadi123@gmail.com">
          michaelmehrdadi123@gmail.com
        </a>{" "} <br></br>
        or through this form.
      </p>

      <div
        style={{ cursor: "pointer", display: "flex", justifyContent: "center"}}
      >
        <div className="mt-6 flex justify-center mb-6 w-14 h-14 text-3xl cursor-pointer z-10 text-black dark:text-white">
          <FaArrowCircleDown />
        </div>
      </div>
      <form
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
      <div className="bg-blue-600 my-24 h-1  rounded-full  sm:block "></div>

    </section>
  <Footer />
</div>
  )
}

export default about

