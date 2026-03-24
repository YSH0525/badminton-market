import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로젝트 자료 다운로드 - SMASH',
  description: 'SMASH 배드민턴 마켓 프로젝트 관련 문서를 다운로드하세요.',
};

const documents = [
  {
    title: 'SMASH 배드민턴마켓 미팅자료',
    description:
      '프로젝트 현황, 개발 로드맵, 비용 산정, 운영비 시뮬레이션, 의뢰인 체크리스트 등을 포함한 종합 미팅 자료입니다.',
    fileName: 'SMASH_배드민턴마켓_미팅자료.pdf',
    updatedAt: '2026년 3월 16일',
    size: '75 KB',
    tags: ['미팅자료', '견적', '로드맵'],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mr-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            홈으로
          </Link>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            프로젝트 자료
          </h1>
          <p className="text-gray-400 text-lg">
            SMASH 배드민턴 마켓 프로젝트 관련 문서를 다운로드하세요.
          </p>
        </div>
      </section>

      {/* Document List */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {documents.map((doc) => (
            <div
              key={doc.fileName}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-red-500"
                      >
                        <path
                          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                          fill="currentColor"
                          opacity="0.15"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="14 2 14 8 20 8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="9"
                          y1="15"
                          x2="15"
                          y2="15"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="9"
                          y1="11"
                          x2="15"
                          y2="11"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {doc.title}
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm mb-3 ml-[52px]">
                    {doc.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 ml-[52px]">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs text-gray-400 ml-2">
                      {doc.size} &middot; {doc.updatedAt} 업데이트
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <a
                  href={`/docs/${doc.fileName}`}
                  download
                  className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3 text-sm hover:bg-gray-800 transition-colors rounded-lg flex-shrink-0 justify-center"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  PDF 다운로드
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>참고:</strong> 본 자료는 프로젝트 내부 미팅용으로
            작성되었으며, 모든 비용은 2026년 3월 기준 조사 내용입니다. 실제
            비용은 계약 조건과 사용량에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
