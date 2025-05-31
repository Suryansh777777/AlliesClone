import React from "react";

export default function AboutYou() {
  return (
    <div className="bg-[#FCF7F3]">
      <div className="px-6 mb-22 max-sm:mb-4  text-[#4B061D]  ">
        <div className="css-1pvcaf" style={{ animationDelay: "0ms" }}>
          <div className="max-w-7xl mx-auto bg-[#4C061D] rounded-[32px] px-8 py-[105px] max-sm:py-22 flex items-center justify-center flex-col w-full  ">
            <div className="css-1pvcaf " style={{ animationDelay: "0ms" }}>
              <h2 className="text-[50px] font-medium -tracking-large text-white onest text-center mb-2 max-sm:text-[36px] max-sm:leading-[41.4px] max-sm:mb-4">
                We are all&nbsp;
                <br className="sm:hidden" />
                <span className="highlight">About You</span>
              </h2>
            </div>
            <div className="css-1pvcaf" style={{ animationDelay: "0ms" }}>
              <p className="text-base-19 text-white -tracking-small onest text-center max-sm:text-base-17">
                Our mission is to enable YOU to have the birth you’ve always
                dreamed of. Connect today.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 mt-10 max-sm:mt-7 max-sm:!flex-col w-full">
              <div
                className="max-sm:!w-full css-1pvcaf"
                style={{ animationDelay: "0ms" }}
              >
                <button className="button-primary-orange bg-[#E5AE89] !pl-10 !bg-main-secondary-400 max-sm:!w-full flex items-center justify-center rounded-3xl py-3 font-semibold ">
                  <span>I’m an expecting mother</span>
                  <div className="-rotate-90">
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
                  </div>
                </button>
              </div>
              <div
                className="max-sm:!w-full css-1pvcaf "
                style={{ animationDelay: "200ms" }}
              >
                <button className="bg-[#E5AE89] !pl-10 !bg-main-secondary-400 max-sm:!pl-4 max-sm:!w-full flex items-center justify-center rounded-3xl py-3 font-semibold">
                  <span>I’m a health expert</span>
                  <div className="-rotate-90">
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
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
