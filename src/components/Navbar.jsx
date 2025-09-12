"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Button } from "@/components/button";

function Navbar ({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at top of page
      if (currentScrollY === 0) {
        setIsVisible(true);
        prevScrollY.current = currentScrollY;
        return;
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > prevScrollY.current && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY.current && !isVisible) {
        setIsVisible(true);
      }
      
      prevScrollY.current = currentScrollY;
    };

    // Close menu when scrolling
    const handleScrollCloseMenu = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollCloseMenu);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollCloseMenu);
    };
  }, [isVisible, isOpen]);


  return (
    <motion.header
      ref={navRef}
      className="w-full h-fit sticky flex items-center justify-between p-6 lg:px-20 lg:py-12 top-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -200 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div className="w-full h-fit flex justify-between items-center backdrop-blur-md p-2 lg:p-4 border rounded-lg lg:rounded-3xl ">
        {/* Logo */}
        <div className="w-fit h-fit " >
          <svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0685 15.22C9.28185 15.22 8.56852 15.04 7.92852 14.68C7.30185 14.32 6.80852 13.8267 6.44852 13.2C6.08852 12.5733 5.90852 11.8533 5.90852 11.04V4.6C5.90852 4.36 5.84852 4.14 5.72852 3.94C5.60852 3.74 5.44852 3.58 5.24852 3.46C5.04852 3.34 4.82852 3.28 4.58852 3.28C4.34852 3.28 4.12852 3.34 3.92852 3.46C3.74185 3.58 3.58852 3.74 3.46852 3.94C3.34852 4.14 3.28852 4.36 3.28852 4.6V15H0.428516V4.94C0.428516 4.16667 0.601849 3.46667 0.948516 2.84C1.29518 2.21333 1.78185 1.71333 2.40852 1.34C3.03518 0.953333 3.76185 0.76 4.58852 0.76C5.42852 0.76 6.16185 0.953333 6.78852 1.34C7.41518 1.71333 7.90185 2.21333 8.24852 2.84C8.59518 3.46667 8.76852 4.16667 8.76852 4.94V11.38C8.76852 11.62 8.82852 11.84 8.94852 12.04C9.06852 12.24 9.22185 12.4 9.40852 12.52C9.60852 12.64 9.82852 12.7 10.0685 12.7C10.3085 12.7 10.5285 12.64 10.7285 12.52C10.9285 12.4 11.0885 12.24 11.2085 12.04C11.3285 11.84 11.3885 11.62 11.3885 11.38V4.94C11.3885 4.16667 11.5618 3.46667 11.9085 2.84C12.2552 2.21333 12.7418 1.71333 13.3685 1.34C14.0085 0.953333 14.7418 0.76 15.5685 0.76C16.4085 0.76 17.1352 0.953333 17.7485 1.34C18.3752 1.71333 18.8619 2.21333 19.2085 2.84C19.5552 3.46667 19.7285 4.16667 19.7285 4.94V15H16.8685V4.6C16.8685 4.36 16.8085 4.14 16.6885 3.94C16.5819 3.74 16.4285 3.58 16.2285 3.46C16.0285 3.34 15.8085 3.28 15.5685 3.28C15.3285 3.28 15.1085 3.34 14.9085 3.46C14.7085 3.58 14.5485 3.74 14.4285 3.94C14.3085 4.14 14.2485 4.36 14.2485 4.6V11.04C14.2485 11.8533 14.0618 12.5733 13.6885 13.2C13.3285 13.8267 12.8352 14.32 12.2085 14.68C11.5819 15.04 10.8685 15.22 10.0685 15.22ZM28.8677 15.26C27.7477 15.26 26.7344 15.0733 25.8277 14.7C24.9344 14.3133 24.1677 13.7867 23.5277 13.12C22.8877 12.4533 22.3944 11.68 22.0477 10.8C21.7011 9.92 21.5277 8.98 21.5277 7.98C21.5277 6.98 21.7011 6.04667 22.0477 5.18C22.3944 4.3 22.8877 3.52667 23.5277 2.86C24.1677 2.19333 24.9344 1.67333 25.8277 1.3C26.7344 0.926665 27.7477 0.739999 28.8677 0.739999C29.9877 0.739999 30.9944 0.926665 31.8877 1.3C32.7944 1.67333 33.5677 2.19333 34.2077 2.86C34.8477 3.52667 35.3411 4.3 35.6877 5.18C36.0344 6.04667 36.2077 6.98 36.2077 7.98C36.2077 8.98 36.0344 9.92 35.6877 10.8C35.3411 11.68 34.8477 12.4533 34.2077 13.12C33.5677 13.7867 32.7944 14.3133 31.8877 14.7C30.9944 15.0733 29.9877 15.26 28.8677 15.26ZM28.8677 12.72C29.5077 12.72 30.1011 12.6067 30.6477 12.38C31.1944 12.14 31.6677 11.8067 32.0677 11.38C32.4811 10.94 32.7944 10.4333 33.0077 9.86C33.2344 9.28667 33.3477 8.66 33.3477 7.98C33.3477 7.3 33.2344 6.67333 33.0077 6.1C32.7944 5.52667 32.4811 5.02667 32.0677 4.6C31.6677 4.17333 31.1944 3.84667 30.6477 3.62C30.1011 3.38 29.5077 3.26 28.8677 3.26C28.2277 3.26 27.6344 3.38 27.0877 3.62C26.5411 3.84667 26.0611 4.17333 25.6477 4.6C25.2477 5.02667 24.9344 5.52667 24.7077 6.1C24.4944 6.67333 24.3877 7.3 24.3877 7.98C24.3877 8.66 24.4944 9.28667 24.7077 9.86C24.9344 10.4333 25.2477 10.94 25.6477 11.38C26.0611 11.8067 26.5411 12.14 27.0877 12.38C27.6344 12.6067 28.2277 12.72 28.8677 12.72ZM41.7866 15C41.0133 15 40.3066 14.8133 39.6666 14.44C39.04 14.0667 38.54 13.5667 38.1666 12.94C37.7933 12.3 37.6066 11.5933 37.6066 10.82C37.6066 10.26 37.7266 9.73333 37.9666 9.24C38.2066 8.74667 38.5333 8.31333 38.9466 7.94C38.5333 7.56667 38.2066 7.13333 37.9666 6.64C37.7266 6.14667 37.6066 5.62667 37.6066 5.08C37.6066 4.32 37.7866 3.63333 38.1466 3.02C38.52 2.40667 39.0133 1.92 39.6266 1.56C40.2533 1.18667 40.94 0.999999 41.6866 0.999999H47.4466V3.52H42.0066C41.7266 3.52 41.4666 3.59333 41.2266 3.74C41 3.87333 40.8133 4.06 40.6666 4.3C40.5333 4.52667 40.4666 4.78667 40.4666 5.08C40.4666 5.36 40.5333 5.62 40.6666 5.86C40.8133 6.08667 41 6.27333 41.2266 6.42C41.4666 6.55333 41.7266 6.62 42.0066 6.62H46.7666V9.14H42.1266C41.82 9.14 41.54 9.22 41.2866 9.38C41.0333 9.52667 40.8333 9.72667 40.6866 9.98C40.54 10.2333 40.4666 10.5133 40.4666 10.82C40.4666 11.1267 40.54 11.4067 40.6866 11.66C40.8333 11.9133 41.0333 12.1133 41.2866 12.26C41.54 12.4067 41.82 12.48 42.1266 12.48H47.4466V15H41.7866ZM49.632 15V12.48H55.632C55.9253 12.48 56.192 12.4067 56.432 12.26C56.672 12.1133 56.8653 11.92 57.012 11.68C57.1586 11.4267 57.232 11.1533 57.232 10.86C57.232 10.5533 57.1586 10.28 57.012 10.04C56.8653 9.78667 56.672 9.58667 56.432 9.44C56.192 9.29333 55.9253 9.22 55.632 9.22H53.292C52.5053 9.22 51.792 9.06 51.152 8.74C50.512 8.42 49.9986 7.96 49.612 7.36C49.2386 6.74667 49.052 6.01333 49.052 5.16C49.052 4.32 49.232 3.59333 49.592 2.98C49.952 2.35333 50.4386 1.86667 51.052 1.52C51.6653 1.17333 52.3453 0.999999 53.092 0.999999H59.172V3.52H53.372C53.1053 3.52 52.8586 3.59333 52.632 3.74C52.4053 3.87333 52.2253 4.05333 52.092 4.28C51.972 4.50667 51.912 4.76 51.912 5.04C51.912 5.32 51.972 5.57333 52.092 5.8C52.2253 6.02667 52.4053 6.20667 52.632 6.34C52.8586 6.47333 53.1053 6.54 53.372 6.54H55.792C56.6586 6.54 57.412 6.70667 58.052 7.04C58.692 7.37333 59.1853 7.84 59.532 8.44C59.892 9.04 60.072 9.74 60.072 10.54C60.072 11.4867 59.8853 12.2933 59.512 12.96C59.152 13.6267 58.6586 14.1333 58.032 14.48C57.4186 14.8267 56.7386 15 55.992 15H49.632Z" fill="white"/>
          </svg>
        </div>
        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:block ">
          <ul className="flex flex-row-reverse gap-6 ">
            {menuItems.map((item) => (
              <li key={item.id} className="flex gap-4 items-center">
                <Button>
                  <a href={item.href}>
                    {item.name}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden "
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <HiX color="white" className="h-6 w-6 " />
            ) : (
              <HiOutlineMenuAlt3 color="white" className="h-6 w-6" />
            )}
          </motion.div>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-fit md:hidden absolute left-0 p-6 bg-[#041728] border rounded-lg shadow-lg overflow-hidden"
            style={{ top: "100%" }}
          >
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="w-full h-fit flex flex-col gap-6 "
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                > 
                  <a
                    href={item.href}
                    className="w-full h-fit px-6 py-3 rounded-lg border text-opacity-100 font-semibold base bg-transparent hover:bg-white hover:text-black transition-colors block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function PageMap ({ menuItems }) {
  return (
    <>
      {menuItems.map((item) => (
        <a key={item.id} href={item.href} className="w-fit text-base text-white font-light underline underline-offset-4 ">
          {item.name}
        </a>
      ))}
    </>
  )
}

export {Navbar, PageMap}