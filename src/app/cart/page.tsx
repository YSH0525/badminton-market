'use client';

import Link from 'next/link';
import { useCart } from '@/components/CartProvider';
import { useState } from 'react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shippingFee = totalPrice >= 50000 ? 0 : 3000;
  const finalTotal = totalPrice + shippingFee;

  const categoryIcons: Record<string, string> = {
    racket: '🏸',
    shoes: '👟',
    shuttlecock: '🪶',
    bag: '🎒',
    apparel: '👕',
    accessory: '🔧',
    string: '🧵',
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-[#c8ff00] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">주문이 완료되었습니다!</h2>
          <p className="text-gray-500 mb-6">
            데모 버전이므로 실제 결제는 진행되지 않습니다.<br />
            주문 내역은 마이페이지에서 확인하실 수 있습니다.
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white font-bold px-8 py-3 text-sm hover:bg-gray-800 transition-colors"
          >
            쇼핑 계속하기
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-2xl font-black text-gray-900 mb-8">장바구니</h1>
          <div className="text-center py-20">
            <span className="text-6xl block mb-4">🛒</span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">장바구니가 비어있습니다</h2>
            <p className="text-gray-500 mb-6">마음에 드는 상품을 담아보세요!</p>
            <Link
              href="/products"
              className="inline-block bg-black text-white font-bold px-8 py-3 text-sm hover:bg-gray-800 transition-colors"
            >
              쇼핑하러 가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black text-gray-900">장바구니 ({items.length})</h1>
          <button
            onClick={clearCart}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            전체 삭제
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white p-4 sm:p-6 flex gap-4 sm:gap-6">
                {/* Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 flex items-center justify-center shrink-0">
                  <span className="text-4xl sm:text-5xl">
                    {categoryIcons[item.product.category] || '🏸'}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{item.product.brand}</p>
                      <Link href={`/products/${item.product.id}`} className="font-bold text-gray-900 hover:text-gray-600 transition-colors text-sm sm:text-base">
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-gray-400 mt-1">{item.product.vendorName}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors p-1"
                      aria-label="삭제"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-end justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 text-gray-500 hover:bg-gray-50 text-sm"
                      >
                        -
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center text-sm font-bold border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 text-gray-500 hover:bg-gray-50 text-sm"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="font-black text-gray-900">
                        {(item.product.price * item.quantity).toLocaleString()}원
                      </span>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-400">
                          {item.product.price.toLocaleString()}원 x {item.quantity}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sticky top-20">
              <h2 className="text-lg font-black text-gray-900 mb-6">주문 요약</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">상품 금액</span>
                  <span className="font-medium">{totalPrice.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">배송비</span>
                  <span className="font-medium">
                    {shippingFee === 0 ? (
                      <span className="text-[#16a34a]">무료</span>
                    ) : (
                      `${shippingFee.toLocaleString()}원`
                    )}
                  </span>
                </div>
                {shippingFee > 0 && (
                  <p className="text-xs text-gray-400">
                    {(50000 - totalPrice).toLocaleString()}원 더 구매 시 무료배송
                  </p>
                )}
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">총 결제 금액</span>
                  <span className="text-xl font-black text-gray-900">
                    {finalTotal.toLocaleString()}원
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setOrderPlaced(true);
                  clearCart();
                }}
                className="w-full bg-black text-white font-bold py-4 mt-6 hover:bg-gray-800 transition-colors active:scale-[0.98] text-sm"
              >
                주문하기 (데모)
              </button>

              <Link
                href="/products"
                className="block text-center text-sm text-gray-500 mt-3 hover:text-gray-700 transition-colors"
              >
                쇼핑 계속하기
              </Link>

              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400 space-y-1">
                <p className="font-medium text-gray-500">안내사항</p>
                <p>* 데모 버전으로 실제 결제가 진행되지 않습니다</p>
                <p>* 실제 서비스에서는 다양한 결제 수단을 지원합니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
