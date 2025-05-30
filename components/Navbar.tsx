"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";

const links = {
  leftLinks: [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ],
  rightLinks: [
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
  ],
};
const Navbar = () => {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathName === "/";
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mobileMenuOpen) {
      const scrollingUp = latest < prevScrollY;
      const shouldShow = scrollingUp || latest < 50;
      setIsVisible(shouldShow);

      if (latest > 50 && !hasScrolled) {
        setHasScrolled(true);
      } else if (latest < 50) {
        setHasScrolled(false);
      }
    }
    setPrevScrollY(latest);
  });

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };
  const navbarVariants = {
    initial: isHomePage
      ? {
          y: -100,
          opacity: 0,
        }
      : {
          y: 0,
          opacity: 1,
        },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: isHomePage && !hasScrolled ? 1.8 : 0,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.nav
        key="navbar"
        initial="initial"
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarVariants}
        className="fixed top-0 left-0 right-0 bg-[#4C061D] py-2.5 px-4 md:px-10  z-50 rounded-b-3xl sm:rounded-none  "
      >
        <div className="mx-auto flex justify-between items-center  rounded-full sm:px-10 py-1.5 sm:max-w-7xl ">
          <div className="hidden md:flex space-x-6">
            {links.leftLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  pathName === link.href ? "text-black" : "text-neutral-600 "
                } font-medium hover:text-white hover:bg-[#FEC86E] transition-colors duration-200 rounded-2xl px-4 py-2 `}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
          <Link href="/" className="flex items-center space-x-2 justify-center">
            <Image
              src="/assets/allies.svg"
              width={100}
              height={100}
              alt="logo"
              className="h-8 w-auto object-cover max-sm:h-6"
            />
          </Link>
          <button className="  text-[#4C061D] bg-white border border-gray-700 rounded-full px-4 py-1 font-semibold cursor-pointer  ">
            Create your birth plan
          </button>
          {/* Desktop Menu */}

          <div className="hidden md:flex space-x-6">
            {links.rightLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  pathName === link.href ? "text-black" : "text-neutral-600 "
                } font-medium hover:text-white hover:bg-[#FEC86E] transition-colors duration-200 rounded-2xl px-4 py-2 `}
              >
                {link.label}
              </Link>
            ))}
            <button className="  text-gray-700 border border-gray-700 rounded-full px-4 py-2 hidden md:flex cursor-pointer">
              Create your birth plan
            </button>
          </div>

          {/* mobile */}
        </div>

        {/* mobileMenu */}
        <motion.div
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden overflow-hidden "
        >
          <div className="flex flex-col space-y-4 pt-4 px-4">
            {links.leftLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  pathName === link.href ? "text-black" : "text-neutral-400"
                } hover:text-black transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
            {links.rightLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  pathName === link.href ? "text-black" : "text-neutral-400"
                } hover:text-black transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-40 md:hidden "
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </AnimatePresence>
  );
};

export default Navbar;
