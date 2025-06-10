import { FaLocationArrow } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoMail } from "react-icons/io5";
import MagicButton from "./MagicButton";
import { SiKaggle } from "react-icons/si";


// Define social media icons
const socialMedia = [
  {
    id: 1,
    img: <IoLogoGithub size={30} />, // Increased icon size
    link: "https://github.com/Souvik-Rana",
  },
  {
    id: 2,
    img: <IoLogoLinkedin size={30} />, // Increased icon size
    link: "https://www.linkedin.com/in/souvik-rana-sr17",
  },
  {
    id: 3,
    img: <IoLogoInstagram size={30} />, // Increased icon size
    link: "https://instagram.com/souvikrana17",
  },
  {
  id: 4,
  img: <SiKaggle size={30} />, 
  link: "https://www.kaggle.com/souvikrana17"
  },
  {
    id: 5,
    img: <IoMail size={30} />, 
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rana.souvik17@gmail.com&su=Hire%20Me&body=Hi%20Souvik,%20I%20would%20like%20to%20discuss%20a%20potential%20project."
  }
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">


      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate <span className="text-blue1">your</span> digital
          presence to new heights?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rana.souvik17@gmail.com&su=Hire%20Me&body=Hi%20Souvik,%20I%20would%20like%20to%20discuss%20a%20potential%20project.">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © SOUVIK RANA
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center md:gap-6 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              {info.img}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
