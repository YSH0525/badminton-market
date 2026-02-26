'use client';

import Link from 'next/link';
import Image from 'next/image';
import { vendors } from '@/data/vendors';
import { products } from '@/data/products';

export default function VendorsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <span className="text-xs font-bold text-[#c8ff00] tracking-widest">MARKETPLACE</span>
          <h1 className="text-3xl md:text-4xl font-black mt-1">입점 브랜드</h1>
          <p className="text-gray-400 mt-2">신뢰할 수 있는 브랜드들이 함께합니다</p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-black text-gray-900">{vendors.length}</p>
              <p className="text-sm text-gray-500 mt-1">입점 브랜드</p>
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">
                {vendors.reduce((sum, v) => sum + v.productCount, 0)}+
              </p>
              <p className="text-sm text-gray-500 mt-1">등록 상품</p>
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">4.7</p>
              <p className="text-sm text-gray-500 mt-1">평균 평점</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-6">
          {vendors.map((vendor) => {
            const vendorProducts = products.filter(p => p.vendorId === vendor.id).slice(0, 3);
            return (
              <div key={vendor.id} className="border border-gray-100 hover:border-gray-300 transition-all hover:shadow-md">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    {/* Vendor Logo */}
                    <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      {vendor.logo ? (
                        <Image
                          src={vendor.logo}
                          alt={vendor.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl font-black text-gray-400">
                          {vendor.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Vendor Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-xl font-black text-gray-900">{vendor.name}</h2>
                            {vendor.featured && (
                              <span className="bg-[#c8ff00] text-black text-xs font-bold px-2 py-0.5">
                                FEATURED
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{vendor.category}</p>
                        </div>

                        <div className="flex items-center gap-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span className="text-sm font-bold text-gray-900">{vendor.rating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                        {vendor.description}
                      </p>

                      <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                        <span>상품 {vendor.productCount}개</span>
                        <span>입점일 {vendor.joinedDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Vendor Products Preview */}
                  {vendorProducts.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-50">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-xs font-bold text-gray-400 tracking-wider">대표 상품</p>
                        <Link
                          href={`/products?vendor=${vendor.id}`}
                          className="text-xs text-gray-500 hover:text-black transition-colors underline"
                        >
                          전체보기
                        </Link>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {vendorProducts.map((p) => (
                          <Link key={p.id} href={`/products/${p.id}`} className="group">
                            <div className="relative bg-gray-50 aspect-square mb-2 overflow-hidden group-hover:bg-gray-100 transition-colors">
                              {p.image ? (
                                <Image
                                  src={p.image}
                                  alt={p.name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform"
                                  sizes="(max-width: 768px) 33vw, 20vw"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="text-3xl">🏸</span>
                                </div>
                              )}
                            </div>
                            <p className="text-xs font-bold text-gray-900 truncate">{p.name}</p>
                            <p className="text-xs text-gray-500">{p.price.toLocaleString()}원</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gray-50 p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-2">함께 성장할 파트너를 찾습니다</h3>
          <p className="text-gray-500 mb-6">배드민턴 관련 브랜드라면 누구나 입점 신청이 가능합니다</p>
          <Link
            href="/vendors/apply"
            className="inline-block bg-black text-white font-bold px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            입점 신청하기
          </Link>
        </div>
      </div>
    </div>
  );
}
