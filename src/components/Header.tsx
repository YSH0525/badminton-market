'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartProvider';

export default function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      {/* Top Banner */}
      <div className="bg-[#1a1a1a] text-center py-2 text-sm text-gray-300">
        <span className="hidden sm:inline">전문 코치가 운영하는 배드민턴 전문몰 | </span>
        <span className="text-[#c8ff00] font-semibold">신규 회원 10% 할인쿠폰 증정</span>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-[#c8ff00] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M12 10L12 22" stroke="currentColor" strokeWidth="2" />
                <path d="M8 14L16 14" stroke="currentColor" strokeWidth="2" />
                <path d="M9 18L15 18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight">SMASH</span>
              <span className="hidden sm:inline text-xs text-gray-400 block -mt-1 tracking-widest">BADMINTON MARKET</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-sm font-medium hover:text-[#c8ff00] transition-colors tracking-wide">
              SHOP
            </Link>
            <Link href="/vendors" className="text-sm font-medium hover:text-[#c8ff00] transition-colors tracking-wide">
              BRANDS
            </Link>
            <Link href="/academy" className="text-sm font-medium hover:text-[#c8ff00] transition-colors tracking-wide">
              ACADEMY
            </Link>
            <Link href="/vendors/apply" className="text-sm font-medium hover:text-[#c8ff00] transition-colors tracking-wide">
              입점신청
            </Link>
            <Link href="/docs" className="text-sm font-medium hover:text-[#c8ff00] transition-colors tracking-wide">
              자료실
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="p-2 hover:text-[#c8ff00] transition-colors" aria-label="검색">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Cart */}
            <Link href="/cart" className="p-2 hover:text-[#c8ff00] transition-colors relative" aria-label="장바구니">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c8ff00] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User */}
            <button className="p-2 hover:text-[#c8ff00] transition-colors hidden sm:block" aria-label="마이페이지">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {/* Mobile Menu */}
            <button
              className="p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴"
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111] border-t border-gray-800">
          <nav className="flex flex-col p-4 gap-4">
            <Link href="/products" className="text-sm font-medium hover:text-[#c8ff00] transition-colors py-2 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              SHOP
            </Link>
            <Link href="/vendors" className="text-sm font-medium hover:text-[#c8ff00] transition-colors py-2 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              BRANDS
            </Link>
            <Link href="/academy" className="text-sm font-medium hover:text-[#c8ff00] transition-colors py-2 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              ACADEMY
            </Link>
            <Link href="/vendors/apply" className="text-sm font-medium hover:text-[#c8ff00] transition-colors py-2 border-b border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              입점신청
            </Link>
            <Link href="/docs" className="text-sm font-medium hover:text-[#c8ff00] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              자료실
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
