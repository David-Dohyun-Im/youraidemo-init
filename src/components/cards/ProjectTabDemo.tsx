import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NumberTicker } from '../ui/number-ticker';

const ProjectTabDemo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "CarePath — Virtual Health Guide",
      description: "We built an AI assistant that listens to symptoms and guides patients toward the right treatment in real time.",
      image: "https://framerusercontent.com/images/BlgeL0EotFTQ0vq42WKucxKVO4.png?width=960&height=1200",
      stats: [
        { value: "44%", label: "Quicker diagnosis support" },
        { value: "28%", label: "Increase in patient trust" }
      ]
    },
    {
      id: 2,
      number: "02", 
      title: "TradeMind — AI Market Navigator",
      description: "We created an intelligent platform that interprets financial signals and executes trades with smart automation.",
      image: "https://framerusercontent.com/images/BlgeL0EotFTQ0vq42WKucxKVO4.png?width=960&height=1200",
      stats: [
        { value: "47%", label: "Better forecasting accuracy" },
        { value: "30%", label: "Drop in trading mistakes" }
      ]
    },
    {
      id: 3,
      number: "03",
      title: "TeamFlow — AI HR Assistant", 
      description: "We designed an automation bot that streamlines onboarding, manages employee requests, and answers HR questions instantly.",
      image: "https://framerusercontent.com/images/BlgeL0EotFTQ0vq42WKucxKVO4.png?width=960&height=1200",
      stats: [
        { value: "20%", label: "Less administrative workload" },
        { value: "12%", label: "Higher team efficiency" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span 
              className="inline-block text-center"
              style={{
                color: '#000000',
                fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                fontSize: '56px',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.56px',
                lineHeight: '67.2px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              Case Studies
            </span>
          </motion.h2>
          
        </div>

        {/* Main Container - 1200x576.1 */}
        <motion.div 
          className="mx-auto rounded-2xl shadow-lg border border-gray-200 flex flex-col"
          style={{
            width: '1200px',
            height: '576.1px',
            backgroundColor: '#EFEAE5',
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Tab Container - 1160x44 */}
          <div 
            className="flex gap-4"
            style={{
              width: '1160px',
              height: '44px',
              margin: '20px auto 20px',
              padding: '0 20px'
            }}
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center rounded-lg transition-all duration-300  ${
                  activeTab === index 
                    ? 'bg-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                style={{
                  width: '376px',
                  height: '44px',
                  boxShadow: activeTab === index 
                    ? 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
                    : 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
                }}
              >
                <span 
                  className="font-medium text-gray-900 uppercase tracking-wide"
                  style={{
                    fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontStyle: 'italic'
                  }}
                >
                  {project.id === 1 ? 'CASE I' : project.id === 2 ? 'CASE II' : 'CASE III'}
                </span>
              </button>
            ))}
          </div>

          {/* Content Area - 1160x472.1 */}
          <div 
            className="flex-1"
            style={{
              width: '1160px',
              height: '472.1px',
              margin: '0 auto',
              padding: '0 20px 20px'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex gap-6 h-full"
              >
                {/* Left Image Section */}
                <div 
                  className="relative rounded-2xl overflow-hidden flex-shrink-0"
                  style={{
                    width: '580px',
                    height: '472.1px'
                  }}
                >
                  <img 
                    src={projects[activeTab].image}
                    alt={projects[activeTab].title}
                    className="w-full h-full object-cover"
                    style={{ 
                      borderRadius: '16px',
                      boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px'
                    }}
                  />
                </div>

                {/* Right Content Section */}
                <div 
                  className="flex flex-col justify-center"
                  style={{
                    width: '580px',
                    height: '472.1px'
                  }}
                >
                  {/* Project Number */}
                  <div 
                    className="text-gray-400 mb-4"
                    style={{
                      fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400
                    }}
                  >
                    {projects[activeTab].number}
                  </div>

                  {/* Project Title */}
                  <h3 
                    className="text-gray-900 mb-4"
                    style={{
                      fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                      fontSize: '24px',
                      fontWeight: 100,
                      lineHeight: '28px',
                      letterSpacing: '-0.24px'
                    }}
                  >
                    {projects[activeTab].title}
                  </h3>

                  {/* Project Description */}
                  <p 
                    className="text-gray-600 mb-8 leading-relaxed"
                    style={{
                      fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px',
                      opacity: 0.8
                    }}
                  >
                    {projects[activeTab].description}
                  </p>

                  {/* Stats Container */}
                  <div className="flex gap-4">
                     {projects[activeTab].stats.map((stat, index) => (
                       <motion.div
                         key={`${activeTab}-${index}`}
                         initial={{ opacity: 0, x: -12 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.2, duration: 0.3 }}
                         className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex-1"
                         style={{
                           boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
                         }}
                       >
                        <div className="flex items-baseline justify-center gap-1 mb-2">
                          <NumberTicker
                            value={parseInt(stat.value.replace('%', ''))}
                            duration={1.2}
                            className="text-gray-900 font-semibold text-3xl leading-none"
                          />
                          <span 
                            className="text-gray-900"
                            style={{
                              fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                              fontSize: '24px',
                              fontWeight: 600,
                              lineHeight: '1'
                            }}
                          >
                            %
                          </span>
                        </div>
                        <p 
                          className="text-gray-600 text-center"
                          style={{
                            fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            opacity: 0.8
                          }}
                        >
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTabDemo;
