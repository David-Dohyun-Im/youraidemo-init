import React from 'react';
import { motion } from 'framer-motion';

const OrbFeatureDemo = () => {
  const imageChanged = false;

  return (
    <section className="py-20 px-4 relative" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <span 
              className="text-black inline-block text-center"
              style={{
                fontSize: '56px',
                fontWeight: 500,
                letterSpacing: '-0.56px',
                lineHeight: '67.2px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <span style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>How we </span>
              <span style={{ fontFamily: 'PlayfairDisplay-Italic, serif' }}>work</span>
            </span>
          </motion.h2>
          
        </div>

        {/* Features Container - 1200x560 */}
        <div 
          className="mx-auto flex flex-col"
          style={{
            width: '1200px',
            height: '560px',
            gap: '24px'
          }}
        >
          {/* Top Row Container */}
          <div 
            className="flex"
            style={{
              width: '1200px',
              height: '268px',
              gap: '24px'
            }}
          >
            {/* Top Left - Image + Text Card */}
            <motion.div 
              className="bg-[#F0F0EE] rounded-2xl  transition-all flex flex-row items-center justify-center"
              style={{
                width: '705.6px',
                height: '268px'
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
            {/* Image Section - 336x228 */}
            <div 
              className="relative rounded-2xl overflow-hidden m-6  transition-all"
              style={{
                width: '312px',
                height: '196px'
              }}
            >
              <img 
                src="/images/cutting-edge-ai.jpg" 
                alt="Cutting-Edge AI" 
                className="w-full h-full object-cover block"
                style={{ borderRadius: 'inherit' }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(50% 100% at -5.4% 35.5%, rgba(240, 248, 255, 0.9) 0%, rgba(4, 7, 13, 0) 100%)',
                  borderRadius: 'inherit',
                  opacity: 0.3
                }}
              ></div>
            </div>
            
            {/* Content Section - 336x228 */}
            <div 
              className="p-6 flex items-center  transition-all rounded-2xl"
              style={{
                width: '312px',
                height: '196px'
              }}
            >
              <div className="w-full">
                <h3 
                  className="text-gray-900 mb-2  transition-all rounded-lg px-2 py-1"
                  style={{
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                    fontSize: '23px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                  }}
                >
                  AI Strategy Consulting
                </h3>
                <p className="text-gray-600 leading-relaxed opacity-80">
                  Develop comprehensive AI strategies tailored to your business goals and industry requirements.
                </p>
              </div>
            </div>
            </motion.div>

            {/* Top Right - Text Only Card */}
            <motion.div 
              className="bg-[#F0F0EE] rounded-2xl  transition-all"
              style={{
                width: '470px',
                height: '268px'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 
                className="text-gray-900 mb-2  transition-all rounded-lg px-2 py-1"
                style={{
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                  fontSize: '23px',
                  fontWeight: 'bold',
                  textAlign: 'left'
                }}
              >
                Process Automation
              </h3>
              <p className="text-gray-600 leading-relaxed opacity-80">
                Transform your operations with intelligent automation solutions that reduce costs and increase productivity.
              </p>
            </div>
            </motion.div>
          </div>

          {/* Bottom Row Container */}
          <div 
            className="flex"
            style={{
              width: '1200px',
              height: '268px',
              gap: '24px'
            }}
          >
            {/* Bottom Left - Text Only Card */}
            <motion.div 
              className="bg-[#F0F0EE] rounded-2xl  transition-all"
              style={{
                width: '470px',
                height: '268px'
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 
                className="text-gray-900 mb-2  transition-all rounded-lg px-2 py-1"
                style={{
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                  fontSize: '23px',
                  fontWeight: 'bold',
                  textAlign: 'left'
                }}
              >
                Data Intelligence
              </h3>
              <p className="text-gray-600 leading-relaxed opacity-80">
                Unlock the power of your data with advanced AI analytics and machine learning models for better decision-making.
              </p>
            </div>
            </motion.div>

            {/* Bottom Right - Image + Text Card */}
            <motion.div 
              className="bg-[#F0F0EE] rounded-2xl  transition-all flex flex-row items-center justify-center"
              style={{
                width: '705.6px',
                height: '268px'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
            {/* Image Section - 336x228 */}
            <div 
              className="relative rounded-2xl overflow-hidden m-6  transition-all"
              style={{
                width: '312px',
                height: '196px'
              }}
            >
              <img 
                src={imageChanged ? "/images/support.png" : "/images/ai-powered-support.jpg"} 
                alt="AI-Powered Support" 
                className="w-full h-full object-cover block"
                style={{ borderRadius: 'inherit' }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(50% 100% at -5.4% 35.5%, rgba(240, 248, 255, 0.9) 0%, rgba(4, 7, 13, 0) 100%)',
                  borderRadius: 'inherit',
                  opacity: 0.3
                }}
              ></div>
            </div>
            
            {/* Content Section - 336x228 */}
            <div 
              className="p-6 flex items-center  transition-all rounded-2xl"
              style={{
                width: '312px',
                height: '196px'
              }}
            >
              <div className="w-full">
                <h3 
                  className="text-gray-900 mb-2  transition-all rounded-lg px-2 py-1"
                  style={{
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                    fontSize: '23px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                  }}
                >
                  Customer Support
                </h3>
                <p className="text-gray-600 leading-relaxed opacity-80">
                  Enhance customer experience with AI-powered support systems and intelligent chatbots for 24/7 assistance.
                </p>
              </div>
            </div>
            </motion.div>
          </div>
        </div>

      </div>


    </section>
  );
};

export default OrbFeatureDemo;
