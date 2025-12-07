import Link from 'next/link';
import { getConversationsByCategory, getCategorySummary, type Category } from '@/lib/mockData';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    category: Category;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  // カテゴリが有効かチェック
  const validCategories: Category[] = ['business', 'fan', 'complaint', 'other'];
  if (!validCategories.includes(category)) {
    notFound();
  }

  const conversations = getConversationsByCategory(category);
  const categoryInfo = getCategorySummary().find((c) => c.category === category);

  if (!categoryInfo) {
    notFound();
  }

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      return `${diffMinutes}分前`;
    } else if (diffHours < 24) {
      return `${diffHours}時間前`;
    } else {
      return `${diffDays}日前`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-xl">←</span>
            </Link>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span>{categoryInfo.icon}</span>
              <span>{categoryInfo.label}</span>
              <span className="text-sm font-normal text-gray-500">
                ({categoryInfo.count}件)
              </span>
            </h1>
          </div>
          <Link
            href="/settings"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xl">⚙️</span>
          </Link>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-md mx-auto">
        {conversations.length === 0 ? (
          <div className="px-4 py-12 text-center text-gray-500">
            メッセージがありません
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {conversations.map((conv) => (
              <Link
                key={conv.id}
                href={`/conversation/${conv.id}`}
                className="block bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="px-4 py-4 flex items-start gap-3">
                  {/* アバター */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {conv.username.charAt(1).toUpperCase()}
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {conv.username}
                      </h3>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                        {formatTime(conv.lastMessageTime)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-600 truncate flex-1">
                        📩 {conv.lastMessage}
                      </p>
                      {conv.isUnread && (
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
