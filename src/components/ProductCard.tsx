'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from './CartProvider';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const categoryIcons: Record<string, string> = {
    racket: '🏸',
    shoes: '👟',
    shuttlecock: '🪶',
    bag: '🎒',
    apparel: '👕',
    accessory: '🔧',
    string: '🧵',
  };

  return (
    <div className="group bg-white border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
      {/* Image Area */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {categoryIcons[product.category] || '🏸'}
          </span>
          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {discount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1">
                -{discount}%
              </span>
            )}
            {product.tags.includes('베스트셀러') && (
              <span className="bg-black text-white text-xs font-bold px-2 py-1">
                BEST
              </span>
            )}
            {product.tags.includes('신상품') && (
              <span className="bg-[#c8ff00] text-black text-xs font-bold px-2 py-1">
                NEW
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-gray-400 font-medium tracking-wider mb-1">{product.brand}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#555] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'}
                stroke="#f59e0b"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 mb-3">
          <span className="text-lg font-black text-gray-900">
            {product.price.toLocaleString()}원
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.originalPrice.toLocaleString()}원
            </span>
          )}
        </div>

        {/* Vendor */}
        <p className="text-xs text-gray-400 mb-3">{product.vendorName}</p>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-black text-white text-sm font-bold py-2.5 hover:bg-gray-800 transition-colors active:scale-[0.98]"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  );
}
