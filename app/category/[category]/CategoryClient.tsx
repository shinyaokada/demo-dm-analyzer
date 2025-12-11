'use client';

import Link from 'next/link';
import BottomNavigation from '@/components/BottomNavigation';
import { usePinnedConversations } from '@/contexts/PinnedConversationsContext';
import type { Conversation, CategorySummary, Category } from '@/lib/mockData';

interface CategoryClientProps {
  category: Category;
  allConversations: Conversation[];
  categoryInfo: CategorySummary | undefined;
}

export default function CategoryClient({ category, allConversations, categoryInfo }: CategoryClientProps) {
  const { isPinned } = usePinnedConversations();

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      return `${diffMinutes} min${diffMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
  };

  // Filter conversations based on category
  const conversations = category === 'pinned'
    ? allConversations.filter((conv) => isPinned(conv.id))
    : allConversations.filter((conv) => conv.category === category && !isPinned(conv.id));

  // Sort by last message time
  const sortedConversations = [...conversations].sort(
    (a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <span>{categoryInfo?.icon}</span>
            <span>{categoryInfo?.label}</span>
            <span className="text-sm font-normal text-gray-500">
              ({sortedConversations.length})
            </span>
          </h1>
          <Link
            href="/settings"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xl">⚙️</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto">
        {sortedConversations.length === 0 ? (
          <div className="px-4 py-12 text-center text-gray-500">
            No messages
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {sortedConversations.map((conv) => (
              <Link
                key={conv.id}
                href={`/conversation/${conv.id}`}
                className="block bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="px-4 py-4 flex items-start gap-3">
                  {/* Avatar */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {conv.username.charAt(1).toUpperCase()}
                  </div>

                  {/* Content */}
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

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
