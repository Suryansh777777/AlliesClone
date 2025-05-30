import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full  overflow-hidden bg-[#FCF7F3]  ">
      {/* Background Video */}

      <img
        src="/assets/heromobile.png"
        className="absolute top-0 right-0 h-auto w-full sm:hidden object-cover"
        alt="hero mobile"
      />

      {/* Content */}
      <div className="relative z-10 flex items-start justify-center w-full h-full mx-auto py-[196px] max-w-5xl max-lg:px-6 max-sm:pb-14 max-sm:pt-[359px]  ">
        <div className="max-w-3xl text-start">
          <h1 className="  text-[#4B061D] text-7xl font-medium -tracking-large text-main-primary-500 onest max-sm:text-[44px] ">
            Every Mother
            <br />
            <span className="font-novela">Deserves</span> <span>Allies</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#2A0E17] mb-2   max-w-2xl mx-auto py-2">
            You dont have to go through this alone. Allies connects you with
            trusted health experts who will support and care for you throughout
            your pregnancy journey.
          </p>

          <div className="flex w-auto items-center">
            <Link
              href="/projects"
              className="bg-[#DF9A6D] text-[#4B061D] px-6 py-3 rounded-3xl text-base md:text-lg font-medium transition-all hover:shadow-lg hover:bg-gray-900 flex items-center "
            >
              <span className="px-3 font-semibold"> Learn more</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  fill="none"
                  viewBox="0 0 20 21"
                >
                  <path
                    fill="#4B061D"
                    d="M14.758 11.092a.834.834 0 0 0-1.183 0l-2.742 2.741V5.5a.833.833 0 1 0-1.666 0v8.333l-2.742-2.741a.833.833 0 1 0-1.183 1.175l3.583 3.575c.311.313.734.49 1.175.491.438-.004.857-.18 1.167-.491l3.583-3.575a.833.833 0 0 0 .008-1.175"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
