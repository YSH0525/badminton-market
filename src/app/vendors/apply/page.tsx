'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VendorApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    representative: '',
    businessNumber: '',
    category: '',
    phone: '',
    email: '',
    website: '',
    description: '',
    agreement: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-[#c8ff00] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">입점 신청이 완료되었습니다!</h2>
          <p className="text-gray-500 mb-2">
            신청서를 검토한 후 영업일 기준 3일 이내에<br />
            등록하신 연락처로 결과를 안내드리겠습니다.
          </p>
          <p className="text-xs text-gray-400 mb-6">
            * 데모 버전이므로 실제 접수는 되지 않습니다
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white font-bold px-8 py-3 text-sm hover:bg-gray-800 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <span className="text-xs font-bold text-[#c8ff00] tracking-widest">PARTNERSHIP</span>
          <h1 className="text-3xl md:text-4xl font-black mt-1">입점 신청</h1>
          <p className="text-gray-400 mt-2">SMASH 배드민턴 마켓과 함께 성장하세요</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '📈', title: '매출 확대', desc: '전문 코치의 추천으로 타겟 고객에게 노출' },
            { icon: '🤝', title: '마케팅 지원', desc: '아카데미 회원 대상 프로모션 기회' },
            { icon: '💡', title: '간편한 운영', desc: '입점 수수료 15%, 정산은 주 1회' },
          ].map(b => (
            <div key={b.title} className="bg-gray-50 p-6 text-center">
              <span className="text-3xl block mb-3">{b.icon}</span>
              <h3 className="font-bold text-sm text-gray-900 mb-1">{b.title}</h3>
              <p className="text-xs text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-black text-gray-900 mb-2">업체 정보</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                업체명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                placeholder="업체명을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                대표자명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.representative}
                onChange={(e) => setFormData({ ...formData, representative: e.target.value })}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                placeholder="대표자명을 입력하세요"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                사업자등록번호 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.businessNumber}
                onChange={(e) => setFormData({ ...formData, businessNumber: e.target.value })}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                placeholder="000-00-00000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                취급 카테고리 <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              >
                <option value="">선택하세요</option>
                <option value="racket">라켓</option>
                <option value="shoes">신발</option>
                <option value="apparel">의류</option>
                <option value="shuttlecock">셔틀콕</option>
                <option value="accessory">악세서리/소품</option>
                <option value="multi">종합</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              웹사이트 (선택)
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              placeholder="https://www.example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              업체 소개 <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
              placeholder="업체 소개와 취급 상품에 대해 간략히 설명해주세요"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agreement"
              required
              checked={formData.agreement}
              onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
              className="mt-1"
            />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              입점 약관 및 개인정보 처리방침에 동의합니다. <span className="text-red-500">*</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-4 text-sm hover:bg-gray-800 transition-colors active:scale-[0.99]"
          >
            입점 신청하기
          </button>

          <p className="text-xs text-gray-400 text-center">
            * 데모 버전이므로 실제 접수는 되지 않습니다
          </p>
        </form>
      </div>
    </div>
  );
}
