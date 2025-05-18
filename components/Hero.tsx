import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoMail } from "react-icons/io5";
import Photo from "./Photo";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const socialMedia = [
  {
    id: 1,
    img: <IoLogoGithub size={30} />, // Increased icon size
    link: "https://github.com/Souvik-Rana"
  },
  {
    id: 2,
    img: <IoLogoLinkedin size={30} />, // Increased icon size
    link: "https://www.linkedin.com/in/souvik-rana-sr17"
  },
  {
    id: 3,
    img: <IoLogoInstagram size={30} />, // Increased icon size
    link: "https://instagram.com/souvikrana17"
  },
  {
    id: 4,
    img: <IoMail size={30} />, // Increased icon size
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rana.souvik17@gmail.com&su=Hire%20Me&body=Hi%20Souvik,%20I%20would%20like%20to%20discuss%20a%20potential%20project."
  }
];

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* UI: grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center relative my-20 z-10 mx-auto max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] gap-16 bg-transparent">
        <div className="flex flex-col items-start justify-center max-w-[60%]">
          <p className="uppercase tracking-widest text-base md:text-lg lg:text-xl text-blue-100">
            Software Engineer
          </p>
          <TextGenerateEffect
            words="Hello, I'm Souvik Rana"
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
          />
          <div className="flex flex-col items-start max-w-[80%]">
            <p className="text-left mb-8 text-xs md:text-sm lg:text-base leading-relaxed">
              My strength is in engineering elegant digital platforms, complemented by my proficiency in numerous programming languages and technologies.
            </p>

            <div className="flex items-center md:gap-6 gap-6">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-transform duration-300 hover:scale-110"
                >
                  {info.img}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-4 md:space-y-0 mt-8 md:mt-0">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/CV.pdf" download>
              <MagicButton
                title="Download CV"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
        </div>

        <div className="max-w-[50%] flex justify-end">
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
