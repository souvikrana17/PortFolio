import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/public/logo.png";
import MagicButton from "../MagicButton";
import { FaPaperPlane } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

export const FloatingNav = ({ navItems, className }: { navItems: { name: string; link: string; icon?: JSX.Element }[]; className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      if (previous !== undefined) {
        const direction = current - previous;
        if (scrollYProgress.get() < 0.05) {
          setVisible(true);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-0 inset-x-0 px-4 py-5 rounded-none shadow-none flex items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 10000,
        }}
      >
        <div className="flex items-center">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center cursor-pointer"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              className="mr-2 md:mr-4"
            />
            <h1 className="text-lg md:text-xl font-bold text-white">Souvik Rana</h1>
          </a>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                "text-sm"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-lg !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed top-0 right-0 bottom-0 w-3/4 md:w-1/2 bg-black bg-opacity-80 z-40 p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="text-white text-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navItem.icon} {navItem.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center -mt-12">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rana.souvik17@gmail.com&su=Hire%20Me&body=Hi%20Souvik,%20I%20would%20like%20to%20discuss%20a%20potential%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Hire Me"
              icon={<FaPaperPlane />}
              position="right"
            />
          </a>
        </div>
      </motion.div>

      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-5 right-5 z-50"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-600"
          >
            ↑
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
