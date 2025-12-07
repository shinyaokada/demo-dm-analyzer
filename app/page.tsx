import Link from 'next/link';
import { getCategorySummary } from '@/lib/mockData';

export default function Home() {
  const categories = getCategorySummary();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <span>📊</span>
            <span>DM分類サマリー</span>
          </h1>
          <Link
            href="/settings"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xl">⚙️</span>
          </Link>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {categories.map((category) => (
            <Link
              key={category.category}
              href={`/category/${category.category}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow active:scale-98">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {category.label}
                      </h2>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {category.count}件
                      </p>
                    </div>
                  </div>
                  {category.unreadCount > 0 && (
                    <div className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      未読
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
