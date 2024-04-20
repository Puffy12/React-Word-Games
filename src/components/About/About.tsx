import Footer from '../SideBar/footer'
import Sidebar from '../SideBar/sidebar'

function about() {
  return (
<div className='flex flex-col min-h-screen bg-gray-600'>
  <Sidebar />
  <div className='flex flex-col items-center justify-center flex-grow'>
    <h1 className="capitalize font-bold mt-4 px-4 text-3xl sm:text-4xl leading-[1.5] text-gray-300">
      About Me
    </h1>
    <div className='max-w-[35rem] text-center'>
      <h2 className="mt-4 px-4 text-2xl font-medium sm:text-4xl leading-[1.5] text-gray-300">
        <span className="font-bold">Hello, I'm Michael.</span> I'm a{" "}
        <span className="font-bold">Software-Engineer Student</span> with{" "} experience in{" "}
        <span className="font-bold">Web Development</span>. I also enjoy building{" "}
        <span className="italic">sites & apps</span>. Mainly using {" "}
        <span className="underline text-blue-400">React (Next.js)</span>.
      </h2>
      <a href={'/'} className='mb-10'>
        <button className="mt-10 justify-center gap-2 h-[3rem] w-[8rem] bg-blue-400 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-blue-500 active:scale-105">
          Home
        </button>
      </a>
    </div>
    <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></div>
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">About me</h2>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I decided to pursue my
        passion for programming. I gained over 5 years of experience in software
        engineering, with proficiency in JavaScript, Python, Java, and C++. My core stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Tailwind CSS. I am always eager to
        learn new technologies and stay updated on industry trends. I am currently seeking
        opportunities for a{" "}
        <span className="font-medium"> software engineering or web developer role</span>.
      </p>

      <p className="mb-3">
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