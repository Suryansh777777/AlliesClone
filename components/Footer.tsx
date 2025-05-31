import React from "react";

export default function Footer() {
  return (
    <footer className="bg-main-secondary-50 pb-12 pt-10 max-sm:pt-14 max-sm:pb-8 px-6 text-[#4B061D] bg-[#FCF7F3]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 max-sm:gap-8">
        <div className="flex items-center justify-between max-sm:!flex-col max-sm:gap-8">
          <a href="/">
            <img
              src="/assets/alliesfooter.svg"
              alt="logo"
              className="h-8 w-auto object-cover max-sm:h-6"
            />
          </a>
          <div className="gap-12 flex items-center max-sm:gap-6 max-sm:!flex-col">
            <div className="flex items-center gap-8">
              <a
                className="text-main-primary-500 onest font-medium -tracking-small text-sm-15"
                href="/"
              >
                Home
              </a>
              <a
                className="text-main-primary-500 onest font-medium -tracking-small text-sm-15"
                href="/about-us"
              >
                About
              </a>
              <a
                className="text-main-primary-500 onest font-medium -tracking-small text-sm-15"
                href="/contact-us"
              >
                Contact
              </a>
              <a
                className="text-main-primary-500 onest font-medium -tracking-small text-sm-15"
                href="/birth-plan-template"
              >
                Birth Planner
              </a>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://x.com/Alliesbirth" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  fill="none"
                  viewBox="0 0 18 19"
                >
                  <path
                    fill="#4B061D"
                    fillRule="evenodd"
                    d="m11.96 17.75-4.163-5.932-5.21 5.932H.382l6.437-7.327L.382 1.25h5.66l3.922 5.591L14.88 1.25h2.205l-6.138 6.987 6.673 9.513zm2.454-1.672H12.93L3.539 2.923h1.484L8.784 8.19l.65.914z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/allies.birth/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  fill="none"
                  viewBox="0 0 18 19"
                >
                  <g fill="#4B061D" clip-path="url(#clip0_5786_788)">
                    <path d="M9 2.12c2.405 0 2.69.011 3.635.053.88.04 1.354.187 1.67.31.418.162.72.358 1.034.671.316.317.51.616.671 1.034.123.316.27.794.31 1.67.042.949.052 1.234.052 3.635 0 2.405-.01 2.69-.052 3.635-.04.879-.187 1.354-.31 1.67-.162.418-.358.72-.671 1.034-.317.316-.616.51-1.034.671-.316.123-.794.27-1.67.31-.95.042-1.234.052-3.635.052-2.405 0-2.69-.01-3.635-.052-.88-.04-1.354-.187-1.67-.31a2.8 2.8 0 0 1-1.034-.671 2.8 2.8 0 0 1-.671-1.034c-.123-.316-.27-.794-.31-1.67-.042-.95-.052-1.234-.052-3.635 0-2.405.01-2.69.052-3.635.04-.88.187-1.354.31-1.67.162-.418.358-.72.671-1.034.317-.316.616-.51 1.034-.671.316-.123.794-.27 1.67-.31.946-.042 1.23-.052 3.635-.052M9 .5C6.557.5 6.25.51 5.291.553 4.335.595 3.677.75 3.108.97a4.4 4.4 0 0 0-1.596 1.04 4.4 4.4 0 0 0-1.04 1.593C.25 4.177.094 4.831.051 5.787.012 6.752 0 7.057 0 9.5s.01 2.75.053 3.709c.042.956.197 1.614.418 2.183a4.4 4.4 0 0 0 1.04 1.596 4.4 4.4 0 0 0 1.593 1.037c.573.222 1.227.377 2.183.419.96.042 1.266.053 3.71.053s2.749-.011 3.709-.053c.956-.042 1.613-.197 2.183-.419a4.4 4.4 0 0 0 1.592-1.037 4.4 4.4 0 0 0 1.037-1.592c.222-.573.377-1.227.419-2.184.042-.96.052-1.265.052-3.708s-.01-2.75-.052-3.71c-.043-.956-.197-1.613-.419-2.183a4.2 4.2 0 0 0-1.03-1.6A4.4 4.4 0 0 0 14.896.976c-.573-.222-1.227-.377-2.184-.419C11.75.511 11.444.5 9 .5"></path>
                    <path d="M9 4.877a4.624 4.624 0 0 0 0 9.246 4.624 4.624 0 0 0 0-9.246m0 7.622A3 3 0 1 1 9 6.5 3 3 0 0 1 9 12.5M14.885 4.694a1.08 1.08 0 1 1-2.159 0 1.08 1.08 0 0 1 2.16 0"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_5786_788">
                      <path fill="#fff" d="M0 .5h18v18H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.facebook.com/allies.birth" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  fill="none"
                  viewBox="0 0 18 19"
                >
                  <g clip-path="url(#clip0_5842_793)">
                    <path
                      fill="#4B061D"
                      d="M18 9.5a9 9 0 1 0-11.174 8.735V12.25H4.97V9.5h1.856V8.315c0-3.063 1.386-4.483 4.394-4.483.57 0 1.554.112 1.956.223v2.493a12 12 0 0 0-1.04-.033c-1.475 0-2.045.559-2.045 2.012V9.5h2.94l-.506 2.75h-2.434v6.184C14.547 17.896 18 14.101 18 9.5"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_5842_793">
                      <path fill="#fff" d="M0 .5h18v18H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@allies.birth" target="_blank">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5786_796)">
                    <path
                      d="M12.8044 0.5H9.77086V12.7608C9.77086 14.2218 8.60414 15.4218 7.1522 15.4218C5.70025 15.4218 4.53352 14.2218 4.53352 12.7608C4.53352 11.3261 5.67433 10.1522 7.07443 10.1V7.02175C3.98904 7.0739 1.5 9.60435 1.5 12.7608C1.5 15.9435 4.04089 18.5 7.17814 18.5C10.3153 18.5 12.8562 15.9174 12.8562 12.7608V6.4739C13.997 7.3087 15.3971 7.80435 16.875 7.83045V4.75217C14.5934 4.67391 12.8044 2.79565 12.8044 0.5Z"
                      fill="#4B061D"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_5786_796">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.5)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.pinterest.com/alliesbirth/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#4B061D"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/allies-co/about/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#4B061D"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between max-sm:!flex-col-reverse max-sm:gap-6 max-sm:border-t max-sm:border-t-main-secondary-100 max-sm:pt-6">
          <p className="onest text-main-primary-500 -tracking-small text-sm-13">
            © 2024 Allies, Inc. All Rights Reserved.
          </p>
          <div className="flex justify-center text-sm text-gray-600 gap-4 max-sm:gap-8">
            <a
              className="onest text-main-primary-500 -tracking-small text-sm-13"
              href="/privacy"
            >
              Privacy policy
            </a>
            <a
              className="onest text-main-primary-500 -tracking-small text-sm-13"
              href="/terms-and-conditions"
            >
              Terms of use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
