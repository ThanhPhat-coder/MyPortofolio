import { useState, useEffect } from "react";
import homeData from "../data/homeData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = homeData.typingTexts;
    const currentTitle = titles[currentIndex];

    const typeSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] pt-20 overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-16 min-h-[calc(100vh-5rem)] py-16">
          {/* LEFT SECTION */}
          <div className="space-y-10">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-white ]">
              {homeData.title}
            </h1>
            <h2 className="text-3xl sm:text-4xl font-medium flex items-center">
              <span className="text-gradient typing-text">{currentText}</span>
              <span className={`cursor ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl">
              {homeData.description}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              {homeData.buttons.map((btn, index) => (
                <Tippy content={btn.label} key={index}>
                  {btn.href && btn.href !== "#" ? (
                    <a
                      href={btn.href}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl ${btn.type === "primary"
                        ? "bg-white text-black hover:bg-gray-300"
                        : "border border-white text-white hover:bg-white hover:text-black"
                        }`}
                      target={btn.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      <i className={`bx ${btn.type === "primary" ? "bx-download" : "bx-envelope"} mr-2`} />
                      {btn.label}
                    </a>
                  ) : (
                    <button
                      onClick={() =>
                        Swal.fire({
                          title: "Not Available Yet 😅",
                          text: "This feature or file is not ready yet. Please check back later!",
                          icon: "info",
                          confirmButtonColor: "#4f46e5",
                          confirmButtonText: "OK",
                        })
                      }
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl ${btn.type === "primary"
                        ? "bg-white text-black hover:bg-gray-300"
                        : "border border-white text-white hover:bg-white hover:text-black"
                        }`}
                    >
                      <i className={`bx ${btn.type === "primary" ? "bx-download" : "bx-envelope"} mr-2`} />
                      {btn.label}
                    </button>
                  )}
                </Tippy>
              ))}
            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-white font-medium">Follow me:</span>
              <div className="flex gap-3">
                {homeData.socialMedia.map((social, index) => (
                  <Tippy content={social.platform} key={index}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition duration-300 shadow-lg"
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  </Tippy>
                ))}
              </div>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white">
              {homeData.stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-xl flex items-center gap-3"
                >
                  <i className={`${item.icon} text-xl`}></i>
                  <div>
                    <p className="font-bold">{item.value}</p>
                    <p className="text-xs">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center items-center">
            <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full border-8 border-gradient-to-tr from-pink-500 to-indigo-500 p-2 animate-spin-slow shadow-xl">
              <img
                src={homeData.img}
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
              />
            </div>

            {/* FLOATING ICONS */}
            {homeData.floatingIcons.map((tech, index) => {
              const positions = [
                "top-0 left-8",
                "top-4 right-0",
                "bottom-4 left-2",
                "bottom-10 right-6",
              ];
              return (
                <Tippy key={index} content={tech.label}>
                  <div
                    className={`absolute ${positions[index % positions.length]} w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition duration-300 animate-float`}
                    style={{ animationDelay: `${index * 0.4}s` }}
                  >
                    <i className={`${tech.icon} text-xl`}></i>
                  </div>
                </Tippy>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .cursor {
          font-weight: 600;
          margin-left: 2px;
        }
        .text-gradient {
          background: linear-gradient(to right, #00dbde, #fc00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Home;
