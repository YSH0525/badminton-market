import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-lg font-bold mb-2">뉴스레터 구독</h3>
              <p className="text-sm">신상품 소식, 할인 이벤트, 아카데미 정보를 받아보세요</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 bg-gray-900 border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c8ff00]"
              />
              <button className="bg-[#c8ff00] text-black px-6 py-3 text-sm font-bold hover:bg-[#d4ff33] transition-colors shrink-0">
                구독
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 text-sm tracking-wide">SHOP</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products?category=racket" className="hover:text-white transition-colors">라켓</Link></li>
                <li><Link href="/products?category=shoes" className="hover:text-white transition-colors">신발</Link></li>
                <li><Link href="/products?category=shuttlecock" className="hover:text-white transition-colors">셔틀콕</Link></li>
                <li><Link href="/products?category=apparel" className="hover:text-white transition-colors">의류</Link></li>
                <li><Link href="/products?category=accessory" className="hover:text-white transition-colors">악세서리</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm tracking-wide">ACADEMY</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/academy" className="hover:text-white transition-colors">클래스 안내</Link></li>
                <li><Link href="/academy" className="hover:text-white transition-colors">코치 소개</Link></li>
                <li><Link href="/academy" className="hover:text-white transition-colors">수강 예약</Link></li>
                <li><Link href="/academy" className="hover:text-white transition-colors">시설 안내</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm tracking-wide">SUPPORT</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:text-white transition-colors cursor-pointer">고객센터</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">배송 안내</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">교환/반품</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">FAQ</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm tracking-wide">PARTNER</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/vendors" className="hover:text-white transition-colors">입점 브랜드</Link></li>
                <li><Link href="/vendors/apply" className="hover:text-white transition-colors">입점 신청</Link></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">제휴 문의</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#c8ff00] rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-black">
                  <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 10L12 22" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 14L16 14" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-white font-black text-sm">SMASH</span>
            </div>
            <div className="text-xs text-center md:text-right space-y-1">
              <p>스매시 배드민턴 마켓 | 대표: 김민수 | 사업자등록번호: 123-45-67890</p>
              <p>서울특별시 강남구 테헤란로 123, 4층 | 고객센터: 02-1234-5678</p>
              <p className="text-gray-600">&copy; 2024 SMASH Badminton Market. All rights reserved. (데모 버전)</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
