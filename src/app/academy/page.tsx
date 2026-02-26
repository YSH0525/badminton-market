'use client';

import { useState } from 'react';
import { academyClasses, coaches } from '@/data/academy';

export default function AcademyPage() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const levelLabels: Record<string, string> = {
    beginner: '초급',
    intermediate: '중급',
    advanced: '상급',
    all: '전체',
  };

  const levelColors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700',
    all: 'bg-blue-100 text-blue-700',
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setSelectedClass(null);
    setReservationForm({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <span className="text-xs font-bold text-[#c8ff00] tracking-widest">SMASH ACADEMY</span>
          <h1 className="text-3xl md:text-4xl font-black mt-1">배드민턴 아카데미</h1>
          <p className="text-gray-400 mt-2">전문 코치와 함께 실력을 한 단계 올려보세요</p>
        </div>
      </div>

      {/* Success Banner */}
      {submitted && (
        <div className="bg-[#c8ff00] text-black text-center py-4 font-bold text-sm">
          예약 신청이 완료되었습니다! 담당 코치가 확인 후 연락드리겠습니다. (데모)
        </div>
      )}

      {/* Academy Intro */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                국가대표 출신 코치의<br />체계적인 배드민턴 레슨
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                스매시 배드민턴 아카데미는 국가대표 출신 김민수 코치가 직접 운영하는
                배드민턴 전문 교육 기관입니다. 입문자부터 대회 준비 선수까지,
                개인의 수준에 맞는 체계적인 커리큘럼으로 지도합니다.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">15년</p>
                  <p className="text-xs text-gray-500">선수 경력</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">500+</p>
                  <p className="text-xs text-gray-500">수강생</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">98%</p>
                  <p className="text-xs text-gray-500">만족도</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 aspect-video flex items-center justify-center rounded-lg">
              <div className="text-center">
                <span className="text-7xl block mb-4">🏟️</span>
                <p className="text-sm text-gray-400">스매시 배드민턴 아카데미</p>
                <p className="text-xs text-gray-400">서울 강남구</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#888] tracking-widest">OUR COACHES</span>
            <h2 className="text-2xl font-black text-gray-900 mt-1">코치 소개</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coaches.map((coach) => (
              <div key={coach.name} className="bg-white p-6 border border-gray-100">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-black text-lg text-gray-900">{coach.name}</h3>
                  <p className="text-sm text-[#888]">{coach.title}</p>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {coach.career.map((item, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-[#c8ff00] mt-0.5">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 italic border-t border-gray-50 pt-4">
                  &ldquo;{coach.description}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#888] tracking-widest">PROGRAMS</span>
            <h2 className="text-2xl font-black text-gray-900 mt-1">수강 프로그램</h2>
          </div>

          <div className="space-y-6">
            {academyClasses.map((cls) => {
              const spotsLeft = cls.maxStudents - cls.currentStudents;
              const isFull = spotsLeft <= 0;

              return (
                <div
                  key={cls.id}
                  className="border border-gray-100 hover:border-gray-300 transition-all hover:shadow-md"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gray-50 flex items-center justify-center text-3xl shrink-0 rounded-lg">
                        {cls.level === 'beginner' ? '🌱' : cls.level === 'intermediate' ? '🔥' : cls.level === 'advanced' ? '🏆' : '⭐'}
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-black text-gray-900">{cls.title}</h3>
                              <span className={`text-xs font-bold px-2 py-0.5 ${levelColors[cls.level]}`}>
                                {levelLabels[cls.level]}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400">{cls.coach}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-black text-gray-900">{cls.price.toLocaleString()}원</p>
                            <p className="text-xs text-gray-400">/ 월</p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{cls.description}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs">
                          <div className="bg-gray-50 p-2 rounded">
                            <span className="text-gray-400 block">일정</span>
                            <span className="text-gray-700 font-medium">{cls.schedule}</span>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <span className="text-gray-400 block">기간</span>
                            <span className="text-gray-700 font-medium">{cls.duration}</span>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <span className="text-gray-400 block">장소</span>
                            <span className="text-gray-700 font-medium">{cls.location}</span>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <span className="text-gray-400 block">정원</span>
                            <span className="text-gray-700 font-medium">
                              {cls.currentStudents}/{cls.maxStudents}명
                              {!isFull && (
                                <span className="text-green-600 ml-1">({spotsLeft}자리 남음)</span>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-3">
                          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                isFull ? 'bg-red-400' : spotsLeft <= 3 ? 'bg-yellow-400' : 'bg-[#c8ff00]'
                              }`}
                              style={{ width: `${(cls.currentStudents / cls.maxStudents) * 100}%` }}
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <button
                            onClick={() => setSelectedClass(selectedClass === cls.id ? null : cls.id)}
                            disabled={isFull}
                            className={`px-6 py-2.5 text-sm font-bold transition-colors ${
                              isFull
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : selectedClass === cls.id
                                  ? 'bg-gray-200 text-gray-700'
                                  : 'bg-black text-white hover:bg-gray-800'
                            }`}
                          >
                            {isFull ? '마감' : selectedClass === cls.id ? '닫기' : '수강 신청'}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Reservation Form */}
                    {selectedClass === cls.id && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-4">수강 예약 신청</h4>
                        <form onSubmit={handleReservation} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                이름 <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={reservationForm.name}
                                onChange={(e) => setReservationForm({ ...reservationForm, name: e.target.value })}
                                className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-black"
                                placeholder="이름을 입력하세요"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                연락처 <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
                                required
                                value={reservationForm.phone}
                                onChange={(e) => setReservationForm({ ...reservationForm, phone: e.target.value })}
                                className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-black"
                                placeholder="010-0000-0000"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              이메일 <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={reservationForm.email}
                              onChange={(e) => setReservationForm({ ...reservationForm, email: e.target.value })}
                              className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-black"
                              placeholder="example@email.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              문의사항 (선택)
                            </label>
                            <textarea
                              rows={3}
                              value={reservationForm.message}
                              onChange={(e) => setReservationForm({ ...reservationForm, message: e.target.value })}
                              className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-black resize-none"
                              placeholder="배드민턴 경력, 목표 등을 자유롭게 작성해주세요"
                            />
                          </div>
                          <div className="flex gap-3">
                            <button
                              type="submit"
                              className="bg-[#c8ff00] text-black font-bold px-6 py-2.5 text-sm hover:bg-[#d4ff33] transition-colors"
                            >
                              예약 신청하기 (데모)
                            </button>
                            <button
                              type="button"
                              onClick={() => setSelectedClass(null)}
                              className="border border-gray-200 text-gray-500 font-medium px-6 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                            >
                              취소
                            </button>
                          </div>
                          <p className="text-xs text-gray-400">
                            * 데모 버전이므로 실제 예약은 되지 않습니다
                          </p>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Info */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#c8ff00] tracking-widest">FACILITY</span>
            <h2 className="text-2xl font-black mt-1">시설 안내</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏟️', title: '코트 4면', desc: '국제 규격 배드민턴 코트' },
              { icon: '🚿', title: '샤워실', desc: '쾌적한 남녀 분리 샤워실' },
              { icon: '🅿️', title: '주차장', desc: '무료 주차 50대 가능' },
              { icon: '🏪', title: '프로샵', desc: '장비 구매 및 스트링 서비스' },
            ].map(f => (
              <div key={f.title} className="text-center">
                <span className="text-4xl block mb-3">{f.icon}</span>
                <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center text-sm text-gray-400">
            <p>📍 서울특별시 강남구 테헤란로 123, 지하 1층</p>
            <p className="mt-1">📞 02-1234-5678 | ✉️ academy@smash-badminton.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
