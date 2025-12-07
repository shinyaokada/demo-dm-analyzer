import Link from 'next/link';
import { getConversationById, getCategorySummary } from '@/lib/mockData';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ConversationPage({ params }: Props) {
  const { id } = await params;
  const conversation = getConversationById(id);

  if (!conversation) {
    notFound();
  }

  const categoryInfo = getCategorySummary().find((c) => c.category === conversation.category);

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-2">
            <Link
              href={`/category/${conversation.category}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-xl">←</span>
            </Link>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {conversation.username.charAt(1).toUpperCase()}
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">
                  {conversation.username}
                </h1>
              </div>
            </div>
          </div>
          {categoryInfo && (
            <div className="ml-11">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {categoryInfo.icon} {categoryInfo.label}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* メッセージエリア */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto px-4 py-6 space-y-4">
          {conversation.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isFromUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                  message.isFromUser
                    ? 'bg-blue-500 text-white rounded-br-sm'
                    : 'bg-white border border-gray-200 text-gray-900 rounded-bl-sm'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap break-words">
                  {message.content}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    message.isFromUser ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* アクションボタン */}
      <footer className="bg-white border-t border-gray-200 sticky bottom-0">
        <div className="max-w-md mx-auto px-4 py-4 space-y-2">
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all active:scale-98 flex items-center justify-center gap-2">
            <span>📱</span>
            <span>Instagramで返信</span>
          </button>
          <div className="flex gap-2">
            <button className="flex-1 bg-gray-100 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-200 transition-colors active:scale-98 flex items-center justify-center gap-2">
              <span>📦</span>
              <span>アーカイブ</span>
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-200 transition-colors active:scale-98 flex items-center justify-center gap-2">
              <span>⭐</span>
              <span>重要</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
