'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/components/CartProvider';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">😢</span>
          <h2 className="text-2xl font-bold mb-2">상품을 찾을 수 없습니다</h2>
          <Link href="/products" className="text-sm underline text-gray-500">
            상품 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const categoryIcons: Record<string, string> = {
    racket: '🏸',
    shoes: '👟',
    shuttlecock: '🪶',
    bag: '🎒',
    apparel: '👕',
    accessory: '🔧',
    string: '🧵',
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600">홈</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-gray-600">전체상품</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Image */}
          <div className="bg-gray-50 aspect-square flex items-center justify-center sticky top-20">
            <div className="text-center">
              <span className="text-[120px] md:text-[160px]">
                {categoryIcons[product.category] || '🏸'}
              </span>
              {discount > 0 && (
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1">
                    -{discount}%
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right - Info */}
          <div className="py-4">
            <div className="mb-1">
              <span className="text-xs font-bold text-gray-400 tracking-widest">{product.brand}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'}
                    stroke="#f59e0b"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating} ({product.reviewCount}개 리뷰)</span>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-100 py-6 mb-6">
              <div className="flex items-end gap-3">
                {discount > 0 && (
                  <span className="text-2xl font-black text-red-500">{discount}%</span>
                )}
                <span className="text-3xl font-black text-gray-900">
                  {product.price.toLocaleString()}원
                </span>
              </div>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through mt-1 block">
                  {product.originalPrice.toLocaleString()}원
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Specs */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-900 mb-3">상품 사양</h3>
              <div className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex text-sm">
                    <span className="text-gray-400 w-24 shrink-0">{key}</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vendor */}
            <div className="bg-gray-50 p-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400">판매처</span>
                <p className="text-sm font-bold text-gray-900">{product.vendorName}</p>
              </div>
              <Link href="/vendors" className="text-xs text-gray-500 underline">
                브랜드 보기
              </Link>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-3 mb-4">
              <div className="flex items-center border border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-12 text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  -
                </button>
                <span className="w-12 h-12 flex items-center justify-center text-sm font-bold border-x border-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-12 text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-bold text-sm py-3 transition-all active:scale-[0.98] ${
                  added
                    ? 'bg-[#c8ff00] text-black'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {added ? '장바구니에 담겼습니다!' : '장바구니 담기'}
              </button>
            </div>

            <button className="w-full border-2 border-black text-black font-bold text-sm py-3 hover:bg-black hover:text-white transition-colors">
              바로 구매하기
            </button>

            {/* Delivery Info */}
            <div className="mt-8 space-y-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span>오후 2시 이전 주문 시 당일 출고 (영업일 기준)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                <span>50,000원 이상 구매 시 무료 배송</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
                <span>7일 이내 무료 교환/반품</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-gray-100 pt-12">
            <h2 className="text-xl font-black text-gray-900 mb-6">관련 상품</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => {
                const relDiscount = p.originalPrice
                  ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
                  : 0;
                return (
                  <Link key={p.id} href={`/products/${p.id}`} className="group">
                    <div className="bg-gray-50 aspect-square flex items-center justify-center mb-3">
                      <span className="text-5xl group-hover:scale-110 transition-transform">
                        {categoryIcons[p.category] || '🏸'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium">{p.brand}</p>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{p.name}</h3>
                    <div className="flex items-center gap-2">
                      {relDiscount > 0 && (
                        <span className="text-sm font-bold text-red-500">{relDiscount}%</span>
                      )}
                      <span className="text-sm font-bold">{p.price.toLocaleString()}원</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
