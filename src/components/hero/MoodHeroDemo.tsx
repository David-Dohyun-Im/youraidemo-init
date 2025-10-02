"use client";
import React from "react";
import { motion } from "framer-motion";


export const MoodHeroDemo = () => {
  const isVideoBackground = false;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Custom Navbar - 히어로 위에 투명하게 오버레이 */}
      <nav
        className="absolute top-0 left-0 right-0 z-50 w-full px-6 py-4  transition-all"
      >
        <div className="flex items-center justify-between">
          {/* Left side - Logo and text */}
          <div className="flex items-center space-x-3">
            {/* YourAI Logo */}
            <div className="w-8 h-8 flex items-center justify-center mb-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <g clipPath="url(#clip0_209_2)">
                  <path d="M18.1992 12.5742V21H15.0234V12.5508C15.0234 11.3555 14.7695 10.5156 14.2617 10.0312C13.7539 9.53906 12.8711 9.29297 11.6133 9.29297H5.67188V6.45703H11.8125C13.3516 6.45703 14.5859 6.66406 15.5156 7.07812C16.4531 7.49219 17.1328 8.14844 17.5547 9.04688C17.9844 9.9375 18.1992 11.1133 18.1992 12.5742ZM9.07031 12.1641V21H5.90625V12.1641H9.07031Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_209_2">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span 
              className="text-white text-lg font-medium"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100'
              }}
            >
              YourAI
            </span>
          </div>

          {/* Right side - All items in one container */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-white text-sm hover:text-white/80 transition-colors"
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100'
                }}
              >
                Product
              </a>
              <a 
                href="#" 
                className="text-white text-sm hover:text-white/80 transition-colors"
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100'
                }}
              >
                Platform
              </a>
              <a 
                href="#" 
                className="text-white text-sm hover:text-white/80 transition-colors"
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100'
                }}
              >
                Customers
              </a>
              <a 
                href="#" 
                className="text-white text-sm hover:text-white/80 transition-colors"
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100'
                }}
              >
                Company
              </a>
              <button 
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors  "
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '550',
                  color: 'black'
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
       {/* 폰트 정의 */}
       <style jsx>{`
         @font-face {
           font-family: 'Playfair Display Italic';
           src: url('/fonts/PlayfairDisplay-Italic.ttf') format('truetype');
           font-weight: 400;
           font-style: italic;
         }
         @font-face {
           font-family: 'Arial Rounded MT Regular';
           src: url('/fonts/ArialRounded/Arial Rounded MT Regular/Arial Rounded MT Regular.ttf') format('truetype');
           font-weight: 100;
           font-style: normal;
         }
       `}</style>
      {/* 배경 - 이미지 또는 비디오 */}
      {isVideoBackground ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
      ) : (
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/mood-1.svg')`
        }}
        />
      )}


       {/* 메인 콘텐츠 - 중앙 배치 */}
       <div className="relative z-10 hero flex items-center justify-center min-h-screen px-4">
         <div className="max-w-[720px] mx-auto text-center">
          
           {/* 1줄: Meet YourAI */}
           <motion.h1
             className="text-[60px] font-light text-white leading-[1.05]  "
             style={{ 
               fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
               fontWeight: '100',
               letterSpacing: '-0.05em'
             }}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
           >
             Meet YourAI.
           </motion.h1>
          
           {/* 2줄: Reimagine work with adaptive thinking */}
           <motion.h2 
             className="text-[60px] text-white leading-[1.05] mb-8"
             style={{ 
               fontFamily: 'Inter, SF Pro Display, Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
               letterSpacing: '-0.05em'
             }}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
           >
             <span
               className="font-normal  "
               style={{
                 fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                 fontWeight: '400',
                 letterSpacing: '-0.05em'
               }}
             >
               Reimagine work
             </span>
             <span
               className="font-normal  "
               style={{
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 letterSpacing: '-0.05em'
               }}
             >
               {" "}with
             </span>
             <br />
             <span
               className="font-normal  "
               style={{
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 letterSpacing: '-0.05em'
               }}
             >
               adaptive thinking
             </span>
           </motion.h2>

          {/* CTA 버튼 */}
          <motion.button
            className="bg-white text-black rounded-2xl font-medium  h-[50px]"
            style={{ 
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontWeight: '500',
              padding: '0 22.4px',
              fontSize: '16px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Start free exploration
          </motion.button>
        </div>
      </div>

        {/* 하단 좌측: 설명 텍스트 */}
        <motion.div 
          className="absolute bottom-8 left-8 max-w-md z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <p
            className="text-white text-lg  "
            style={{ 
              fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
              fontWeight: '100',
              lineHeight: '1.2'
            }}
          >
            It helps you explore, create, and refine ideas
            through natural interactions.
            From drafting concepts and options to shaping
            workflows and outputs, it adapts to your style.
          </p>
        </motion.div>

       {/* 하단 우측: 버튼들 */}
       <motion.div 
         className="absolute bottom-8 right-8 max-w-sm z-20"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
       >
         <div className="space-y-2">
             <motion.button 
               className="w-full bg-transparent border-2 border-white/30 text-white px-6 rounded-2xl text-left hover:bg-white/10 transition-all duration-300 flex items-center group "
               style={{ 
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 height: '50px'
               }}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               <span className="text-lg font-light">Solutions for complex tasks</span>
             </motion.button>

           <div className="flex items-center gap-2">
              <motion.button 
                className="flex-1 bg-transparent border-2 border-white/30 text-white px-6 rounded-2xl text-left hover:bg-white/10 transition-all duration-300 flex items-center group "
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100',
                  height: '50px'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-light">Conversational & Adaptive</span>
              </motion.button>
             
             <motion.button 
               className="bg-transparent border-2 border-white/30 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center "
               style={{ 
                 width: '50px',
                 height: '50px'
               }}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               <svg
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 className="text-white"
               >
                 <path
                   d="M7 17L17 7M17 7H7M17 7V17"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             </motion.button>
           </div>
        </div>
      </motion.div>

      {/* Hero 끝부분 블러 오버레이 */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black/10 via-black/1 to-transparent backdrop-blur-sm z-10"></div>


    </div>
  );
};
