import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 border border-white rounded-full" />
        <div className="absolute top-20 left-20 w-72 h-72 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px] md:min-h-[600px] py-16">
          {/* Left - Text */}
          <div className="relative z-10">
            <div className="inline-block bg-[#c8ff00] text-black text-xs font-bold px-3 py-1.5 mb-6 tracking-wider">
              COACH&apos;S PICK
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              YOUR GAME<br />
              <span className="text-[#c8ff00]">STARTS</span><br />
              HERE.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              전문 코치가 직접 선별한 최고의 배드민턴 장비.<br />
              당신의 경기력을 한 단계 끌어올려 드립니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-block bg-[#c8ff00] text-black font-bold px-8 py-4 text-sm tracking-wider hover:bg-[#d4ff33] transition-colors"
              >
                SHOP NOW
              </Link>
              <Link
                href="/academy"
                className="inline-block border-2 border-white text-white font-bold px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                ACADEMY
              </Link>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative">
              {/* Decorative circles */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-[#c8ff00]/30 flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border-2 border-[#c8ff00]/50 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-[#c8ff00]/10 flex items-center justify-center">
                    <span className="text-7xl md:text-8xl lg:text-9xl">🏸</span>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 right-4 bg-white text-black text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                PRO GRADE
              </div>
              <div className="absolute bottom-4 -left-4 bg-[#c8ff00] text-black text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                COACH APPROVED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
