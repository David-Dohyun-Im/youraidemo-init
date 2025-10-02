import React from 'react';
import { Send, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

// GroundAI 로고 컴포넌트 (4잎 클로버 모양)
function GroundAILogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L14.5 6.5L19 9L14.5 11.5L12 16L9.5 11.5L5 9L9.5 6.5L12 2Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

// 파트너 로고들
function NeuralLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center space-x-2 text-gray-300">
      <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center">
        <span className="text-xs font-bold text-white" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>N</span>
      </div>
      <span className="text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>Nueral</span>
    </div>
  );
}

function WidsLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center space-x-2 text-gray-300">
      <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center">
        <span className="text-xs font-bold text-white" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>W</span>
      </div>
      <span className="text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>Wids</span>
    </div>
  );
}

function OrinyaLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center space-x-2 text-gray-300">
      <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center">
        <span className="text-xs font-bold text-white" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>O</span>
      </div>
      <span className="text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>Orinya</span>
    </div>
  );
}

function GroundAIFooter() {
  return (
    <footer className="py-16" style={{ backgroundColor: '#EFEAE5' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* 메인 컨테이너 - 어두운 배경, 둥근 모서리 */}
        <div className="bg-black rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 왼쪽 상단 - 브랜딩 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <GroundAILogo className="text-white w-8 h-8" />
                <span className="text-white text-2xl font-semibold" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>YourAI</span>
              </div>
              <p className="text-white text-sm leading-relaxed" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                For businesses, thriving with an AI
              </p>
            </div>

            {/* 오른쪽 상단 - CTA 카드와 버튼 */}
            <div className="space-y-4 flex flex-col items-end">
              {/* 프로필 카드 */}
              <div 
                className="rounded-lg flex items-center space-x-4 w-1/2 h-10 px-6" 
                style={{ backgroundColor: '#313131' }}
              >
                <div className="rounded-lg overflow-hidden" style={{ width: '30px', height: '30px' }}>
                  <img 
                    src="/images/david-liu.png" 
                    alt="David Liu" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 text-xs" style={{ fontSize: '10px', fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                    Watch how AI transforms your business
                  </p>
                </div>
                <button className="w-6 h-6 rounded-lg bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <Send className="w-3 h-3 text-gray-200" />
                </button>
              </div>
              
              {/* 메인 CTA 버튼 */}
              <button 
                className="w-1/2 h-10 px-6 rounded-lg font-medium transition-colors hover:scale-105 active:scale-95" 
                style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', backgroundColor: '#EFEAE5', color: '#1f2937' }}
              >
                Book a call
              </button>
            </div>
          </div>

          {/* 하단 섹션 */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* 왼쪽 - 소셜 미디어 */}
            <div className="flex items-center space-x-4">
              {/* Telegram 아이콘 */}
              <button 
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-gray-700 transition-colors hover:scale-110 active:scale-90"
              >
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.68-.89.42l-2.46-1.81-1.19 1.15c-.13.13-.24.24-.49.24l.18-2.56 4.59-4.14c.2-.18-.04-.28-.31-.1l-5.68 3.58-2.45-.77c-.53-.16-.54-.53.11-.79l9.57-3.69c.44-.16.83.1.69.79z"/>
                </svg>
              </button>
              
              {/* WhatsApp 아이콘 */}
              <button 
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-gray-700 transition-colors hover:scale-110 active:scale-90"
              >
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </button>
            </div>

            {/* 중간 - Pages 버튼 */}
            <div className="flex items-center space-x-2">
              <button 
                className="px-4 py-2 rounded-full border border-gray-500 text-gray-300 text-sm hover:bg-gray-700 transition-colors flex items-center space-x-2 hover:scale-105 active:scale-95" 
                style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}
              >
                <span>Pages</span>
                <Plus className="w-4 h-4" />
              </button>
              <span className="text-gray-400" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>/</span>
            </div>

            {/* 오른쪽 - 네비게이션 메뉴 */}
            <div className="flex items-center space-x-4">
              <span className="text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', color: '#9CA3AF' }}>Home</span>
              <span style={{ color: '#6B7280', fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>|</span>
              <span className="text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', color: '#9CA3AF' }}>About</span>
              <span style={{ color: '#6B7280', fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>|</span>
              <span className="text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', color: '#9CA3AF' }}>Work</span>
              <span style={{ color: '#6B7280', fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>|</span>
              <span className="text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', color: '#9CA3AF' }}>Blogs</span>
              <span style={{ color: '#6B7280', fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>|</span>
              <span className="text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', color: '#9CA3AF' }}>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GroundAIFooterDemo() {
  return (
    <div className="block">
      <GroundAIFooter />
    </div>
  );
}

export { GroundAIFooterDemo };