import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import { products } from '@/data/products';
import { academyClasses } from '@/data/academy';
import { vendors } from '@/data/vendors';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  const featuredProducts = products.filter(p => p.tags.includes('베스트셀러')).slice(0, 4);
  const newProducts = products.filter(p => p.tags.includes('신상품') || p.tags.includes('인기')).slice(0, 4);
  const featuredVendors = vendors.filter(v => v.featured).slice(0, 4);

  return (
    <div>
      <HeroBanner />

      {/* Category Quick Links */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            {[
              { name: '라켓', icon: '🏸', href: '/products?category=racket' },
              { name: '신발', icon: '👟', href: '/products?category=shoes' },
              { name: '셔틀콕', icon: '🪶', href: '/products?category=shuttlecock' },
              { name: '스트링', icon: '🧵', href: '/products?category=string' },
              { name: '가방', icon: '🎒', href: '/products?category=bag' },
              { name: '의류', icon: '👕', href: '/products?category=apparel' },
              { name: '악세서리', icon: '🔧', href: '/products?category=accessory' },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="text-xs font-medium text-gray-700">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-[#888] tracking-widest">BEST SELLERS</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">코치 추천 베스트</h2>
            </div>
            <Link href="/products" className="text-sm font-bold text-gray-900 hover:text-[#666] transition-colors border-b-2 border-black pb-1">
              전체보기
            </Link>
          </div>
          <FeaturedProducts products={featuredProducts} />
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-[#c8ff00] tracking-widest">SPECIAL OFFER</span>
              <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4">
                첫 구매 고객<br />
                <span className="text-[#c8ff00]">15% 할인</span>
              </h2>
              <p className="text-gray-400 mb-6">
                회원가입 후 첫 구매 시 전 상품 15% 할인 쿠폰을 드립니다.<br />
                전문 코치가 엄선한 장비로 시작하세요.
              </p>
              <Link
                href="/products"
                className="inline-block bg-[#c8ff00] text-black font-bold px-8 py-4 text-sm tracking-wider hover:bg-[#d4ff33] transition-colors"
              >
                쇼핑하기
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center p-12 border-2 border-dashed border-gray-700 rounded-lg">
                <span className="text-8xl block mb-4">🎯</span>
                <p className="text-gray-500 text-sm">전문 코치의 장비 추천</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-[#888] tracking-widest">NEW & POPULAR</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">신상품 & 인기상품</h2>
            </div>
            <Link href="/products" className="text-sm font-bold text-gray-900 hover:text-[#666] transition-colors border-b-2 border-black pb-1">
              전체보기
            </Link>
          </div>
          <FeaturedProducts products={newProducts} />
        </div>
      </section>

      {/* Academy Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-[#888] tracking-widest">SMASH ACADEMY</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">배드민턴 아카데미</h2>
            </div>
            <Link href="/academy" className="text-sm font-bold text-gray-900 hover:text-[#666] transition-colors border-b-2 border-black pb-1">
              자세히보기
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academyClasses.slice(0, 3).map((cls) => (
              <Link href="/academy" key={cls.id} className="group">
                <div className="bg-gray-50 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-md">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl block mb-2">
                        {cls.level === 'beginner' ? '🌱' : cls.level === 'intermediate' ? '🔥' : '🏆'}
                      </span>
                      <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">{cls.level}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">{cls.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{cls.coach}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-900">{cls.price.toLocaleString()}원/월</span>
                      <span className="text-xs text-gray-400">
                        {cls.currentStudents}/{cls.maxStudents}명
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Partners */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#888] tracking-widest">OUR PARTNERS</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">입점 브랜드</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredVendors.map((vendor) => (
              <Link href="/vendors" key={vendor.id} className="group">
                <div className="bg-white border border-gray-100 p-6 text-center hover:border-gray-300 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:bg-[#c8ff00]/10 transition-colors">
                    {vendor.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{vendor.name}</h3>
                  <p className="text-xs text-gray-400">상품 {vendor.productCount}개</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/vendors/apply"
              className="inline-block border-2 border-black text-black font-bold px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              입점 신청하기
            </Link>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: '전문 코치 운영', desc: '선수 출신 코치가 직접 운영하며 장비를 추천합니다' },
              { icon: '✅', title: '정품 보장', desc: '모든 입점 브랜드의 정품만을 취급합니다' },
              { icon: '🚚', title: '빠른 배송', desc: '오후 2시 이전 주문 시 당일 출고' },
              { icon: '🔄', title: '무료 교환/반품', desc: '7일 이내 무료 교환 및 반품 가능' },
            ].map((usp) => (
              <div key={usp.title} className="text-center">
                <span className="text-4xl block mb-4">{usp.icon}</span>
                <h3 className="font-bold mb-2">{usp.title}</h3>
                <p className="text-sm text-gray-400">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
